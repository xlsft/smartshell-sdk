<script setup lang="ts">
    import Loading from '~/components/Loading.vue';

    type Item = { value: string, label: string, type: 'dir' | 'file' | 'section', icon?: string, children?: Item[] }
    const data = ref<{ error?: string, tree: Item[], page: string }>()

    onMounted(async () => {
        data.value = (await $fetch<{ error?: string, tree: Item[], page: string }>('/api/struct', { method: 'post', body: { path: useRoute().params.path }}))
        if (data.value.error) createError({ statusCode: 404, statusMessage: data.value.error })
    })

</script>

<template>
    <div v-if="data" v-html="data.page"></div>
    <Loading v-else/>
</template>