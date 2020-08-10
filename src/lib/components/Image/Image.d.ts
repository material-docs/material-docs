/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface ImageProps
    extends Stylable, Containerable {
    /**
     * src - src param for inner <img /> component. Path to image or image url.
     * @type: string
     */
    src?: string;
    /**
     * alt - alt param for inner <img /> component. Alternative text to be displayed if the image fails to load.
     * @type: string
     */
    alt?: string;
    /**
     * fullWidth - if true, image will be 100% wide.
     */
    fullwidth?: boolean;
    /**
     * children - elements, which will appear in image caption.
     * @type any
     */
    children?: any;
}

/**
 * Image - an image component with lazy load mechanism.
 * @param props
 * @constructor
 * @example
 * <Image src={image1} alt="This text will be displayed if the image is not loaded." fullWidth>
 *     Caption of image
 * </Image>
 */
export default function Image(props: ImageProps): JSX.Element;