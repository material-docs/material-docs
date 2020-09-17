/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export const displayName: string;

export interface TagableProps
    extends Stylable, Containerable {
    /**
     * variant - variant of header. h1 h2 h3 h4 h5.
     * @default "h1"
     * @type string
     */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5";
    /**
     * noDivider - if true, bottom divider line will not be displayed.
     * @default false
     * @type boolean
     */
    noDivider?: boolean;
    /**
     * noTag - if true, component will not provide tagging mechanism.
     * @default false
     * @type boolean
     */
    noTag?: boolean;
    /**
     * id - html id for the element to provide tagging mechanism.
     * @type string
     */
    id?: string;
    /**
     * Children of element. Component will generate id automatically from child if it possible.
     * @type any
     */
    children?: any;
}

/**
 * Tagable - react component, basic tagable header.
 * @param {TagableProps} props
 * @constructor
 */
export default function Tagable(props: TagableProps): JSX.Element;
