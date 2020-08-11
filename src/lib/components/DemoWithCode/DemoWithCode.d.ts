/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import DemoCodeAction from "../../interfaces/DemoCodeAction";
import {CodeProps} from "../Code/Code";

export interface DemoWithCodeProps
    extends CodeProps {
    /**
     * defaultExpanded - if true, code section will be expanded on startup.
     * @type boolean
     */
    defaultExpanded?: boolean;
    /**
     * code - the code to display in code highlighter section.
     * @type string
     */
    code?: string;
    /**
     * name - name, displayed in name section as header.
     * @type string
     */
    name?: string;
    /**
     * noTag - if true and name is defined, header will not produce tags and anchors.
     * @type boolean
     */
    noTag?: boolean;
    /**
     * paperContainer - if true, demo section will be displayed inside paper element.
     * @type boolean
     */
    paperContainer?: boolean;
    /**
     * actions - if defined, on code actions panel will be displayed [ShowMoreIcon] with list of defined actions.
     * @type DemoCodeAction[]
     */
    actions?: DemoCodeAction[];
}

/**
 * DemoWithCode - component, designed to show demo element with source code.
 * @param props
 * @constructor
 * @example
 * <DemoWithCode
 *     code={myCode} paperContainer
 *     actions={[
 *         {label: "Github link", link: "https://github.com"},
 *         {label: "Google link", link: "https://google.com"},
 *     ]}
 *     name="My demo code"
 * >
 *     <MyDemoComponents />
 * </DemoWithCode>
 */
export default function DemoWithCode(props: DemoWithCodeProps): JSX.Element;