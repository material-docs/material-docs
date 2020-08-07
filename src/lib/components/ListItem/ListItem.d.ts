import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface ListItemProps extends Stylable, Containerable {
    /**
     * type - type of list decoration.
     * @type string
     */
    type?: "circle" | "square" | "upper-roman" | "lower-alpha" | "none";
}

export default function ListItem(props: ListItemProps, ref): JSX.Element;