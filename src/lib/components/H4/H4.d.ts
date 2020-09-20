/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {TagableProps} from "../Tagable/Tagable";

export const displayName: string;

export interface H4Props
    extends TagableProps {
}

/**
 * H4 - react component, designed to create h4 header.
 * @param {TagableProps} props
 * @constructor
 * @see https://material-docs.com/component-apis/h4
 * @example
 * <H4>I am h4 header without tag</H4>
 */
export default function H4(props: H4Props): JSX.Element;
