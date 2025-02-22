// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    vite: { plugins: [tailwindcss() as any] },
    css: ['~/assets/css/main.css'],
    ssr: false,
    app: {
        head: {
            title: 'SmartShell SDK',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Современное, полностью типизированное, динамически генерирующееся, постоянно актуальное SDK для взаимодействия с публичным API ERP системы управления компьютерными клубами SmartShell' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
            ],
        }
    }
})