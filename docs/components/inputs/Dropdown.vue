<script setup lang="ts">
    import Text from './Text.vue';
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
    <Text :style readonly blur :invalid :checker v-model:valid="valid_model" :title placeholder="" :required :disabled :icon :clear input-style="cursor: pointer !important;" @state="data => state = data">
        <template #dropdown>
            <div class="w-full h-full flex flex-col gap-[4px] p-[8px] scrollbar-default" v-if="!$slots.dropdown">
                <button class="group overflow-hidden text-gray-800 text-nowrap w-full h-[32px] min-h-[32px] font-[400] text-[14px]
        stroke-gray-800
        flex items-center text-xs rounded-md gap-[8px] px-[12px] py-[8px] 
        hover:bg-blue-500/20 hover:text-blue-500
        hover:stroke-blue-500 disabled:bg-blue-500/20 
        disabled:text-blue-500 disabled:stroke-blue-500 
        disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed transition-all 
        data-[selected=true]:bg-blue-500/20 
        data-[selected=true]:text-blue-500 
        data-[selected=true]:stroke-blue-500 cursor-pointer" v-for="option, i in options" :data-selected="model === option[value] && model !== undefined && option[value] !== undefined" @dblclick="async () => { emit('item-dblclick', option, i) }" @click="async () => { emit('item-click', option, i); model = option[value]; props.check ? valid = valid_model = await props.check(option[value]) : null; props.hide ? state.dropdown = false : null }"  v-if="options && options.length > 0">
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
                <span class="font-[400] text-[14px] text-nowrap overflow-hidden text-ellipsis h-[18px] min-h-[18px] flex items-center w-full" :class="`${invalid ? 'group-hover/input:text-red-500 text-red-500' : 'group-hover/input:text-blue-500 text-gray-500'}`" v-else>{{ placeholder }}</span>
                <div class="flex gap-[8px] items-center" :class="icon ? 'mr-[18px]' : ''">
                    <button class="group/clear pointer-events-auto" @click="async () => { model = props.clear ? undefined : null; props.check ? valid = await props.check(props.clear ? undefined : null) : null; }" v-if="model && clear">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="`${ invalid ? 'stroke-red-500 group-hover/clear:stroke-red-500/30' : 'stroke-gray-500 group-hover/clear:stroke-blue-500'}`">
                            <path
                                d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.3301 16.5H13.6601" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M9.5 12.5H14.5" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
    
                    </button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[18px] h-[18px] min-w-[18px] min-h-[18px] transition-all stroke-[1.5px] origin-center duration-500" :class="`${ state.dropdown ? 'rotate-[90deg]' : 'rotate-[-90deg]'} ${ invalid ? `stroke-red-500` : `${ state.dropdown ? 'stroke-blue-500' : 'stroke-gray-500 group-hover/input:stroke-blue-500'}`} `">
                        <path
                            d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
    
                </div>
            </div>
        </template>
    </Text>
</template>


<!-- <style>
    .select-tab-button {
        @apply 
    }
</style> -->