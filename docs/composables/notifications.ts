import { useUUID, easing, useTweened, useDebouncer } from '@ained/composables'

const decorations = {
    success: { color: '#22c55e', icon: '/toast/success.svg' },
    danger: { color: '#ef4444', icon: '/toast/error.svg' },
    warning: { color: '#eab308', icon: '/toast/warning.svg' },
    info: { color: '#3b82f6', icon: '/toast/info.svg' },
    dialog: { color: '#E5E7EB', icon: '/toast/dialog.svg' }
}

export type NotificationEvent = {
    message: {
        id: string
        data: {
            id: string
            model: string
            title?: string
            message?: string
            replace?: string
            call?: {
                type: 'in' | 'out'
                from: string
                to: string
                start: string
            }
            type: "success" | "danger" | "warning" | "info" | "dialog"
        }

        created_at: string
    }
}

export class Notification {

    public id
    public key
    public date
    public style
    public data

    constructor(public event: NotificationEvent) {
        this.id = event.message.id
        this.key = event.message.id
        this.date = new Date(event.message.created_at)
        this.style = decorations[event.message.data.type]
        this.data = event.message.data
    }


    replace(message: NotificationEvent['message']) {
        this.id = message.id
        this.date = new Date(message.created_at)
        this.style = decorations[message.data.type]
        this.data = message.data
    }

    public kill = () => { }
}

const ttl = {
    'DialActiveNotification': -1,
    'DialRingNotification': -1,
    'DialEndNotification': 4000
}

export class Notifications {

    stack = ref<Notification[]>([])
    debouncer = useDebouncer(4000)

    constructor() {}
    
    clear() {
        this.stack.value = []
    }

    create(data: NotificationEvent, ttl = 10000) {
        const notification = new Notification(data)
        notification.kill = () => {
            this.stack.value.splice(this.stack.value.findIndex(v => notification.id === v.id)!, 1)
        }
        if (this.stack.value.length > 5) this.stack.value.shift()

        if (ttl > 0) setTimeout(() => this.stack.value.find(v => notification.id === v.id) && this.stack.value.splice(this.stack.value.findIndex(v => notification.id === v.id)!, 1), ttl)
        if (!data.message.data.replace) this.stack.value.push(notification)
        if (data.message.data.replace && this.stack.value.find(v => v.id === data.message.data.replace)) this.stack.value[this.stack.value.findIndex(v => v.id === data.message.data.replace)!].replace(data.message)
    }

    toast = {
        info: (content: string) => this.create({ message: { id: useUUID(), created_at: new Date().toISOString(), data: { id: useUUID(), model: 'Toast', message: content, type: 'info' } } }, 3000),
        error: (content: string) => this.create({ message: { id: useUUID(), created_at: new Date().toISOString(), data: { id: useUUID(), model: 'Toast', message: content, type: 'danger' } } }, 3000),
        warning: (content: string) => this.create({ message: { id: useUUID(), created_at: new Date().toISOString(), data: { id: useUUID(), model: 'Toast', message: content, type: 'warning' } } }, 3000),
        warn: (content: string) => this.create({ message: { id: useUUID(), created_at: new Date().toISOString(), data: { id: useUUID(), model: 'Toast', message: content, type: 'warning' } } }, 3000),
        success: (content: string) => this.create({ message: { id: useUUID(), created_at: new Date().toISOString(), data: { id: useUUID(), model: 'Toast', message: content, type: 'success' } } }, 3000),
    }
}


export const notifications = new Notifications()
export const toast = notifications.toast

