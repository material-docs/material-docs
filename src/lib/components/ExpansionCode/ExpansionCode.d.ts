/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import {CodeProps} from "../Code/Code";
import DemoCodeAction from "../../interfaces/DemoCodeAction";

export interface ExpansionCodeProps
    extends CodeProps {
    /**
     * name - string or JSX structure to be displayed in name field.
     * @type string
     */
    name?: string;
    /**
     * noTag - if true, code will not be tagable (no anchor generated).
     * @type boolean
     * @default false
     */
    noTag?: boolean;
    /**
     * collapsedHeight - height of the component when it is collapsed.
     * @default 100
     * @type number | string
     */
    collapsedHeight?: number | string;
    /**
     * actions - if defined, on code actions panel will be displayed [ShowMoreIcon] with list of defined actions.
     * @type DemoCodeAction[]
     */
    actions?: DemoCodeAction[];
}

/**
 * ExpansionCode - component, designed to provide smart code displaying.
 * @param {ExpansionCodeProps} props
 * @constructor
 * @example
 * <ExpansionCode theme="darcula" name={"My code name"} demoCode={...your demo  code...}>
 *     ...your full code...
 * </ExpansionCode>
 */
export default function ExpansionCode(props: ExpansionCodeProps): JSX.Element;