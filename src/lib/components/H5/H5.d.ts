/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {TagableProps} from "../Tagable/Tagable";

export const displayName: string;

export interface H5Props
    extends TagableProps {
}

/**
 * H5 - react component, designed to create h4 header.
 * @param {TagableProps} props
 * @constructor
 * @see https://material-docs.com/component-apis/h5
 * @example
 * <H5>I am h5 header without tag</H5>
 */
export default function H5(props: H5Props): JSX.Element;
