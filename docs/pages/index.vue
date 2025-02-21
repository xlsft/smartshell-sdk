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
    <div class="w-full h-fit relative flex flex-col gap-[48px]">
        <h1>SmartShell SDK</h1> <Badge title="v1.0.1 (Все еще бета)" class="absolute top-0 right-0 hidden lg:flex"/>
        <p>Современное, полностью типизированное, динамически генерирующееся, постоянно актуальное SDK для взаимодействия с публичным API ERP системы управления компьютерными клубами SmartShell</p>
        <div class="w-full h-full flex flex-wrap items-center justify-center gap-[24px]">
            <div class="w-full lg:w-fit grow h-fit p-[24px] gap-[24px] card stroke-white duration-500 flex items-center justify-center group">
                <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M17 1C8.16344 1 1 8.16345 1 17V85C1 93.8366 8.16345 101 17 101H85C93.8366 101 101 93.8366 101 85V17C101 8.16344 93.8366 1 85 1H17ZM51.1189 36.6088L51.1453 39.7917H40.0079L40.0079 69H32.154V39.7982H21.0166V36.6723C20.995 35.8902 20.9993 34.8899 21.0032 33.9854C21.0046 33.652 21.006 33.3311 21.006 33.0394C21.0375 33.0394 21.1804 33.0385 21.4234 33.0371L21.4259 33.037C23.0362 33.0272 29.0096 32.9908 36.1351 33.0022L51.0756 33.0394L51.1189 36.6088ZM71.1878 33.3624C73.2355 33.796 75.0963 34.7717 76.5352 36.1666C77.3279 36.9215 78.0161 37.7618 78.5847 38.6687C78.6112 38.7672 74.8947 41.0394 72.6407 42.3069C72.559 42.3572 72.2342 42.0354 71.8662 41.5407C71.4544 40.8966 70.87 40.358 70.1675 39.9752C69.465 39.5924 68.6673 39.3779 67.849 39.3517C65.2583 39.1897 63.5889 40.4243 63.6009 42.4885C63.5785 42.9957 63.7056 43.499 63.969 43.9464C64.5391 45.0191 65.5975 45.6627 68.9219 46.9739C75.0414 49.3709 77.6682 50.9514 79.2895 53.1973C80.2059 54.6164 80.7703 56.2006 80.9432 57.8391C81.1161 59.4776 80.8932 61.1306 80.2902 62.6824C79.4614 64.3842 78.1472 65.8532 76.484 66.9368C74.8208 68.0204 72.8692 68.6791 70.8318 68.8446C68.6661 69.0706 66.4779 69.05 64.3178 68.7833C61.009 68.2885 57.961 66.8433 55.6195 64.6591C54.7348 63.7525 53.9858 62.7434 53.3921 61.6579C53.6417 61.4889 53.9046 61.3368 54.1786 61.2026C54.5587 61.0056 55.9972 60.2526 57.3539 59.5368L59.8171 58.2233L60.3319 58.9063C61.1989 60.0346 62.3025 60.9958 63.5793 61.7346C64.8687 62.3782 66.3292 62.6832 67.798 62.6155C69.2668 62.5479 70.686 62.1103 71.8974 61.3515C72.5223 60.7972 72.913 60.0605 73.0009 59.2705C73.0889 58.4804 72.8686 57.6874 72.3785 57.0303C71.7146 56.1656 70.3579 55.4389 66.5019 53.9175C63.4784 52.9897 60.7244 51.4519 58.446 49.419C57.3609 48.2938 56.5596 46.9661 56.0982 45.5291C55.757 43.8921 55.7067 42.2159 55.9491 40.5644C56.4017 38.664 57.4855 36.9361 59.0534 35.615C60.6214 34.2938 62.5977 33.4433 64.7147 33.1786C66.8703 32.9442 69.0524 33.0061 71.1878 33.3624Z"/>
                </svg>

                <div class="flex flex-col w-full gap-[8px]">
                    <div class="font-bold w-fit">100% покрытие типами</div>
                    <div class="text-xs w-fit">Типы напрямую экспортированные<br>из интроспекции API</div>
                </div>
            </div>
            <div class="w-full lg:w-fit grow h-fit p-[24px] gap-[24px] card stroke-white duration-500 flex items-center justify-center group">
                <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1C8.16344 1 1 8.16345 1 17V85C1 93.8366 8.16345 101 17 101H85C93.8366 101 101 93.8366 101 85V17C101 8.16344 93.8366 1 85 1H17Z"/>
                    <path d="M23 51C23 66.4644 35.5356 79 51 79C66.4644 79 79 66.4644 79 51C79 35.5356 66.4644 23 51 23C35.5356 23 23 35.5356 23 51Z"/>
                </svg>

                <div class="flex flex-col w-full gap-[8px]">
                    <div class="font-bold w-fit">Актуальность</div>
                    <div class="text-xs w-fit flex flex-wrap items-center gap-[4px]">Динамическая генерация<br>модулей запросов</div>
                </div>
            </div>
            <div class="w-full lg:w-fit grow h-fit p-[24px] gap-[24px] card stroke-white duration-500 flex items-center justify-center group">
                <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1C8.16344 1 1 8.16345 1 17V85C1 93.8366 8.16345 101 17 101H85C93.8366 101 101 93.8366 101 85V17C101 8.16344 93.8366 1 85 1H17Z"/>
                    <path d="M31.9 74C30.5525 74 29.3994 73.5263 28.4406 72.5788C27.4818 71.6314 27.0016 70.4911 27 69.1579V42.5263C27 41.1947 27.4802 40.0552 28.4406 39.1078C29.401 38.1603 30.5541 37.6858 31.9 37.6842H41.7V32.8421C41.7 31.5105 42.1802 30.371 43.1406 29.4236C44.101 28.4761 45.2541 28.0016 46.6 28H56.4C57.7475 28 58.9014 28.4745 59.8618 29.4236C60.8222 30.3726 61.3016 31.5121 61.3 32.8421V37.6842H71.1C72.4475 37.6842 73.6014 38.1587 74.5618 39.1078C75.5222 40.0568 76.0016 41.1963 76 42.5263V69.1579C76 70.4895 75.5206 71.6298 74.5618 72.5788C73.6031 73.5279 72.4491 74.0016 71.1 74H31.9ZM46.6 37.6842H56.4V32.8421H46.6V37.6842Z" />
                </svg>

                <div class="flex flex-col w-full gap-[8px]">
                    <div class="font-bold w-fit">Production ready</div>
                    <div class="text-xs w-fit">Решение испытанное клубами в<br>нескольких регионах России</div>
                </div>
            </div>
        </div>
        <h2>Быстрый старт</h2> 
        <h3>Установка</h3> 
        <p>Установите пакет <code>smartshell-sdk </code> с помощью вашего пакетного менеджера. Для хранения пакета используется <code>JSR</code> - реестр пакетов доступный во всех пакетных менеджерах экосистемы JS и TS</p>
        <div class="w-full flex items-center justify-center gap-[12px] card">
            <Dropdown :options="[{ label: 'PNPM', value: 'pnpm' }, { label: 'Deno', value: 'deno' }, { label: 'NPM', value: 'npm' }, { label: 'Bun', value: 'bun' }, { label: 'Yarn', value: 'yarn' }]" v-model="helper"  class="w-[150px]"/>
            <Text readonly @action="() => { useClipboard(install[helper as keyof typeof install]); toast.info('Скопировано в буфер обмена')}" v-model="install[helper as keyof typeof install]" :icon="IconCopy" class="w-full"/>
        </div>

        <p>Импортируйте пакет в свой проект</p>
        <pre><code>import { "||--['/docs/reference/sdk/Shell','Shell']--||" } from "@xlsoftware/smartshell-sdk";</code></pre>
        
        <p>Создайте инстанс класса <code>Shell</code>. Можно указать данные для авторизации, изменить хост (scope) api, или сделать инстанс анонимным для запроса публичной информации без нужды в авторизации</p>
        <pre><code>  
// Shell instance
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
})
        </code></pre>

        <p>🎉 Отлично! При инициализации нового инстанса автоматически происходит авторизация и все доступные вам операции можно вызывать через SDK без дополнительной настройки!</p>
        
        <div class="w-full h-full py-[24px] flex items-end justify-between">
            <img src="/logo/xl.png" alt="XL Software" class="text-white h-[38px] hover:opacity-50 cursor-pointer" @click="useDeeplink('tg://resolve?domain=xlsoftware')">
            <span class="text-xs opacity-50 text-right">@{{ new Date().getFullYear() }} XL Software | MIT License<br>SmartShell SDK - свободный проект с открытым исходным кодом и не имеет отношения к SmartShell.<br>Торговая марка "SmartShell" принадлежит ООО "Смарт Шелл", ОГРН: 1217800044330, ИНН: 7801696720<br><br>ИП Торшин Илья Евгеньевич, ОГРНИП: 323480000011992, ИНН: 482308004814</span>
        </div>
    </div>

</template>