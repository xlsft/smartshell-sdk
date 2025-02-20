<script setup lang="ts">
    const props = defineProps<{ title: string }>()
</script>

<template>
    <div class="px-[8px] py-[4px] rounded-md text-xs h-[24px] flex gap-[8px] w-fit items-center justify-center bg-blue-500/50 border border-blue-500">
        {{ title }}
    </div>
</template>