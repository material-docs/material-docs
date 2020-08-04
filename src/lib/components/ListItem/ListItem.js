import React from "react";
import {ListItem as MUIListItem} from "@material-ui/core";
import ListItemContained from "../ListItemContained";
import List from "@material-ui/core/List";

function ListItem({children, ...props}, ref) {
    const containers = React.Children.map(children, child => child.type === ListItemContained ? child : null);
    if (containers.length > 1) console.error("MaterialDocs: List item can contain only one ListItemContained element");

    const containedItems = containers[0] && containers[0].props && containers[0].props.children;
    const content = React.Children.map(children, child => child.type === ListItemContained ? null : child);
    return (
        <MUIListItem {...props} ref={ref}>
            <div>
                {containedItems &&
                <div>
                    <List>
                        {containedItems}
                    </List>
                </div>
                }
                <div>
                    {content}
                </div>
            </div>
        </MUIListItem>
    );
}

export default React.forwardRef(ListItem);