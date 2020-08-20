/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default interface Tag {
    /**
     * ref - react ref object to link element.
     * @type RefObject<T>
     */
    ref: any;
    /**
     * label - label, will be displayed in navigation list.
     * @type string | any[]
     */
    label: string | any[];
    /**
     * topOffset - offset from the top of page. needs to calculate tags order in navigation list.
     * @type number
     */
    topOffset?: number;
}