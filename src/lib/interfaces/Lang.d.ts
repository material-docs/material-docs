/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import PartialLang from "./PartialLang";

export default interface Lang
    extends PartialLang {
    /**
     * name - language name.
     * @type string
     */
    name: string;
    /**
     * label - language label.
     */
    label: string;
    /**
     * loadLang - function for data load when locale is not defined.
     * @function
     * @returns object
     */
    loadLang?(): object;
}