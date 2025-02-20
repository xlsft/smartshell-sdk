import Fuse, { IFuseOptions } from 'fuse.js'

/**
 * ## useFuzzy
 * Creates a fuzzy search instance using `Fuse.js` for searching through a list of items.
 *
 * @param list The array of items to search through.
 * @param options (Optional) Configuration options for the `Fuse.js` instance, such as search keys, threshold, etc.
 *
 * This function returns an instance of `Fuse`, which can be used to perform fuzzy searches on the provided list.
 *
 * ```ts
 * const items = [{ name: 'apple' }, { name: 'banana' }];
 * const fuse = useFuzzy(items, { keys: ['name'] });
 * const result = fuse.search('app'); // [{ item: { name: 'apple' } }]
 * ```
 *
 * @return Instance of `Fuse` initialized with the provided list and options.
 * 
 * `Fuse.js` docs: https://www.fusejs.io
 */
export const useFuzzy = <Item = unknown>(list: Item[], options?: IFuseOptions<Item>): Fuse<Item> => {
    const fuse = new Fuse(list, options)
    return fuse
}