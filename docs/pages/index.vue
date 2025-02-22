<script setup lang="ts">
    import { useClipboard, useDeeplink } from '@ained/composables';
    import Text from '~/components/inputs/Text.vue'
    import Dropdown from '~/components/inputs/Dropdown.vue'
    import IconCopy from '~/components/icons/IconCopy.vue'
    const helper = ref('pnpm')
    const install = {
        'pnpm': 'pnpm dlx jsr add @xlsoftware/smartshell-sdk',
        'deno': 'deno add jsr:@xlsoftware/smartshell-sdk',
        'npm': 'npx jsr add @xlsoftware/smartshell-sdk',
        'bun': 'bunx jsr add @xlsoftware/smartshell-sdk',
        'yarn': 'yarn dlx jsr add @xlsoftware/smartshell-sdk'
    }
</script>

<template>
    <div class="w-full h-fit relative flex flex-col">
        <h1 data-no-back>SmartShell SDK</h1> <Badge title="v1.0.1 (Все еще бета)" class="absolute top-0 right-0 hidden lg:flex"/>
        <p>Современное, полностью типизированное, динамически генерирующееся, постоянно актуальное SDK для взаимодействия с публичным API ERP системы управления компьютерными клубами SmartShell</p>
        <div class="w-full h-full flex flex-wrap items-center justify-center gap-[24px] my-[12px]">
            <FactCard title="100% покрытие типами" subtitle="Типы напрямую экспортированные из интроспекции API" art="typescript"/>
            <FactCard title="Актуальность" subtitle="Динамическая генерация модулей запросов" art="pipeline"/>
            <FactCard title="Готовое к работе из коробки" subtitle="Решение испытанное клубами в нескольких регионах России" art="briefcase"/>
        </div>
        <h2>Быстрый старт</h2> 
        <h3>Установка</h3> 
        <p>Установите пакет <code>smartshell-sdk </code> с помощью вашего пакетного менеджера. Для хранения пакета используется <code>JSR</code> - реестр пакетов доступный во всех пакетных менеджерах экосистемы JS и TS</p>
        <div class="w-full flex items-center justify-center gap-[12px] card my-[24px]">
            <Dropdown :options="[{ label: 'PNPM', value: 'pnpm' }, { label: 'Deno', value: 'deno' }, { label: 'NPM', value: 'npm' }, { label: 'Bun', value: 'bun' }, { label: 'Yarn', value: 'yarn' }]" v-model="helper"  class="w-[150px]"/>
            <Text readonly @action="() => { useClipboard(install[helper as keyof typeof install]); toast.info('Скопировано в буфер обмена')}" v-model="install[helper as keyof typeof install]" :icon="IconCopy" class="w-full"/>
        </div>

        <p>Импортируйте пакет в свой проект</p>
        <pre><code>import { "||--['/docs/reference/sdk/Shell','Shell']--||" } from "@xlsoftware/smartshell-sdk";</code></pre>
        
        <p>Создайте инстанс класса <code>Shell</code>. Можно указать данные для авторизации, изменить хост (scope) api, или сделать инстанс анонимным для запроса публичной информации без нужды в авторизации</p>
        <pre><code>// Shell instance
const shell = await new Shell({
    credentials: { login: '79998887766', password: 'password123' }
})

// Anonymous instance
const shell = await new Shell({
    anonymous: true
})

// Client-sided login
const client = await new Shell({
    host: 'mobile-auth'
    credentials: { login: '79998887766', password: 'password123' }
})</code></pre>

        <p>🎉 Отлично! При инициализации нового инстанса автоматически происходит авторизация и все доступные вам операции можно вызывать через SDK без дополнительной настройки!</p>
        
        <div class="w-full h-full py-[24px] flex items-end justify-between">
            <img src="/logo/xl.png" alt="XL Software" class="text-white h-[38px] hover:opacity-50 cursor-pointer" @click="useDeeplink('tg://resolve?domain=xlsoftware')">
            <span class="text-xs opacity-50 text-right">@{{ new Date().getFullYear() }} XL Software | MIT License<br>SmartShell SDK - свободный проект с открытым исходным кодом и не имеет отношения к SmartShell.<br>Торговая марка "SmartShell" принадлежит ООО "Смарт Шелл", ОГРН: 1217800044330, ИНН: 7801696720<br><br>ИП Торшин Илья Евгеньевич, ОГРНИП: 323480000011992, ИНН: 482308004814</span>
        </div>
    </div>

</template>