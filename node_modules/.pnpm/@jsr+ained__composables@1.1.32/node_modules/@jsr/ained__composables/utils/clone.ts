/**
 * ## utils/clone
 * @param proxy Proxy, like `reactive()` or `ref()`
 * 
 * This function is intended to replace native `structuredClone`, because `structuredClone` can't clone proxies
 *
 * ```ts
 *type ProxyType = { json: string };
 *const proxy = ref<ProxyType>({ json: 'json in proxy' });
 *const result = clone<ProxyType>(proxy.value); // { json: 'json in proxy' }
 * ```
 * 
 * @return Clone of proxy without proxy
 */
export const clone = <T = any>(proxy: any): T => JSON.parse(JSON.stringify(proxy))