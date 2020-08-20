/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import {
    DocsPage,
    Code,
    Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    List,
    ListItem,
    useLang,
    H1,
    H2,
    H3
} from "@danilandreev/material-docs";

const importCode = `
import {DemoWithCode} from "@danilandreev/material-docs";
// or
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode";
`.trim();

export default function ListItemAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.ListItemAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;
    return (
        <DocsPage
            name={"ListItem API"}
            searchTags={["demo", "with", "code", "api"]}
            searchDescription={locale.pageSearchDescription}
        >
            <H1 noDivider>ListItem API</H1>
            <H3 noDivider noTag>{locale.pageAbout}</H3>
            <H2>{localeSpells.Import}</H2>
            <Code language={"javascript"} theme={"darcula"}>
                {importCode}
            </Code>
            <Typography>
                {componentAPILocale.importDifferenceText.text1}&nbsp;
                <Link href={"https://material-ui.com/guides/minimizing-bundle-size/"}>
                    {componentAPILocale.importDifferenceText.link1}
                </Link>
                {componentAPILocale.importDifferenceText.text2}
            </Typography>
            <H2>{componentAPILocale.ComponentNameHeader}</H2>
            {locale.ComponentNameText}
            <H2>Props</H2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{componentAPILocale.propName}</TableCell>
                        <TableCell>{componentAPILocale.propType}</TableCell>
                        <TableCell>{componentAPILocale.propDefault}</TableCell>
                        <TableCell>{componentAPILocale.propDescription}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>type</TableCell>
                        <TableCell>"circle" | "square" | "upper-roman" | "lower-alpha" | "none"</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.type}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>dense</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>{locale.props.dense}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <H2>CSS</H2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{componentAPILocale.ruleName}</TableCell>
                        <TableCell>{componentAPILocale.ruleDescription}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>root</TableCell>
                        <TableCell>{locale.css.root}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>typeCircle</TableCell>
                        <TableCell>{locale.css.typeCircle}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>typeSquare</TableCell>
                        <TableCell>{locale.css.typeSquare}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>typeRoman</TableCell>
                        <TableCell>{locale.css.typeRoman}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>typeAlpha</TableCell>
                        <TableCell>{locale.css.typeAlpha}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>typeNone</TableCell>
                        <TableCell>{locale.css.typeNone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>list</TableCell>
                        <TableCell>{locale.css.list}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>dense</TableCell>
                        <TableCell>{locale.css.dense}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {componentAPILocale.customizationText}
            <List>
                <ListItem>
                    {componentAPILocale.customizationRule}&nbsp;
                    <Link href={"https://material-ui.com/customization/components/#overriding-styles-with-classes"}>
                        classes object prop
                    </Link>
                    .
                </ListItem>
                <ListItem>
                    {componentAPILocale.customizationClass}&nbsp;
                    <Link
                        href={"https://material-ui.com/customization/components/#overriding-styles-with-global-class-names"}>
                        global class name
                    </Link>
                    .
                </ListItem>
                <ListItem>
                    {componentAPILocale.customizationTheme}&nbsp;
                    <Link href={"https://material-ui.com/customization/globals/#css"}>
                        overrides property
                    </Link>
                    .
                </ListItem>
            </List>
            {componentAPILocale.customizationFooterText}
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Lists</Link></ListItem>
            </List>
        </DocsPage>
    );
}