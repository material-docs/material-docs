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

/**
 * Tagable - react component, basic tagable header.
 * @param {TagableProps} props
 * @constructor
 */
export function Tagable(props: TagableProps): JSX.Element;

/**
 * H1 - react component, designed to create h1 header.
 * @param {TagableProps} props
 * @constructor
 * @example
 * <H1>I am h1 header with tag</H1>
 */
export function H1(props: TagableProps): JSX.Element;

/**
 * H2 - react component, designed to create h2 header.
 * @param {TagableProps} props
 * @constructor
 * @example
 * <H2>I am h2 header with tag</H2>
 */
export function H2(props: TagableProps): JSX.Element;

/**
 * H3 - react component, designed to create h3 header.
 * @param {TagableProps} props
 * @constructor
 * @example
 * <H3>I am h1 header with tag</H3>
 */
export function H3(props: TagableProps): JSX.Element;

/**
 * H4 - react component, designed to create h4 header.
 * @param {TagableProps} props
 * @constructor
 * @example
 * <H4>I am h1 header without tag</H4>
 */
export function H4(props: TagableProps): JSX.Element;

/**
 * H5 - react component, designed to create h5 header.
 * @param {TagableProps} props
 * @constructor
 * @example
 * <H5>I am h1 header without tag</H5>
 */
export function H5(props: TagableProps): JSX.Element;

/**
 * H6 - react component, designed to create h6 header.
 * @param {TagableProps} props
 * @constructor
 * @example
 * <H6>I am h1 header without tag</H6>
 */
export function H6(props: TagableProps): JSX.Element;

/**
 * Header - react component, designed to create any header component.
 * @param {HeaderProps} props
 * @constructor
 * @example
 * <Header heading={2}>I am h1 header without tag</Header>
 */
export function Header(props: HeaderProps): JSX.Element;