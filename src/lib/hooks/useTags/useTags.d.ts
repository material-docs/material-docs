/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />

export interface TaggingContext {
    /**
     * setTag - function, designed to add tagable element to page.
     * @function
     * @param {string} key
     * @param {{ref: RefObject<T>, label: string}} value
     * @example
     * const {setTag} = useTags();
     * setTag("my-object-key", {label: "my label", ref: ObjectRef});
     */
    setTag(key: string, value: {ref: any, label: string}): void;
    /**
     * removeTag - function, designed to remove tagable element from page.
     * @param {string} key
     * @example
     * const {removeTag} = useTags();
     * removeTag("my-object-key");
     */
    removeTag(key: string): void;
    /**
     * tags - all registered tags in page
     * @type any
     */
    tags: {};
}

/**
 * useTags - React hook, used to provide tagable mechanism.
 * @returns {{setTag: setTag, tags: *}}
 * @example
 * const {setTag} = useTags();
 */

declare const useTags: () => TaggingContext;
export default useTags;