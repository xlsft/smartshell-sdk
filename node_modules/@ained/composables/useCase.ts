/**
 * ## useCase
 * @param {number} number The number to evaluate for pluralization.
 * @param {string} one The singular form of the word.
 * @param {string} some The form for a few (2-4).
 * @param {string} many The plural form of the word.
 * @param {boolean} [text] Optional flag to return only the word without the number.
 * @param {string} [zero] Optional word to return if the number is zero.
 * 
 * This function is intended to return the appropriate form of a word based on the given number,
 * useful for implementing pluralization in user interfaces or reports.
 *
 * ```ts
 * const result = useCase(5, 'apple', 'apples', 'apples'); // "5 apples"
 * ```
 * 
 * @return {string} The appropriate form of the word based on the input number.
 */
export const useCase = (number: number, one: string, some: string, many: string, text?: boolean, zero?: string): string => {
    let n = Math.abs(number) % 100;
    let n1 = n % 10;
    if (n ===0 && text) return zero || ''
    if (n > 10 && n < 20) return text ? many : `${number} ${many}`
    if (n1 > 1 && n1 < 5) return text ? some : `${number} ${some}`
    if (n1 === 1) return text ? one : `${number} ${one}`
    return text ? many : `${number} ${many}`;
}