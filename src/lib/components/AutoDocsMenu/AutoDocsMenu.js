/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsMenuItem from "../DocsMenuItem";
import PropTypes from 'prop-types';
import PagesGroupDataValidator from "../../validators/PagesGroupDataValidator";

const AutoDocsMenu = React.forwardRef(function AutoDocsMenu({layoutData, ...props}, ref) {
    //TODO: add ref

    if (layoutData && typeof layoutData !== "object")
        throw new ReferenceError(`MaterialDocs: incorrect type of prop layoutData, expected object, got ${typeof layoutData}`);

    function recursiveGenerateMenu(layout) {
        if (!Array.isArray(layout.pages))
            throw new TypeError(`MaterialDocs: incorrect type of layoutData pages, expected any[], got ${typeof layout.pages}`);
        if (!Array.isArray(layout.groups))
            throw new TypeError(`MaterialDocs: incorrect type of layoutData groups, expected any[], got ${typeof layout.groups}`);

        return (
            <React.Fragment>
                {layout.groups.map(group => (
                    <DocsMenuItem textPrimary={group.name} key={`auto-docs-menu-item-${group.name}`}>
                        {/*TODO: fix menu no nesting*/}
                        {recursiveGenerateMenu(group)}
                    </DocsMenuItem>
                ))}
                {layout.pages.map(page => (
                    <DocsMenuItem page={page.name} link={page.link} key={`auto-docs-menu-item-${page.name}`}/>
                ))}
            </React.Fragment>
        );
    }

    if (!layoutData || !layoutData.pages || !layoutData.groups) return null;

    return recursiveGenerateMenu(layoutData);
});

AutoDocsMenu.displayName = "AutoDocsMenu";

AutoDocsMenu.propTypes = {
    layoutData: PagesGroupDataValidator,
}

export default AutoDocsMenu;