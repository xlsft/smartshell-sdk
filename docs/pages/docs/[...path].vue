<script setup lang="ts">
    const data = (await useFetch('/api/struct', { method: 'post', body: { path: useRoute().params.path }})).data
</script>

<template>
    {{ data }}
</template>