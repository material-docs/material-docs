/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export interface LocaleProps {
    /**
     * path - path to the data in the Lang.locale. Exampele: "hello/darkness/my".
     * @type string
     * @example
     * locale={"myComponent/field1/name"}
     */
    path?: string;
    /**
     * children - children of the component. Will be displayed by default if can not load data from Lang.
     * @type any
     */
    children?: string;
}

/**
 * Locale - react component, designed to get data from Lang.locale.
 * @function
 * @param {LocaleProps} props
 * @constructor
 * @example
 * <Locale path={"storage/myComponent/greeting"}/>
 */
export default function Locale(props: LocaleProps): JSX.Element;
