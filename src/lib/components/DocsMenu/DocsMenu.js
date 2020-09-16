/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import getContainerByType from "../../utils/getContainerByType";
import PagesGroupDataValidator from "../../validators/PagesGroupDataValidator";
import {displayName as AutoDocsMenuDisplayName} from "./../AutoDocsMenu";

export const displayName = "MatDocDocsMenu";

const DocsMenu = React.forwardRef(function DocsMenu(props, ref) {
    const {
        dense = false,
        children,
        layoutData,
        ...other
    } = props;
    const [content, setContent] = React.useState({basic: [], auto: null});

    React.useEffect(() => {
        setContent(getMenusFromChildren());
    }, [children, layoutData]);

    function getMenusFromChildren() {
        const basicMenu = React.Children.map(children, item => {
            if (React.isValidElement(item) && item.type.displayName !== AutoDocsMenuDisplayName) return item;
        }).filter(item => item) || [];
        let autoMenu = getContainerByType(children, AutoDocsMenuDisplayName);
        if (autoMenu) autoMenu = React.cloneElement(autoMenu, {layoutData});
        return {basic: basicMenu, auto: autoMenu};
    }

    if (!layoutData)
        return (
            <List dense={dense} {...other}>
                {children}
            </List>
        );

    return (
        <List dense={dense} {...other}>
            {content.auto}
            {content.basic}
        </List>
    );
});

DocsMenu.displayName = displayName;

DocsMenu.propTypes = {
    // Containerable
    dense: PropTypes.bool,
    children: PropTypes.node,
    layoutData: PagesGroupDataValidator,
}

export default DocsMenu;