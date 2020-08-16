/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsMenu from "../DocsMenu";
import DocsMenuItem from "../DocsMenuItem/DocsMenuItem";

function AutoDocsMenu({layoutData, ...props}, ref) { //TODO: add ref
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
                    <DocsMenuItem textPrimary={group.name}>
                        {/*TODO: fix menu no nesting*/}
                        {recursiveGenerateMenu(group)}
                    </DocsMenuItem>
                ))}
                {layout.pages.map(page => (
                    <DocsMenuItem page={page.name}/>
                ))}
            </React.Fragment>
        );
    }

    if (!layoutData.pages || !layoutData.groups) return null;

    return recursiveGenerateMenu(layoutData);
    // return (
    //     <DocsMenu>
    //         {recursiveGenerateMenu(layoutData)}
    //     </DocsMenu>
    // );
}

export default React.forwardRef(AutoDocsMenu);