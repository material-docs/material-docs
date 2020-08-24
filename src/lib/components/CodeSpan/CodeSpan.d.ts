/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface CodeSpanProps
    extends Stylable, Containerable {
    /**
     * color - background color of the inline code block.
     * @type string
     * @default "default"
     */
    color?: "default" | "primary" | "secondary" | "grey";
    /**
     * text - text color of code.
     * @type string
     * @default "inherit"
     */
    text?: "white" | "black" | "inherit";
}

/**
 * CodeSpan - react component, designed to create inline code spans.
 * @param {CodeSpanProps} props
 * @constructor
 * @example
 * I am <CodeSpan>code span</CodeSpan> in the text.
 */
export default function CodeSpan(props: CodeSpanProps): JSX.Element;