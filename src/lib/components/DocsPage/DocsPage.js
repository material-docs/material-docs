import React from "react";
import {Route} from "react-router-dom"
import createRouteFromName from "../../utils/createRouteFromName";
import Grid from "@material-ui/core/Grid";
import NavigationList from "./NavigationList";
import Box from "@material-ui/core/Box";

export default function DocsPage({name = "home", children}) {
    const pagePath = createRouteFromName(name);
    const [tags, setTags] = React.useState();
    const [content, setContent] = React.useState(null);

    function insertTagCallbacksInChildren(source) {
        return React.Children.map(source, child => {
            return typeof child.type !== "string" ?
                React.cloneElement(child, {systemOnTag: setTags}) : child;
        }); // TODO: provide better filter logic
    }

    function makeKeysFromTags() {
        const keys = [];
        for (const key in tags) {
            const label = tags[key];
            const id = key;
            keys.push({id, label});
        }
        return keys;
    }

    React.useEffect(() => {
        let newContent = children;
        if (typeof children === "Symbol(react.element)" || Array.isArray(children)) {
            newContent = insertTagCallbacksInChildren(children);
        }
        setContent(newContent);
    }, [children]);


    return (
        <Route path={`/${pagePath}`}>
            <Grid container>
                <Grid item xs={12} md={10}>
                    <Box p={1}>
                        {content}
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <NavigationList keys={makeKeysFromTags()}/>
                </Grid>
            </Grid>
        </Route>
    );
}