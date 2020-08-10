import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface ListItemProps
    extends Stylable, Containerable {
    /**
     * type - type of list decoration.
     * @type string
     */
    type?: "circle" | "square" | "upper-roman" | "lower-alpha" | "none";
}

/**
 * ListItem - component, used as list element.
 * @param props
 * @constructor
 * @example
 * <List>
 *     <ListItem>
 *         <ListItemContained>
 *             <ListItem> I am contained item number 1 </ListItem>
 *             <ListItem> I am contained item number 2 </ListItem>
 *         </ListItemContained>
 *     <ListItem>
 *     <ListItem>Hello darkness my old friend.</ListItem>
 * </List>
 */
export default function ListItem(props: ListItemProps): JSX.Element;