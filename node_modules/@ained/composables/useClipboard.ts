/**
 * ## useClipboard
 * @param {string} data The text data to be copied to the clipboard.
 * 
 * This function is intended to copy the provided text data to the clipboard, using the modern 
 * `navigator.clipboard` API if available, or falling back to a deprecated method if not. 
 * Useful for implementing clipboard functionality in web applications.
 *
 * ```ts
 * useClipboard('Hello, world!'); // Copies "Hello, world!" to clipboard.
 * ```
 * 
 * @return {void} This function does not return a value.
 */
export const useClipboard = (data: string): void => {
    if (navigator.clipboard) navigator.clipboard.writeText(data)
    else {
        const temp = document.createElement('input')
        temp.value = data
        document.body.appendChild(temp)
        temp.select()
        document.execCommand('copy') 
        document.body.removeChild(temp)
    }
}