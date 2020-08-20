/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface MarkdownProps
    extends Stylable, Containerable {
    /**
     * children - children of an element. Should contain markdown text.
     * @type string | any
     */
    children?: string | string[];
}

/**
 * Markdown - react component, designed to provide markdown based layout generation.
 * @param {MarkdownProps} props
 * @constructor
 * @example
 * <Markdown>
 *     # I am header 1
 *     ## And I am header 2
 * </Markdown>
 */
export default function Markdown(props: MarkdownProps): JSX.Element;