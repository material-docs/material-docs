/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import Containerable from "../../interfaces/Containerable";
import Stylable from "../../interfaces/Stylable";

export const displayName: string;

export interface LinkProps
    extends Containerable, Stylable {
    /**
     * page - page route. Can be passed as string or as array of routes.
     * @type string | string[]
     */
    page: string | string[];
    /**
     * href - link to external resource.
     * @type string
     */
    href: string;
}

/**
 * Link - React component, designed to make links.
 * @param props
 * @function
 * @constructor
 * @example
 * <Link page={["apis", "docs"]}>
 *     I am a link
 * </Link>
 */
export default function Link(props: LinkProps): JSX.Element;
