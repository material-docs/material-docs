/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default interface Lang {
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
     * locale - language data. Translation of different fields, etc.
     * @type object
     */
    locale?: object;
    /**
     * loadLang - function for data load when locale is not defined.
     * @function
     * @returns object
     */
    loadLang?(): object;
}