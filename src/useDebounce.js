import { useRef } from "react";

export function useDebounce (fn, delay) {
    const timeoutRef = useRef(null);

    function debouncedFn (...parameters){
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() =>{
            fn(...parameters);
        }, delay);
    }

    return debouncedFn;
}