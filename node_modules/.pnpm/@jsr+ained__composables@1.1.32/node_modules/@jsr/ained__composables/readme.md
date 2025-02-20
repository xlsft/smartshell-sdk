# Ained Composables for Vue 3

To use polyfills add this to global.d.ts file
```ts
interface Date {
    addHours: (h: number) => Date
    addMonth: (m: number) => Date
}

interface Array<T> {
    diff: <T = any>(arr: T[]) => T[]
    unique: <T = any>() => T[]
}

interface String {
    hexEncode: () => string,
    hexDecode: () => string
}

interface Math {
    fixed: (num: number, decimal: number) => number
}
```