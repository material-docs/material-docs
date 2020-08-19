/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface TagableProps
    extends Stylable, Containerable {
    /**
     * variant - variant of header. h1 h2 h3 h4 h5.
     * @type string
     */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5";
    /**
     * noDivider - if true, bottom divider line will not be displayed.
     * @type boolean
     */
    noDivider?: boolean;
    /**
     * noTag - if true, component will not provide tagging mechanism.
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

export interface HeaderProps
    extends TagableProps {
    /**
     * haeding - heading depth.
     * @type number
     * @default 1
     */
    heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Tagable(props: TagableProps): JSX.Element;

export function H1(props: TagableProps): JSX.Element;

export function H2(props: TagableProps): JSX.Element;

export function H3(props: TagableProps): JSX.Element;

export function H4(props: TagableProps): JSX.Element;

export function H5(props: TagableProps): JSX.Element;

export function H6(props: TagableProps): JSX.Element;

export function Header(props: HeaderProps): JSX.Element;