/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface CodeSpanProps
    extends Stylable, Containerable {

}

/**
 * CodeSpan - react component, designed to create inline code spans.
 * @param {CodeSpanProps} props
 * @constructor
 * @example
 * I am <CodeSpan>code span</CodeSpan> in the text.
 */
export default function CodeSpan(props: CodeSpanProps): JSX.Element;