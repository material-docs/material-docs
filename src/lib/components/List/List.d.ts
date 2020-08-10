import Containerable from "../../interfaces/Containerable";
import Stylable from "../../interfaces/Stylable";

export interface ListProps
    extends Containerable, Stylable {

}

/**
 * List - list container for <ListItem /> components.
 * @param props
 * @constructor
 * @example
 * <List>
 *     ...
 * </List>
 */
export default function List(props: ListProps): JSX.Element;