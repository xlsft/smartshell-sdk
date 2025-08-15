<script setup lang="ts">
    import { useClipboard } from '@ained/composables';
    import hljs from 'highlight.js';
    const router = useRouter()
    const route = useRoute()
    const code = () => {
        
        const elements = document.querySelectorAll('pre code:not([data-checked])')
        for (let i=0; i < elements.length; i++) { 
            const element = elements[i]
            
            const highlighted = hljs.highlight(element.textContent || '', { language: element.getAttribute('lang') || 'typescript' })
            element.innerHTML = highlighted.value
            console.log(element.innerHTML)
            element.innerHTML = element.innerHTML.replaceAll(
  /\|\|--\[\s*<span[^>]*>'(.*?)'<\/span>\s*,\s*<span[^>]*>'(.*?)'<\/span>\s*\]--\|\|/gm, 
  (_, href, text) => `<a href="${href}">${text}</a>`
);
            const button = document.createElement('button');
            button.classList.add('code-copy-button');
            button.onclick = () => { useClipboard(element.textContent || ''); toast.info('Скопировано в буфер обмена') }
            button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
            element.parentElement!.appendChild(button);
            element.setAttribute('data-checked', 'true')
        }
    }

    const headings = () => {
        const elements = document.querySelectorAll('h1:not([data-no-back])')
        for (let i=0; i < elements.length; i++) { 
            const element = elements[i]
            const button = document.createElement('button');
            button.classList.add('back-button');
            element.setAttribute('style','display: flex; gap: 12px; align-items: center; flex-direction: row-reverse; width: fit-content')
            element.setAttribute('data-no-back', 'true')
            button.onclick = () => { router.back() }
            button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0975 19.84L8.5775 13.32C7.8075 12.55 7.8075 11.29 8.5775 10.52L15.0975 4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            element.appendChild(button);
            element.setAttribute('data-no-back', 'true')
        }
    }

    onMounted(() => { code(); headings(); setInterval(() => { code(); headings() }, 100) })
</script>

<template>
    <div class="w-dwv h-dvh bg-gray-950 flex flex-col items-center overflow-hidden bg">
        <div class="w-full h-[60px] bg-gray-900/50 border-b border-gray-900 flex items-center justify-center">
            <div class="w-full max-w-[1248px] px-[24px] flex items-center justify-between gap-[24px]">
                <div class="items-center flex gap-[24px] max-sm:hidden">
                    <img src="/logo/single.png" alt="Smartshell SDK" class="text-white h-[42px] mb-[4px] hover:opacity-50 cursor-pointer hidden md:flex" @click="router.push('/')">
                    <img src="/logo/compact.png" alt="Smartshell SDK" class="text-white h-[42px] mb-[4px] hover:opacity-50 cursor-pointer flex md:hidden max-sm:hidden" @click="router.push('/')">
                </div>
                <div class="flex items-center justify-end max-sm:justify-center gap-[24px] grow text-sm">
                    <a href="/docs/start">Старт</a>
                    <a href="/docs/examples">Примеры</a>
                    <a href="/docs/reference/api">API</a>
                    <a href="/docs/reference/types">Референс</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/xlsft/smartshell-sdk">GitHub</a>
                    <a target="_blank" rel="noreferrer" href="https://jsr.io/@xlsft/smartshell-sdk">JSR</a>
                </div>
            </div>
        </div>
        <div class="w-full h-full py-[48px] px-[24px] flex flex-col overflow-x-hidden overflow-y-scroll max-w-[1248px]">
            <slot/>
        </div>
    </div>
</template>


<style>
    .bg {
        background-image: linear-gradient(#101828 .1em, transparent .1em),
                    linear-gradient(90deg, #101828 .1em, transparent .1em),
                    linear-gradient(#10182860 .1em, transparent .1em),
                    linear-gradient(90deg, #10182840 .1em, transparent .1em) !important;
        background-size: 20vw 20vw, 20vw 20vw, 5vw 5vw, 5vw 5vw !important;
    }

    pre .code-copy-button {
        opacity: 0
    }

    pre:hover .code-copy-button {
        opacity: 1
    }
    .code-copy-button {
        width: 24px;
        height: 24px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        top: 12px;
        right: 12px;
        cursor: pointer;
        stroke: 1.5px;
        z-index: 1000;
        transition-property: all;
        transition-timing-function: var(--tw-ease, cubic-bezier(0.4, 0, 0.2, 1) /*  */);
        transition-duration: var(--tw-duration, 150ms /*  */);
        stroke: #6a7282;
        background: #1e2939;
        border: 1px solid #414958;
        padding: 4px;
        cursor: pointer;
    }
    .code-copy-button:hover {
        stroke: oklch(0.623 0.214 259.815);
        border: 1px solid oklch(0.623 0.214 259.815);
    }

    .code-copy-button svg {
        width: 18px;
        height: 18px;
    }

    .back-button {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        cursor: pointer;
        stroke: 1.5px;
        z-index: 1000;
        transition-property: all;
        transition-timing-function: var(--tw-ease, cubic-bezier(0.4, 0, 0.2, 1) /*  */);
        transition-duration: var(--tw-duration, 150ms /*  */);
        stroke: #6a7282;
        background: #1e2939;
        border: 1px solid #414958;
        padding: 4px;
        cursor: pointer;
    }
    .back-button:hover {
        stroke: oklch(0.623 0.214 259.815);
        border: 1px solid oklch(0.623 0.214 259.815);
    }

    .back-button svg {
        width: 24px;
        height: 24px;
    }
</style>