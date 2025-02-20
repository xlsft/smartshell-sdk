<script setup lang="ts">
    import String from './String.vue';
    import IconArrow from '~/assets/icons/arrow.svg';
    import IconDelete from '~/assets/icons/delete.svg';
    import { Vue3Marquee } from 'vue3-marquee';

    const model = defineModel<any>();
    const valid = defineModel<boolean>('valid');
    const emit = defineEmits(['item-click', 'item-dblclick'])

    const props = withDefaults(defineProps<{
        options: Record<string, any>
        title?: any
        placeholder?: any
        required?: boolean
        disabled?: boolean
        invalid?: boolean
        label?: any
        value?: any
        style?: any
        icon?: any
        clear?: boolean
        empty?: any
        hide?: boolean
        check?: (value?: any) => boolean | Promise<boolean>
        checker?: boolean
        interactive?: boolean // ghost prop
    }>(), { label: 'label', value: 'value', empty: 'Нет данных', hide: true })
    
    const state = ref({
        dropdown: false
    })
    const valid_model = ref(valid.value)
    const options = ref(props.options); watch(() => props.options, () => { options.value = props.options; update() }, { deep: true })
    const preview = ref()
    const update = () => preview.value = props.options.find((option: any) => option[props.value] === model.value)?.[props.label]
    onMounted(update); watch(model, update, { deep: true })
</script>

<template>
    <InputsString :style readonly blur :invalid :checker v-model:valid="valid_model" :title placeholder="" :required :disabled :icon :clear input-style="cursor: pointer !important;" @state="data => state = data">
        <template #dropdown>
            <div class="w-full h-full flex flex-col gap-[4px] p-[8px] scrollbar-default" v-if="!$slots.dropdown">
                <button class="group select-tab-button" v-for="option, i in options" :data-selected="model === option[value] && model !== undefined && option[value] !== undefined" @dblclick="async () => { emit('item-dblclick', option, i) }" @click="async () => { emit('item-click', option, i); model = option[value]; props.check ? valid = valid_model = await props.check(option[value]) : null; props.hide ? state.dropdown = false : null }"  v-if="options && options.length > 0">
                    <Vue3Marquee v-if="!$slots.item" animate-on-overflow-only>
                        <span class="w-full text-left overflow-hidden text-ellipsis" >{{ option[label] }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Vue3Marquee>
                    <slot name="item" v-else :option :i></slot>
                </button>
                <div class="w-full text-center text-[14px] py-[24px] text-gray-500" v-else>
                    {{ empty }}
                </div>
                <slot name="bottom"></slot>
            </div>
            <slot name="dropdown" v-else></slot>
        </template>
        <template #input>
            <div class="flex w-[calc(100%-24px)] gap-[8px] absolute top-1/2 translate-y-[-50%] right-[12px] justify-between group/inner">
                <span v-if="model !== undefined && preview" class="font-[400] text-[14px] h-[18px] text-nowrap overflow-hidden text-ellipsis min-h-[18px] flex items-center"  :class="`${invalid ? 'group-hover/input:text-red-500 text-red-500' : 'text-gray-800'}`" >{{ preview }}</span>
                <span class="font-[400] text-[14px] text-nowrap overflow-hidden text-ellipsis h-[18px] min-h-[18px] flex items-center w-full" :class="`${invalid ? 'group-hover/input:text-red-500 text-red-500' : 'group-hover/input:text-indigo-500 text-gray-500'}`" v-else>{{ placeholder }}</span>
                <div class="flex gap-[8px] items-center" :class="icon ? 'mr-[18px]' : ''">
                    <button class="group/clear pointer-events-auto" @click="async () => { model = props.clear ? undefined : null; props.check ? valid = await props.check(props.clear ? undefined : null) : null; }" v-if="model && clear">
                        <IconDelete class="w-[18px] h-[18px] min-w-[18px] min-h-[18px] transition-all stroke-[1.5px] origin-center duration-500" :class="`${ invalid ? 'stroke-red-500 group-hover/clear:stroke-red-500/30' : 'stroke-gray-500 group-hover/clear:stroke-indigo-500'}`"/>
                    </button>
                    <IconArrow class="w-[18px] h-[18px] min-w-[18px] min-h-[18px] transition-all stroke-[1.5px] origin-center duration-500" :class="`${ state.dropdown ? 'rotate-[90deg]' : 'rotate-[-90deg]'} ${ invalid ? `stroke-red-500` : `${ state.dropdown ? 'stroke-indigo-500' : 'stroke-gray-500 group-hover/input:stroke-indigo-500'}`} `"/>
                </div>
            </div>
        </template>
    </InputsString>
</template>


<!-- <style>
    .select-tab-button {
        @apply overflow-hidden text-gray-800 text-nowrap w-full h-[32px] min-h-[32px] font-[400] text-[14px]
        stroke-gray-800
        flex items-center text-sm rounded-md gap-[8px] px-[12px] py-[8px] 
        hover:bg-indigo-500/20 hover:text-indigo-500
        hover:stroke-indigo-500 disabled:bg-indigo-500/20 
        disabled:text-indigo-500 disabled:stroke-indigo-500 
        disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed transition-all 
        data-[selected=true]:bg-indigo-500/20 
        data-[selected=true]:text-indigo-500 
        data-[selected=true]:stroke-indigo-500
    }
</style> -->