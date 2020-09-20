/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {TagableProps} from "../Tagable/Tagable";

export const displayName: string;

export interface H3Props
    extends TagableProps {
}

/**
 * H3 - react component, designed to create h2 header.
 * @param {TagableProps} props
 * @constructor
 * @see https://material-docs.com/component-apis/h3
 * @example
 * <H3>I am h3 header with tag</H3>
 */
export default function H3(props: H3Props): JSX.Element;
