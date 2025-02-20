<script setup lang="ts">
    import { useDeeplink } from '@ained/composables';
    const router = useRouter()
</script>

<template>
    <div class="w-dwv h-dvh bg-gray-950 flex flex-col items-center">
        <div class="w-full h-[60px] bg-gray-900/30 border-b border-gray-900 flex items-center justify-center px-[24px]">
            <div class="w-full max-w-[1200px] flex items-center justify-between gap-[24px]">
                <div class="flex items-center">
                    <img src="/logo/xl.png" alt="API SDK for SMARTSHELL ERP" class="text-white h-[24px] hover:opacity-50 cursor-pointer" @click="useDeeplink('tg://resolve?domain=xlsoftware')">
                    <div class="h-[60px] w-px bg-gray-900 mx-[24px]"></div>
                    <img src="/logo/single.png" alt="API SDK for SMARTSHELL ERP" class="text-white h-[42px] mb-[4px] hover:opacity-50 cursor-pointer" @click="router.push('/')">
                    <div class="h-[60px] w-px bg-gray-900 ml-[48px]"></div>
                </div>
                <div class="flex items-center gap-[24px]">
                    <div class="h-[60px] w-px bg-gray-900 "></div>
                    <a href="/docs/guide">Гайды</a>
                    <a href="/docs/examples">Примеры</a>
                    <a href="/docs/reference">Референс</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/xlsft/smartshell-sdk">GitHub</a>
                </div>
            </div>
        </div>
        <div class="w-full h-full pt-[48px] flex flex-col overflow-x-hidden overflow-y-scroll max-w-[1200px]">
            <slot/>
        </div>
    </div>
</template>