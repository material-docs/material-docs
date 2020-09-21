/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export interface PageScrollData {
    /**
     * scrollY - vertical scroll
     * @type number
     */
    scrollY: number;
    /**
     * scrollX - horizontal scroll
     * @type number
     */
    scrollX: number;
}

/**
 * usePageScroll - React hook, used to get page scroll position.
 * @function
 * @returns {PageScrollData}
 * @example
 * const {scrollY, scrollX} = usePageScroll();
 */
export default function usePageScroll(): PageScrollData;
