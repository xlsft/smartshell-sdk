/**
 * ## utils/between
 * @param {number} min minimal value
 * @param {number} max maximum value
 * 
 * Generate random number between min and max
 * 
 *
 * ```ts
 *const result = between(1, 5) // random nuimber between 1 and 5
 * ```
 * 
 * @return random number between min and max
 */
export const between = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)