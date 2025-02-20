import { ref, onMounted, onUnmounted, Ref } from 'vue'

/**
 * ## useMediaQuery
 * @param {string} media valid media query
 * 
 * ```ts
 * const match = useMediaQuery('(min-width: 1000px)'); // Became true if window size is greater than 1000px
 * ```
 * 
 * @return {Ref<boolean>} reactive proxy
 */
export const useMediaQuery = (media: string): Ref<boolean> => {
   const match = ref(false)
   const check = () => match.value = matchMedia(media).matches ? false : true
   onMounted(() => { addEventListener('resize', check); check() })
   onUnmounted(() => removeEventListener('resize', check))
   return match
}