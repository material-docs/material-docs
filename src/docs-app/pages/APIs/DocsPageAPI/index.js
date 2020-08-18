/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "../../../../lib/components/DocsPage/DocsPage";
import {H1, H2, H3} from "../../../../lib/components/Headers";
import Code from "../../../../lib/components/Code/Code";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import List from "../../../../lib/components/List/List";
import ListItem from "../../../../lib/components/ListItem/ListItem";
import {Link} from "@material-ui/core";

export default function DocsPageAPI() {
    return(
        <DocsPage
            name={"DocsPage API"}
            searchDescription={"DocsPage - react component, designed to provide user with page functional"}
        >
            <H1 noDivider>Alert API</H1>
            <H3 noDivider noTag>
                The API documentation of the DocsPage React component.
                Learn more about the props and the CSS customization points.
            </H3>
            <H2>Import</H2>
            <Code language={"javascript"} theme={"darcula"}>
                {`import {DocsPage} from "@danilandreev/material-docs"`}
            </Code>
            <H2>Component name</H2>
            The DocsPage name can be used for providing default props or style overriders at the theme level.
            <H2>Props</H2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Default</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Page name. Route will be generated automatically from name.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>searchTags</TableCell>
                        <TableCell>string[]</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Keywords for search engine.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>searchLabel</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Label text, displayed in search result if page match search requirements.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>searchDescription</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Description text, displayed in search result if page match search requirements.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>noGenerateAutoSearch</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>If true, page will not generate search items from pages automatically.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>noAutoMenu</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>If true, page will not participate in auto menu generation.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <H2>CSS</H2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Rule name</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>root</TableCell>
                        <TableCell>Styles applied to the root element.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>contentItem</TableCell>
                        <TableCell>Styles applied to the item element of content panel.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>contentItemActive</TableCell>
                        <TableCell>Styles applied to the item element of content panel if it is active.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>contentLink</TableCell>
                        <TableCell>Styles applied to the link of item element of content panel.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>copyright</TableCell>
                        <TableCell>Styles applied copyright panel if it shown.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            You can override the style of the component thanks to one of these customization points:
            <List>
                <ListItem>With a rule name of the classes object prop.</ListItem>
                <ListItem>With a global class name.</ListItem>
                <ListItem>With a theme and an overrides property.</ListItem>
            </List>
            If that's not sufficient, you can check the implementation of the component for more detail.
            <H2>Demos</H2>
            <List>
                <ListItem><Link>DocsPages</Link></ListItem>
            </List>
        </DocsPage>
    );
}