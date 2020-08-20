/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsMenuItem from "../DocsMenuItem";

function AutoDocsMenu({layoutData, ...props}, ref) {
    //TODO: add ref
    if (!layoutData || typeof layoutData !== "object")
        throw new ReferenceError(`MaterialDocs: param layoutData is required, expected object, got ${typeof layoutData}`);

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
                    <DocsMenuItem page={page.name} key={`auto-docs-menu-item-${page.link}`}/>
                ))}
            </React.Fragment>
        );
    }

    if (!layoutData.pages || !layoutData.groups) return null;

    return recursiveGenerateMenu(layoutData);
}

export default React.forwardRef(AutoDocsMenu);