/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// Components
import DocsMenuItem from "../DocsMenuItem";

// PropTypes validators
import PagesGroupDataValidator from "../../validators/PagesGroupDataValidator";

// Utils
import {useChangeRoute} from "routing-manager";
import {createRouteFromName} from "../../utils";
import * as _ from "lodash";


export const displayName = "MatDocAutoDocsMenu";

const AutoDocsMenu = React.forwardRef(function AutoDocsMenu(props, ref) {
    const {
        layoutData,
    } = props;

    const {getRouteParams} = useChangeRoute();
    const {page} = getRouteParams();
    const pagePath = typeof page === "string" && page.split("/") || [];

    if (layoutData && typeof layoutData !== "object")
        throw new ReferenceError(`MaterialDocs: incorrect type of prop layoutData, expected object, got ${typeof layoutData}`);

    function recursiveGenerateMenu(layout, path) {
        if (!Array.isArray(layout.pages))
            throw new TypeError(`MaterialDocs: incorrect type of layoutData pages, expected any[], got ${typeof layout.pages}`);
        if (!Array.isArray(layout.groups))
            throw new TypeError(`MaterialDocs: incorrect type of layoutData groups, expected any[], got ${typeof layout.groups}`);

        const [curPath, ...tail] = path;

        return (
            <React.Fragment>
                {layout.groups.map(group => (
                    <DocsMenuItem
                        textPrimary={group.name}
                        key={`auto-docs-menu-item-${group.name}`}
                        defaultExpanded={createRouteFromName(group.name) === curPath}
                    >
                        {recursiveGenerateMenu(group, tail)}
                    </DocsMenuItem>
                ))}
                {layout.pages.map(page => (
                    <DocsMenuItem
                        page={page.name}
                        link={page.link}
                        key={`auto-docs-menu-item-${page.name}`}
                        isCurrent={(routeParams, pageRoute, page) => pageRoute === _.last(path)}
                    />
                ))}
            </React.Fragment>
        );
    }

    if (!layoutData || !layoutData.pages || !layoutData.groups) return null;

    return recursiveGenerateMenu(layoutData, pagePath);
});

AutoDocsMenu.displayName = displayName;

AutoDocsMenu.propTypes = {
    layoutData: PagesGroupDataValidator,
}

export default AutoDocsMenu;