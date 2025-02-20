class Debouncer {
    private timeout
    constructor(private wait: number) {}
    use(action: () => void) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => action(), this.wait)
    }
    clear() {
        clearTimeout(this.timeout)
    }
}

/**
 * ## useDebouncer
 * @param {number} wait The amount of time in milliseconds to wait before executing the action.
 * 
 * This function is intended to create an instance of the `Debouncer` class, which allows for 
 * debouncing actions to prevent them from being called too frequently. Useful for handling 
 * events like scrolling or resizing in web applications.
 *
 * ```ts
 * const debouncer = useDebouncer(300);
 * debouncer.use(action);
 * debouncer.clear()
 * ```
 * 
 * @return {Debouncer} An instance of the `Debouncer` class.
 */
export const useDebouncer = (wait: number): Debouncer => new Debouncer(wait)