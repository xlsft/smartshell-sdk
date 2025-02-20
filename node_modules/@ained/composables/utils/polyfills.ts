/**
 * ## polyfills
 *
 * This function extends native JavaScript objects with additional methods.
 * It adds polyfills for `Date`, `Array`, `String`, and `Math` to provide utility functions that are not available in the default JavaScript implementation.
 *
 * ### Polyfills added:
 *
 * - `Date.prototype.addHours`: Adds hours to a `Date` object.
 * - `Date.prototype.addMonth`: Adds months to a `Date` object, handling month overflow.
 * - `Array.prototype.diff`: Returns the difference between two arrays.
 * - `Array.prototype.unique`: Returns an array with unique elements.
 * - `String.prototype.hexEncode`: Converts a string to its hexadecimal representation.
 * - `String.prototype.hexDecode`: Converts a hexadecimal string back to its original string.
 * - `Math.fixed`: Rounds a number to a specified number of decimal places.
 *
 * ```ts
* polyfills();
* const date = new Date().addHours(2); // Adds 2 hours to the current date
* const arr = [1, 2, 2, 3].unique(); // Returns [1, 2, 3]
* ```
*
* @return {void}
*/
export const polyfills = (): void => {
    /**
     * ## Date.prototype.addHours
     * @param {number} h Number of hours to add
     *
     * Adds the specified number of hours to the current `Date` object.
     *
     * ```ts
     * const date = new Date();
     * date.addHours(5);
     * console.log(date); // 5 hours later
     * ```
     *
     * @return {Date} Updated `Date` object with added hours
     */
    Date.prototype.addHours = function (h: number): Date {
        this.setTime(this.getTime() + h * 60 * 60 * 1000);
        return this;
    };

    /**
     * ## Date.prototype.addMonth
     * @param {number} m Number of months to add
     *
     * Adds the specified number of months to the current `Date` object.
     * Handles month overflow by setting the date to the last valid day of the month if necessary.
     *
     * ```ts
     * const date = new Date();
     * date.addMonth(1);
     * console.log(date); // 1 month later
     * ```
     *
     * @return {Date} Updated `Date` object with added months
     */
    Date.prototype.addMonth = function (m: number): Date {
        const day = this.getDate();
        this.setMonth(this.getMonth() + m);
        if (this.getDate() !== day) this.setDate(0);
        return this;
    };

    /**
     * ## Array.prototype.diff
     * @param {T[]} a Array to compare against
     *
     * Returns an array of values that are present in the current array but not in the provided array `a`.
     *
     * ```ts
     * const arr1 = [1, 2, 3];
     * const arr2 = [2, 3, 4];
     * console.log(arr1.diff(arr2)); // [1]
     * ```
     *
     * @return {T[]} Difference between the two arrays
     */
    Array.prototype.diff = function <T>(a: T[]): T[] {
        return this.filter((x: T) => !a.includes(x));
    };

    /**
     * ## Array.prototype.unique
     *
     * Returns a new array with only the unique elements from the original array.
     *
     * ```ts
     * const arr = [1, 2, 2, 3, 4, 4];
     * console.log(arr.unique()); // [1, 2, 3, 4]
     * ```
     *
     * @return {T[]} Array with unique values
     */
    
    Array.prototype.unique = function <T>(): T[] {
        return [...new Set<T>(this)];
    };

    /**
     * ## String.prototype.hexEncode
     *
     * Encodes the current string into its hexadecimal representation.
     *
     * ```ts
     * const str = "Hello";
     * console.log(str.hexEncode()); // "00480065006c006c006f"
     * ```
     *
     * @return {string} Hexadecimal representation of the string
     */
    String.prototype.hexEncode = function (): string {
        let result = "";
        for (let i = 0; i < this.length; i++) {
            result += ("000" + this.charCodeAt(i).toString(16)).slice(-4);
        }
        return result;
    };

    /**
     * ## String.prototype.hexDecode
     *
     * Decodes the current string from its hexadecimal representation back to the original string.
     *
     * ```ts
     * const hex = "00480065006c006c006f";
     * console.log(hex.hexDecode()); // "Hello"
     * ```
     *
     * @return {string} Decoded string
     */
    String.prototype.hexDecode = function (): string {
        let hexes = this.match(/.{1,4}/g) || [];
        let result = "";
        for (let i = 0; i < hexes.length; i++) {
            result += String.fromCharCode(parseInt(hexes[i], 16));
        }
        return result;
    };

    /**
     * ## Math.fixed
     * @param {number} num The number to round
     * @param {number} decimal The number of decimal places to round to
     *
     * Rounds a number to the specified number of decimal places.
     *
     * ```ts
     * const num = 12.34567;
     * console.log(Math.fixed(num, 2)); // 12.35
     * ```
     *
     * @return {number} The rounded number
     */
    Math.fixed = function (num: number, decimal: number): number {
        const factor = Math.pow(10, decimal);
        return Math.round(num * factor) / factor;
    };
};
