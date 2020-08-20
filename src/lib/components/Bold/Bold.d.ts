/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface BoldProps
    extends Stylable, Containerable {

}

/**
 * Bold - react component, designed to make text bold.
 * @param {BoldProps} props
 * @constructor
 * @example
 * <Bold> I am bold </Bold>
 */
export default function Bold(props: BoldProps): JSX.Element;
