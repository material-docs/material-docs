import {CodeProps} from "../Code/Code";

export interface ExpansionCodeProps
    extends CodeProps {
    /**
     * name - string or JSX structure to be displayed in name field.
     * @type any
     */
    name?: any;
    /**
     * noTag - if true, code will not be tagable (no anchor generated).
     * @type boolean
     */
    noTag?: boolean;
    /**
     * demoCode - code, displayed in collapsed mode.
     * @type string
     */
    demoCode?: string;
}

/**
 * ExpansionCode - component, designed to provide smart code displaying.
 * @param props
 * @constructor
 * @example
 * <ExpansionCode theme="darcula" name={"My code name"} demoCode={...your demo  code...}>
 *     ...your full code...
 * </ExpansionCode>
 */
export default function ExpansionCode(props: ExpansionCodeProps): JSX.Element;