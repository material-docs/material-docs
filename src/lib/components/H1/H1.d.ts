/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {TagableProps} from "../Tagable/Tagable";

export const displayName: string;

export interface H1Props
    extends TagableProps {
}

/**
 * H1 - react component, designed to create h1 header.
 * @param {TagableProps} props
 * @constructor
 * @see https://material-docs.com/component-apis/h1
 * @example
 * <H1>I am h1 header with tag</H1>
 */
export default function H1(props: H1Props): JSX.Element;
