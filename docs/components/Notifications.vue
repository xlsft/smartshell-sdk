<script setup lang="ts">
    import { Notification, notifications, type NotificationEvent } from '~/composables/notifications'
    
    const z = ref()
    

    const calc = () => {
        let max = 0;
        const elements = document.querySelectorAll('*:not(#nuxt-devtools-anchor)');
        elements.forEach(element => {
            const i = window.getComputedStyle(element).zIndex;    
            if (!/nuxt/i.test(element.id) && !isNaN(Number(i)) && Number(i) < 1000000 ) max = Math.max(max, Number(i))
        })
        z.value = max + 1
    }; watch (() => notifications.stack.value.length, calc); onMounted(calc)
</script>

<template>
    <Teleport to="body"> 
        <div class="absolute top-0 left-0 w-dvw h-dvh pointer-events-none flex gap-[12px] items-center md:items-end flex-col pt-[84px] px-[24px] duration-500 transition-all" :style="`z-index: ${z}`">
            <TransitionGroup name="notifications-list">
                <div 
                    class="
                        bg-[#0A101D] outline transition-all
                        rounded-lg overflow-hidden flex flex-col items-center gap-[24px]
                        relative md:max-w-[580px] md:w-fit w-full text-gray-200
                        data-[type=success]:outline-green-500
                        data-[type=danger]:outline-red-500
                        data-[type=warning]:outline-yellow-500
                        data-[type=info]:outline-blue-500
                        data-[type=dialog]:outline-[#E5E7EB]
                    " 
                    :key="item.key"
                    :id="`notification-${item.id}-list`" 
                    :data-type="item.data.type" 
                    v-for="item in notifications.stack.value"
                >
                    <div class="px-[24px] py-[12px] flex gap-[12px] w-full">
                        <img :src="item.style.icon" :alt="item.data.type" class="">
                        <div class="flex flex-col justify-center">
                            <span class="text-sm text-gray-800 leading-[100%] mb-[2px]">{{ item.data.message }}</span>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<style>

    .notifications-list-move, .notifications-list-enter-active, .notifications-list-leave-active {
        transition-property: all !important;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        transition-duration: 700ms !important;
    }

    .notifications-list-enter-from, .notifications-list-leave-to {
        opacity: 0;
        margin-top: -64px;
        transform: translateY(30px);
    }

    .notifications-list-leave-active { position: absolute }

</style>