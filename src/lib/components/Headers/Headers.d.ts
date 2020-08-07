/// <reference types="react" />

export interface HeaderProps {
    /**
     * variant - variant of header. h1 h2 h3 h4 h5.
     * @type string
     */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5",
    /**
     * style - styles of the element.
     * @type object
     */
    style?: any,
    /**
     * className - css class of the element.
     * @type string
     */
    className?: string,
    /**
     * noDivider - if true, bottom divider line will not be displayed.
     * @type boolean
     */
    noDivider?: boolean,
    /**
     * noTag - if true, component will not provide tagging mechanism.
     * @type boolean
     */
    noTag?: boolean,
    /**
     * id - html id for the element to provide tagging mechanism.
     * @type string
     */
    id?: string,
    /**
     * classes - classes, applied to the element.
     * @type object
     */
    classes?: any,
    /**
     * Children of element. Component will generate id automatically from child if it possible.
     * @type any
     */
    children?: any,
}

export function Tagable(props: HeaderProps): JSX.Element;

export function H1(props: HeaderProps): JSX.Element;
export function H2(props: HeaderProps): JSX.Element;
export function H3(props: HeaderProps): JSX.Element;
export function H4(props: HeaderProps): JSX.Element;
export function H5(props: HeaderProps): JSX.Element;
