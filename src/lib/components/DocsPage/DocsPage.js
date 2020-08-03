import React from "react";
import {Route} from "react-router-dom"
import createRouteFromName from "../../utils/createRouteFromName";
import Grid from "@material-ui/core/Grid";
import NavigationList from "./NavigationList";
import Box from "@material-ui/core/Box";

export default function DocsPage({name, children}) {
    const pagePath = createRouteFromName(name);
    const [tags, setTags] = React.useState();

    function insertTagCallbacksInChildren(source) {
        return React.Children.map(source, child => {
            return typeof child.type === "string" ? child : React.cloneElement(child, {systemOnTag: setTags});
        });
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

    return (
        <Route path={`/${pagePath}`}>
            <Grid container>
                <Grid item xs={12} md={10}>
                    <Box p={1}>
                        {insertTagCallbacksInChildren(children)}
                    </Box>
                </Grid>
                <Grid item xs={12} md={2}>
                    <NavigationList keys={makeKeysFromTags()}/>
                </Grid>
            </Grid>
        </Route>
    );
}