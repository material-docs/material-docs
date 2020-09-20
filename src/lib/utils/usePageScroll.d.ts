/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/**
 * usePageScroll - React hook, used to get page scroll position.
 * @function
 * @returns {{scrollY: number, scrollX: number}}
 * @example
 * const {scrollY, scrollX} = usePageScroll();
 */
export default function usePageScroll(): {scrollY: number, scrollX: number};