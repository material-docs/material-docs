/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {TagableProps} from "../Tagable/Tagable";

export const displayName: string;

export interface H6Props
    extends TagableProps {
}

/**
 * H6 - react component, designed to create h4 header.
 * @param {TagableProps} props
 * @constructor
 * @see https://material-docs.com/component-apis/h6
 * @example
 * <H6>I am h6 header without tag</H6>
 */
export default function H6(props: H6Props): JSX.Element;
