/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface BlockProps
    extends Stylable, Containerable {
    /**
     * color - color styling of block.
     * @type string
     * @default "light"
     */
    color?: "dark" | "light";
}

/**
 * Block - react component, designed to create blocks of data. Looks like markdown blockquote element.
 * @param {BlockProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/block
 * @example
 * <Block>
 *     I am a blocked text
 * </Block>
 */
export default function Block(props: BlockProps): JSX.Element;