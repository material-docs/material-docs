/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface ItalicProps
    extends Stylable, Containerable {

}

/**
 * Italic - react component, designed to make text italic.
 * @param {ItalicProps} props
 * @constructor
 * @see http://material-docs.com/component-apis/italic
 * @example
 * <Italic> I am italic </Italic>
 */
export default function Italic(props: ItalicProps): JSX.Element;
