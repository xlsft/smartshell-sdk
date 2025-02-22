import { promises as fs } from 'fs';
import { resolve } from 'path';

type Item = { value: string, label: string, type: 'dir' | 'file' | 'section', icon?: string, children?: Item[] }
const useTree = async () => {
    const tree: Item[] = []
    const route = (...path: string[]) => resolve(`content${path ? `/${path.join('/')}` : ''}`)

    tree.push({ value: '/docs/start', label: 'Начало работы', icon: '/tree/start.svg', type: 'file', children: [
        { value: '/docs/start#introduction', label: 'Введение', icon: '/tree/info.svg', type: 'section' },
        { value: '/docs/start#installation', label: 'Установка', icon: '/tree/install.svg', type: 'section' },
        { value: '/docs/start#auth', label: 'Авторизация', icon: '/tree/auth.svg', type: 'section' },
        { value: '/docs/start#config', label: 'Конфигурация', icon: '/tree/config.svg', type: 'section' },
        { value: '/docs/start#errors', label: 'Обработка ошибок', icon: '/tree/error.svg', type: 'section' },
        { value: '/docs/start#middleware', label: 'Плагины и обработчики', icon: '/tree/middleware.svg', type: 'section' }
    ]})

    tree.push({ value: '/docs/examples', label: 'Примеры использования', type: 'file', children: [
        { value: '/docs/examples#hello', label: 'Привет, я!', type: 'section' },
        { value: '/docs/examples#client', label: 'Клиент по номеру', type: 'section' },
        { value: '/docs/examples#reload', label: 'Перезагрузить клуб', type: 'section' },
        { value: '/docs/examples#review', label: 'Бонусы за отзыв', type: 'section' },
        { value: '/docs/examples#delivery', label: 'Энергетик с доставкой', type: 'section' }
    ]})

    tree.push({ value: '/docs/reference', label: 'Референсы', type: 'dir', icon: '/tree/reference.svg', children: [
        { value: '/docs/reference/api', label: 'API', type: 'dir', icon: '/tree/api.svg', children: [
            { value: '/docs/reference/api/query', label: 'Query', icon: '/tree/query.svg', type: 'dir', children: (await fs.readdir(route('reference/api/query'), { withFileTypes: true })).map(file => (
                { value: `/docs/reference/api/query/${file.name}`, label: file.name, icon: '/tree/request.svg', type: 'file' })
            )},
            { value: '/docs/reference/api/mutation', label: 'Mutations', icon: '/tree/mutation.svg', type: 'dir', children: (await fs.readdir(route('reference/api/mutation'), { withFileTypes: true })).map(file => (
                { value: `/docs/reference/api/mutation/${file.name}`, label: file.name, icon: '/tree/request.svg', type: 'file' })
            )},
            { value: '/docs/reference/api/ShellApiClub', label: 'ShellApiClub', icon: '/tree/type.svg', type: 'file' },
            { value: '/docs/reference/api/ShellApiCredentials', label: 'ShellApiCredentials', icon: '/tree/type.svg', type: 'file' },
            { value: '/docs/reference/api/ShellApiCredentialsUser', label: 'ShellApiCredentialsUser', icon: '/tree/type.svg', type: 'file' },
            { value: '/docs/reference/api/ShellApiEndpoint', label: 'ShellApiEndpoint', icon: '/tree/type.svg', type: 'file' },
            { value: '/docs/reference/api/ShellApiResponse', label: 'ShellApiResponse', icon: '/tree/type.svg', type: 'file' },
            { value: '/docs/reference/api/ShellApiResponseError', label: 'ShellApiResponseError', icon: '/tree/type.svg', type: 'file' },
            { value: '/docs/reference/api/ShellApiVHost', label: 'ShellApiVHost', icon: '/tree/type.svg', type: 'file' }
        ]},
        { value: '/docs/reference/sdk', label: 'SDK', type: 'dir', icon: '/tree/sdk.svg', children: (await fs.readdir(route('reference/sdk'), { withFileTypes: true })).map(file => (
            { value: `/docs/reference/sdk/${file.name}`, label: file.name, icon: '/tree/type.svg', type: 'file' })
        )},
        { value: '/docs/reference/types', label: 'Модели', type: 'dir', icon: '/tree/models.svg', children: (await fs.readdir(route('reference/types'), { withFileTypes: true })).map(file => (
            { value: `/docs/reference/types/${file.name}`, label: file.name, icon: '/tree/type.svg', type: 'file' })
        )}
    ]})

    return tree
}

export default defineEventHandler(async (event) => {
 
    const { path, index } = await readBody(event)
    const route = resolve(`content${path ? `/${path.join('/')}` : ''}`)
    const options: { type?: 'dir' | 'file' } = {}
    const tree = await useTree()
    const find = (route: string): Item | undefined => {
        let result: Item | undefined = undefined
        const traverse = (children: Item[]) => {
            for (const child of children) {
                if (child.value === route) result = child
                else if (child.children) traverse(child.children)
            }
        }; traverse(tree)
        return result
    }

    const construct = {
        dir: async (): Promise<string> => {
            const data = await fs.readdir(route, { withFileTypes: true })
            const item = find(`${path ? `/docs/${path.join('/')}` : ''}`)
            return /*html*/`
                <h1 style="display: flex; gap: 12px; align-items: center;">
                    ${ item ? item.label : 'Документация' }
                </h1>
                <ul>
                    ${data.map(file => { const route = path ? `/docs/${path.join('/')}/${file.name}` : `/docs/${file.name}`; const current = find(route); return /*html*/`
                        <li>
                            <a href="${route}" data-type="${file.isDirectory() ? 'dir' : 'file'}" style="display: flex; gap: 12px; align-items: center;">
                                <img src="${current?.icon ? current.icon : `/tree/${file.isDirectory() ? 'dir.svg' : 'file.svg'}`}" style="width: 18px; opacity: .5">
                                <span>${current?.label || file.name}<span>
                            </a>
                        </li>
                    `}).join('\n')}
                </ul>              
            `
        },
        file: async (): Promise<string> => {
            const html = await fs.readFile(route, 'utf-8')
            return html
        }
    }

    if (!path) options.type = 'dir'
    else { try {
        const stat = await fs.lstat(route)
        options.type = stat.isDirectory() ? 'dir' : 'file'
    } catch (e) { return { error: 'path not found' } }}

    return { tree, page: await construct[options.type as keyof typeof construct]() }

})
   