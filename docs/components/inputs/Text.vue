<script setup lang="ts">
    import { useDebouncer, useUUID } from '@ained/composables';
    import type { SetupContext } from 'vue';

    const props = withDefaults(defineProps<{
        title?: string
        placeholder?: string
        required?: boolean
        disabled?: boolean
        debounce?: boolean
        readonly?: boolean
        check?: (value?: any) => boolean | Promise<boolean>
        checker?: boolean
        invalid?: boolean
        invalidText?: any
        clear?: boolean
        class?: string
        style?: any
        icon?: any
        labelStyle?: any
        containerStyle?: any
        dropdownStyle?: any
        inputStyle?: any
        iconStyle?: any
        labelClass?: any
        containerClass?: any
        dropdownClass?: any
        inputClass?: any
        iconClass?: any
        debounceDelay?: number
        dropdownDelay?: number
        blur?: boolean
        mask?: string
        min?: number
        max?: number
        value?: any
    }>(), {
        placeholder: 'Введите данные',
        debounceDelay: 300,
        dropdownDelay: 500
    });

    const emit = defineEmits(['action', 'input', 'blur', 'focus', 'enter', 'state', 'click']);
    const slots: SetupContext['slots'] = useSlots();
    const model = defineModel<any>(); if (props.value) model.value = props.value
    const valid = defineModel<boolean>('valid');
    const value = ref<string | undefined>('');
    const debouncer = useDebouncer(props.debounceDelay);
    const delay = ref(useDebouncer(props.dropdownDelay));
    const input = ref<HTMLInputElement | null>(null);
    const dropdown = ref<HTMLElement | null>(null);
    const container = ref<HTMLElement | null>(null);
    const id = useUUID()
    const state = ref({
        dropdown: false,
        readonly: false,
        invalid: props.invalid || false,
        invalidText: props.invalidText,
        hover: false,
        focus: false,
        pos: {
            mouse: { x: 0, y: 0 },
            dropdown: { x: 0, y: 0, w: 0, h: 0 },
            input: { x: 0, y: 0, w: 0, h: 0 }
        },
    });

    const mask = (value: string, mask: string): string => {
        let result = '', index = 0
        for (let i = 0; i < mask.length; i++) {
            const char = mask[i];
            if (index >= value.length) { if (char === '9' || char === 'A' || char === '*') break; else { result += char; continue } }
            const vchar = value[index];
            if (char === '9') { if (/\d/.test(vchar)) { result += vchar; index++ } else { index++; i--} } 
            else if (char === 'A') { if (/[a-zA-Z]/.test(vchar)) { result += vchar; index++ } else { index++; i-- } }
            else if (char === '*') { result += vchar; index++ } 
            else { result += char; if (vchar === char) index++ }
        }
        return result;
    }

    const unmask = (value: string, mask: string): string => {
        let result = '', index = 0
        for (let i = 0; i < mask.length && index < value.length; i++) {
            const char = mask[i];
            const vchar = value[index];
            if (char === '9') { if (/\d/.test(vchar)) { result += vchar; index++ } else { index++; i-- } } 
            else if (char === 'A') { if (/[a-zA-Z]/.test(vchar)) { result += vchar; index++ } else { index++; i-- } } 
            else if (char === '*') { result += vchar; index++ } 
            else { if (vchar === char) index++; else i++ }
        }
        return result;
    }

    const masked = computed({
        get() { return props.mask ? mask(unmask(value.value || '', props.mask), props.mask) : value.value },
        set(v: string) { value.value = props.mask ? mask(unmask(v, props.mask), props.mask) : v }
    });

    const update = {
        check: async () => {
            if (!props.check) return
            valid.value = false
            const result = await props.check(value.value || '')
            state.value.invalid = value.value ? !result : false
            valid.value = result
        },
        model: () => {
            if (value.value === '') model.value = props.clear ? undefined : '';
            else model.value = props.mask ? unmask(value.value || '', props.mask) : value.value;
        },
        value: async () => {
            if (model.value === undefined || model.value === null) value.value = '';
            else value.value = props.mask ? mask(model.value.toString(), props.mask) : model.value
            await update.check()
        },
        mouse: (e: MouseEvent) => {
            state.value.pos.mouse = { x: e.pageX, y: e.pageY };
        },
        pos: (element: HTMLElement) => {
            if (!element) return { x: 0, y: 0, w: 0, h: 0 };
            const rect = element.getBoundingClientRect();
            return {
                x: rect.left + window.scrollX || document.documentElement.scrollLeft,
                y: rect.top + window.scrollY || document.documentElement.scrollTop,
                w: rect.width,
                h: rect.height
            };
        },
        state: () => {
            const position = update.pos(input.value!);
            state.value = {
                ...state.value,
                readonly: props.readonly,
                pos: {
                    ...state.value.pos,
                    dropdown: { x: position.x, y: position.y + 38 + 8, w: position.w, h: update.pos(input.value!).h },
                    input: position,
                }
            };
        }
    };

    const controller = new AbortController();
    const interval = ref(setInterval(() => update.state(), 200))
    onMounted(() => {
        update.value();
        update.state();

        watch(() => value.value, () => props.debounce ? debouncer.use(() => update.model()) : update.model());
        watch(() => model.value, update.value);
        watch(() => props.readonly, update.state);
        watch(() => props.dropdownDelay, () => { debouncer.clear(); delay.value = useDebouncer(props.dropdownDelay); });
        watch(() => props.invalid, () => state.value.invalid = props.invalid)
        watch(() => props.invalidText, () => state.value.invalidText = props.invalidText)
        update.check()
        if (!slots.dropdown || !container.value?.parentElement) return;

        addEventListener('mousemove', (e: MouseEvent) => { update.mouse(e); update.state() }, { signal: controller.signal });
        addEventListener("resize", () => { update.state(); state.value.dropdown = false; }, { signal: controller.signal });
        addEventListener("touchmove", () => { update.state(); state.value.dropdown = false; }, { signal: controller.signal });
        container.value?.parentElement.addEventListener('scroll', () => state.value.dropdown = false, { signal: controller.signal })
        container.value?.parentElement.addEventListener('wheel', () => state.value.dropdown = false, { signal: controller.signal })
        addEventListener('click', async (event: MouseEvent) => {
            if (!dropdown.value || !input.value || state.value.dropdown === false) return
            const rect = {
                dropdown: dropdown.value.getBoundingClientRect(),
                input: input.value!.getBoundingClientRect()
            }
            const safe = 4
            const [ fx, fy, sx, sy, cx, cy ] = [ rect.input.left - safe, rect.input.top - safe, rect.dropdown.width + (safe*2), rect.dropdown.height + rect.input.height + 8 + (safe*2), event.clientX, event.clientY ]
            if (!(fx <= cx && fy <= cy && fx + sx >= cx && fy + sy >= cy)) state.value.dropdown = false
        })
        addEventListener('input_opened', (e: any) => state.value.dropdown = e.detail === id, { signal: controller.signal })
        input.value!.addEventListener('resize', update.state, { signal: controller.signal });
        input.value!.addEventListener('focus', () => { state.value.focus = true; emit('focus', model.value); }, { signal: controller.signal });
        input.value!.addEventListener('blur', () => setTimeout(() => { state.value.focus = false; emit('blur', model.value); }, 100), { signal: controller.signal });
    });

    watch(state, () => emit('state', state.value), { deep: true });
    onBeforeUnmount(() => { 
        controller.abort()
        clearInterval(interval.value)
    });
    defineExpose({ dropdown: delay.value });

</script>

<template>
    
    <div
        ref="container"
        class="transition-all group/input relative"
        :class="`${props.class} ${title ? 'mt-[16px]' : ''} ${disabled ? 'disabled' : ''}`"
        :style="{ ...style }"
        @click="() => { state.dropdown = !state.dropdown }"
        @mouseenter="delay.clear()"
        @mouseleave="delay.use(() => { if (props.blur) { state.dropdown = false; input?.blur(); } })"
    >
        <span v-if="title" class="text-[12px] break-keep whitespace-nowrap absolute top-[-20px]" :style="labelStyle" :class="`${invalid ? 'text-red-500' : `text-gray-500`} ${labelClass}`">
            {{ title }} <span v-if="required" class="text-red-500 text-[12px]">*</span>
        </span>
        <div
            class="flex gap-[12px] items-center h-[38px] relative z-10"
            :style="props.containerStyle"
            :class="props.containerClass"
        >
        
            <input
                ref="input"
                type="text"
                v-model="masked"
                @click="emit('click', value)"
                @mouseenter="state.hover = true"
                @mouseleave="state.hover = false"
                @select="(e) => state.readonly ? (e.target! as HTMLInputElement).selectionStart = (e.target! as HTMLInputElement).selectionEnd : null"
                class="transition-all font-[400] outline-none disabled:opacity-50 disabled:grayscale disabled:bg-gray-950 placeholder:text-[14px] text-[14px] bg-gray-950 disabled:cursor-not-allowed text-gray-800 rounded-lg px-3 py-2 disabled:text-gray-500 placeholder-text-gray-500 w-full h-full border border-gray-900 hover:border-blue-500"
                :class="`${state.readonly ? 'text-transparent selection:text-transparent selection:bg-gray-950' : ''} ${state.invalid === true ? 'placeholder:text-red-500 hover:border-red-500 border-red-500 ring-red-500 text-red-500 bg-red-100' : `${valid && props.checker ? 'placeholder:text-green-500/50 hover:placeholder:text-green-500 focus:placeholder:green-blue-500 focus:border-green-500  border-green-500 hover:border-green-500' : 'placeholder:text-gray-500 hover:placeholder:text-blue-500 focus:placeholder:text-blue-500 focus:border-blue-500'}`} ${props.inputClass}`"
                :style="props.inputStyle"
                :readonly="state.readonly"
                :placeholder
                :maxlength="props.mask ? props.mask?.length : max"
                :minlength="min"
                @keyup.enter="emit('enter', model)"
                @input="emit('input', masked)"
            >
            <component
                v-if="props.icon"
                :is="props.icon"
                class="w-[18px] absolute top-1/2 right-[12px] translate-y-[-50%] cursor-pointer stroke-[1.5px] pointer-events-auto z-1000 transition-all"
                :class="`${invalid ? 'stroke-red-500 group-hover/input:stroke-red-500 hover:opacity-50' : `${valid && props.checker ? 'stroke-green-500/50 hover:stroke-green-500 group-hover/input:stroke-green-500' : 'stroke-gray-500 hover:stroke-blue-500 group-hover/input:stroke-blue-500'}`} ${props.iconClass}`"
                :style="props.iconStyle"
                @click="emit('action', model)"
            />
            
            <div
                class="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none rounded-lg overflow-hidden"
                v-if="slots.input"
            >
                <slot name="input"></slot>
            </div>
        </div>
    </div>
    <Teleport to="body">
        <span v-if="state.invalidText" class="px-[8px] py-[2px] absolute bg-red-100 border border-red-500 rounded-md z-[99999999999999] text-[10px] text-red-500 pointer-events-none transition-all" :class="`${state.hover && state.invalid ? 'opacity-100' : 'opacity-0'}`" :style="`top: ${state.pos.dropdown.y}px; left: ${state.pos.dropdown.x}px; max-width: ${state.pos.dropdown.w}px; min-width: ${state.pos.dropdown.w}px`" v-html="state.invalidText"></span>
        <div
            v-if="slots.dropdown"
            @mouseenter="delay.clear()"
            @mouseleave="delay.use(() => { state.dropdown = false; input?.blur(); })"
            ref="dropdown"
            :class="`${state.dropdown ? 'opacity-100 *:pointer-events-auto translate-y-[0px] blur-0' : 'opacity-0 pointer-events-none translate-y-[25px] blur-md'} transition-all duration-300 absolute bg-gray-950 z-[99999999999] rounded-lg border border-gray-900 max-h-[300px] overflow-y-scroll shadow-lg scrollbar-hide ${props.dropdownClass}`"
            :style="`left: ${state.pos.dropdown.x}px; top: ${state.pos.dropdown.y}px; width: ${state.pos.input.w}px; ${props.dropdownStyle}`"
        >
            <slot name="dropdown"></slot>
        </div>
    </Teleport>
</template>


<style>
    .disabled { filter: grayscale(); opacity: .5; pointer-events: none }
</style>