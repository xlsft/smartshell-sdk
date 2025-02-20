import { onMounted, onUnmounted, Ref, ref } from "vue";

/**
 * ## usePureClick
 * Handles mouse and touch events to ensure a "pure" click without drag movement, 
 * triggering the provided click handler only when there is minimal movement between 
 * `mousedown`/`touchstart` and `mouseup`/`touchend`.
 * 
 * This utility is useful for distinguishing between clicks and drag actions, 
 * where a slight movement is ignored to ensure it's a true click.
 * 
 * ```ts
 * usePureClick(container, (event) => {
 *     console.log('Pure click detected');
 * });
 * ```
 * 
 * @param container The HTML element that will listen for the mouse and touch events.
 * @param click The callback function that is triggered on a pure click (minimal movement).
 * 
 * @return void
 */
export const usePureClick = (container: Ref<HTMLElement | null>, click: (event: MouseEvent | TouchEvent) => void): void => {
    const dragging = ref(false);
    let x = 0;
    let y = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const mouse = {
        down: (event: MouseEvent) => {
            dragging.value = false;
            x = event.clientX;
            y = event.clientY;
            timer = setTimeout(() => dragging.value = true, 200);
        },
        up: (event: MouseEvent) => {
            if (timer) clearTimeout(timer);
            dragging.value = Math.abs(event.clientX - x) > 5 || Math.abs(event.clientY - y) > 5;
        },
        click: (event: MouseEvent) => {
            if (dragging.value) return;
            click(event);
        }
    };

    const touch = {
        start: (event: TouchEvent) => {
            dragging.value = false;
            const touch = event.touches[0];
            x = touch.clientX;
            y = touch.clientY;
            timer = setTimeout(() => dragging.value = true, 200);
        },
        move: (event: TouchEvent) => {
            const touch = event.touches[0];
            dragging.value = Math.abs(touch.clientX - x) > 5 || Math.abs(touch.clientY - y) > 5;
        },
        end: (event: TouchEvent) => {
            if (timer) clearTimeout(timer);
            if (!dragging.value) click(event);
        }
    };

    onMounted(() => {
        if (!container.value) return
        container.value!.addEventListener('mousedown', mouse.down);
        container.value!.addEventListener('mouseup', mouse.up);
        container.value!.addEventListener('click', mouse.click);
        container.value!.addEventListener('touchstart', touch.start);
        container.value!.addEventListener('touchmove', touch.move);
        container.value!.addEventListener('touchend', touch.end);
    });

    onUnmounted(() => {
        if (!container.value) return
        container.value!.removeEventListener('mousedown', mouse.down);
        container.value!.removeEventListener('mouseup', mouse.up);
        container.value!.removeEventListener('click', mouse.click);
        container.value!.removeEventListener('touchstart', touch.start);
        container.value!.removeEventListener('touchmove', touch.move);
        container.value!.removeEventListener('touchend', touch.end);
    });
};
