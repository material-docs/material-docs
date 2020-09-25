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


export const displayName = "MaterialDocs-AutoDocsMenu";

const AutoDocsMenu = React.forwardRef(function AutoDocsMenu(props, ref) {
    const {
        layoutData,
    } = props;
    const {getRouteParams} = useChangeRoute();
    const {page} = getRouteParams();
    const [pagePath, setPagePath] = React.useState(typeof page === "string" && page.split("/") || []);
    const [menu, setMenu] = React.useState(null);

    React.useEffect(() => {
        if (layoutData && layoutData.pages && layoutData.groups)
            setMenu(recursiveGenerateMenu(layoutData, pagePath));
    }, [layoutData, pagePath]);

    React.useEffect(() => {
        const path = typeof page === "string" && page.split("/") || [];
        setPagePath(path);
    }, [page]);

    if (layoutData && typeof layoutData !== "object")
        throw new ReferenceError(`MaterialDocs: incorrect type of prop layoutData, expected object, got ${typeof layoutData}`);

    /**
     * sortMenuLevel - returns sorted by order/name the pages/groups data list.
     * @function
     * @param {any[]} items pages/groups data objects list.
     * @return {any[]}
     */
    function sortMenuLevel(items) {
        /**
         * compare - function, designed to compare page/group order/name.
         * @function
         * @param {any} left Left object in comparison.
         * @param {any} right Right object in comparison.
         * @param {string} field Field in input object.
         */
        function compare(left, right, field) {
            if (left[field] > right[field]) return 1;
            if (left[field] === right[field]) return 0;
            return -1;
        }
        const ordered = items.filter(item => item.order).sort((left, right) => compare(left, right, "order"));
        const notOrdered = items.filter(item => !item.order).sort((left, right) => compare(left, right, "name"));
        const result = [...ordered, ...notOrdered];
        return result;
    }

    /**
     * recursiveGenerateMenu - recursively creates menu from PagesGroupData data.
     * @function
     * @param {PagesGroupData} layout Layout data of menu.
     * @param {string[]} path Current page path.
     * @return {any}
     */
    function recursiveGenerateMenu(layout, path) {
        if (!Array.isArray(layout.pages))
            throw new TypeError(`MaterialDocs: incorrect type of layoutData pages, expected any[], got ${typeof layout.pages}`);
        if (!Array.isArray(layout.groups))
            throw new TypeError(`MaterialDocs: incorrect type of layoutData groups, expected any[], got ${typeof layout.groups}`);

        const [curPath, ...tail] = path;

        return (
            <React.Fragment>
                {sortMenuLevel(layout.groups).map(group => (
                    <DocsMenuItem
                        textPrimary={group.name}
                        key={`auto-docs-menu-item-${group.name}`}
                        defaultExpanded={createRouteFromName(group.name) === curPath || layout.defaultExpanded}
                    >
                        {recursiveGenerateMenu(group, tail)}
                    </DocsMenuItem>
                ))}
                {sortMenuLevel(layout.pages).map(page => (
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

    return menu;
});

AutoDocsMenu.displayName = displayName;

AutoDocsMenu.propTypes = {
    layoutData: PagesGroupDataValidator,
}

export default AutoDocsMenu;