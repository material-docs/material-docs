/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {TagableProps} from "../Tagable/Tagable";

export const displayName: string;

export interface HeaderProps
    extends TagableProps {
    /**
     * haeding - heading size.
     * @type number
     * @default 1
     */
    heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Header - react component, designed to create any header component.
 * @param {HeaderProps} props
 * @constructor
 * @see https://material-docs.com/component-apis/header
 * @example
 * <Header heading={2}>I am h1 header without tag</Header>
 */
export default function Header(props: HeaderProps): JSX.Element;
