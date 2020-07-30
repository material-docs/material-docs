import React from "react";
import {Route} from "react-router-dom"
import createRouteFromName from "../../utils/createRouteFromName";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import NavigationList from "./NavigationList";

export default function DocsPage({name, children}) {
    const pagePath = createRouteFromName(name);
    console.log(pagePath);
    return (
        <Route path={`/${pagePath}`}>
            <Grid container>
                <Grid item xs={12} md={10}>
                    {children}
                </Grid>
                <Grid item xs={12} md={2}>
                    <NavigationList keys={
                        [
                            {id: 'hello', label: 'Hello darkness'},
                            {id: 'hello1', label: 'Hello darkness 1'},
                            {id: 'hello2', label: 'Hello darkness 2'},
                            {id: 'hello3', label: 'Hello darkness 3'},
                        ]
                    }/>
                </Grid>
            </Grid>
        </Route>
    );
}