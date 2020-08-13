/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default interface SearchDataItem {
    /**
     * redirect - url for redirect or callback function on redirect. Function will be called on list item key press.
     * @type string | function
     */
    redirect: string | (() => void);
    /**
     * label - page short overview.
     * @type string
     */
    label: string;
    /**
     * description - page summary.
     * @type string
     */
    description?: string;
    /**
     * tags - key words for search.
     * @type array
     */
    tags?: string[];
}