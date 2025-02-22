<script setup lang="ts">
    const props = defineProps<{ title: string, subtitle: string, art: string }>()
</script>

<template>
    <div class="w-fit grow h-fit p-[24px] gap-[24px] border border-blue-500 bg-blue-500/30 relative overflow-hidden rounded-[8px]">
        <img :src="`/art/${art}.png`" class="absolute right-[-10px] bottom-[-40px]  h-[calc(100%*1.2)] md:h-[calc(100%*1.5)] max-h-[150px]">
        <div class="flex flex-col w-full gap-[8px] pr-[220px]">
            <div class="font-bold w-fit" v-html="title"></div>
            <div class="text-xs w-fit" v-html="subtitle"></div>
        </div>
    </div>
</template>