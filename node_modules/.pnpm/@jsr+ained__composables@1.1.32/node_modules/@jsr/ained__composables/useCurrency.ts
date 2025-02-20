/**
 * ## useCurrency
 * Formats a given number into a currency string based on provided options.
 *
 * This function allows customizing the locale, currency code, and the level of decimal accuracy (min/max fraction digits).
 *
 * ```ts
 * const formatted = useCurrency(1234.56, { 
 *     currency: { locale: 'en-US', code: 'USD' }, 
 *     accuracy: { min: 2, max: 2 } 
 * }); 
 * // "$1,234.56"
 * ```
 *
 * @param value The numeric value to format as currency.
 * @param options (Optional) Formatting options:
 *  - `currency`: Optional object with:
 *     - `locale`: String specifying the locale (default: 'ru-RU').
 *     - `code`: String representing the currency code (default: 'RUB').
 *  - `accuracy`: Optional object with:
 *     - `min`: Minimum number of decimal places (default: 0).
 *     - `max`: Maximum number of decimal places (default: 0).
 *
 * @return The formatted currency string.
 */
export const useCurrency = (value: number, options?: { currency?: { locale?: string, code?: string }, accuracy?: { min?: number, max?: number }}): string => {
    const props = {
        currency: { 
            locale: 'ru-RU', code: 'RUB',
            ...options?.currency ? options.currency : {} 
        },
        accuracy: {
            min: 0, max: 0,
            ...options?.accuracy ? options.accuracy : {}
        }
    }
    return new Intl.NumberFormat(props.currency.locale, { 
        style: 'currency', 
        currency: props.currency.code, 
        minimumFractionDigits: props.accuracy.min, 
        maximumFractionDigits: props.accuracy.max, 
    }).format(value)
}