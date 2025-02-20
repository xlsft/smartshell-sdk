/**
 * ## useUUID
 * Generates a unique identifier (UUID) in the format of `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.
 *
 * This function creates a UUID by replacing characters in a predefined string with random hexadecimal values.
 *
 * ```ts
 * const uuid = useUUID(); // e.g., 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
 * ```
 *
 * @return A randomly generated UUID as a string.
 */
export const useUUID = (): string => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string): string => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
})