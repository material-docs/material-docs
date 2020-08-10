/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface HeaderProps
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

export function Tagable(props: HeaderProps): JSX.Element;

export function H1(props: HeaderProps): JSX.Element;
export function H2(props: HeaderProps): JSX.Element;
export function H3(props: HeaderProps): JSX.Element;
export function H4(props: HeaderProps): JSX.Element;
export function H5(props: HeaderProps): JSX.Element;
