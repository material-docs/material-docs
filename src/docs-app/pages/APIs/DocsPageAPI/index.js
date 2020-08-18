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
import useLang from "../../../../lib/hooks/useLang/useLang";

export default function DocsPageAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPageAPI;
    const localeCommon = lang.locale.common;
    console.log(lang);
    return (
        <DocsPage
            name={"DocsPage API"}
            searchDescription={"DocsPage - react component, designed to provide user with page functional"}
        >
            <H1 noDivider>Alert API</H1>
            <H3 noDivider noTag>
                {locale.pageAbout}
            </H3>
            <H2>{localeCommon.Import}</H2>
            <Code language={"javascript"} theme={"darcula"}>
                {`import {DocsPage} from "@danilandreev/material-docs"`}
            </Code>
            <H2>{locale.ComponentNameHeader}</H2>
            {locale.ComponentNameText}
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
                        <TableCell>{locale.props.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>searchTags</TableCell>
                        <TableCell>string[]</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.searchTags}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>searchLabel</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.searchLabel}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>searchDescription</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.searchDescription}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>noGenerateAutoSearch</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>{locale.props.noGenerateAutoSearch}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>noAutoMenu</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>{locale.props.noAutoMenu}</TableCell>
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
                        <TableCell>{locale.css.root}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>contentItem</TableCell>
                        <TableCell>{locale.css.contentItem}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>contentItemActive</TableCell>
                        <TableCell>{locale.css.contentItemActive}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>contentLink</TableCell>
                        <TableCell>{locale.css.contentLink}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>copyright</TableCell>
                        <TableCell>{locale.css.copyright}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {locale.customizationText}
            <List>
                <ListItem>
                    {locale.customizationRule}&nbsp;
                    <Link href={"https://material-ui.com/customization/components/#overriding-styles-with-classes"}>
                        classes object prop
                    </Link>
                    .
                </ListItem>
                <ListItem>
                    {locale.customizationClass}&nbsp;
                    <Link
                        href={"https://material-ui.com/customization/components/#overriding-styles-with-global-class-names"}>
                        global class name
                    </Link>
                    .
                </ListItem>
                <ListItem>
                    {locale.customizationTheme}&nbsp;
                    <Link href={"https://material-ui.com/customization/globals/#css"}>
                        overrides property
                    </Link>
                    .
                </ListItem>
            </List>
            {locale.customizationFooterText}
            <H2>Demos</H2>
            <List>
                <ListItem><Link>DocsPages</Link></ListItem>
            </List>
        </DocsPage>
    );
}