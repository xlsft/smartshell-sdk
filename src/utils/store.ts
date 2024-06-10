// deno-lint-ignore-file no-explicit-any
export class Store<T = never> {
    private _subscribers: ((value: T) => void)[] = []
    private _locked: boolean = false
    private _call(): void { this._subscribers.forEach(subscriber => subscriber(this.value)) }

    constructor(private value: T) {}

    set(value: T): Store<T> {
        if (this._locked) return this
        this.value = value
        this._call()
        return this
    }

    get(): T { return this.value }

    update(updater: (value: T) => T): Store<T> {
        if (this._locked) return this
        this.value = updater(this.value)
        this._call()
        return this
    }

    subscribe(_callback: (value: T) => void): Store<T> { this._subscribers.push(_callback); return this }
    
    lock(): Store<T> { this._locked = true; return this }
    locked() { return this._locked }
    unlock(): Store<T> { this._locked = false; return this }

    // Array methods
    push(...items: T extends (infer U)[] ? U[] : never): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).push(...items)
        this._call()
        return this
    }

    pop(): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).pop()
        this._call()
        return this
    }

    shift(): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).shift()
        this._call()
        return this
    }

    unshift(...items: T extends (infer U)[] ? U[] : never): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).unshift(...items)
        this._call()
        return this
    }

    splice(start: number, deleteCount?: number, ...items: T extends (infer U)[] ? U[] : never): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).splice(start || 0, deleteCount || 0, ...items)
        this._call()
        return this
    }

    sort(compareFn?: (a: T extends any[] ? T[0] : never, b: T extends any[] ? T[0] : never) => number): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).sort(compareFn)
        this._call()
        return this
    }

    reverse(): Store<T> {
        if (this._locked || !Array.isArray(this.value)) { return this }
        (this.value as unknown as any[]).reverse()
        this._call()
        return this
    }
}
