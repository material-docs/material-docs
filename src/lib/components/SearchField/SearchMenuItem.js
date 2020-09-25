/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useChangeRoute} from "routing-manager";
import PropTypes from "prop-types";
import SearchDataItemValidator from "../../validators/SearchDataItemValidator";
import {withStyles} from "@material-ui/styles";

export const displayName = "MaterialDocs-SearchMenuItem";

const SearchMenuItem = React.forwardRef(function SearchMenuItem(props, ref) {
    const {
        data,
        style,
        className,
        active,
        onMouseMove,
        onAfterSelected,
        onBeforeSelected,
        classes,
        ...other
    } = props;
    const {changeRoute} = useChangeRoute();

    function handleItemAction(event) {
        if (typeof onBeforeSelected === "function") onBeforeSelected(event);
        switch (typeof data.redirect) {
            case "string":
                window.location.href = data.redirect;
                break;
            case "function":
                data.redirect();
                break;
            case "object":
                changeRoute(data.redirect);
                break;
            default:
                throw new TypeError(`MaterialDocs: Incorrect type for redirect. Got ${typeof data.redirect}, expected object | string | function`);
        }
        if (typeof onAfterSelected === "function") onAfterSelected(event);
    }

    return (
        <ListItem
            button
            onClick={handleItemAction}
            className={className}
            style={style}
            selected={!!active}
            onMouseMove={onMouseMove}
            ref={ref}
        >
            {/*<ListItemIcon>*/}
            {/*    asfs*/}
            {/*</ListItemIcon>*/}
            <ListItemText
                primary={data.label}
                secondary={data.description || ""}
            />
        </ListItem>
    );
});

SearchMenuItem.displayName = displayName;

SearchMenuItem.propTypes = {
    // SearchMenuItemProps
    data: SearchDataItemValidator,
    active: PropTypes.bool,
    onMouseMove: PropTypes.func,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
}

export default withStyles(styles, {name: displayName})(SearchMenuItem);
