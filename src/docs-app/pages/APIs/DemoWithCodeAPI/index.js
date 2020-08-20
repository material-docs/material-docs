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

export default function DemoWithCodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DemoWithCodeAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;
    return (
        <DocsPage
            name={"DemoWithCode API"}
            searchTags={["demo", "with", "code", "api"]}
            searchDescription={locale.pageSearchDescription}
        >
            <H1 noDivider>DemoWithCode API</H1>
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
                        <TableCell>name</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>code</TableCell>
                        <TableCell>string</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.code}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>defaultExpanded</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>{locale.props.defaultExpanded}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>noTag</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>{locale.props.noTag}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>paperContainer</TableCell>
                        <TableCell>boolean</TableCell>
                        <TableCell>false</TableCell>
                        <TableCell>{locale.props.paperContainer}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>actions</TableCell>
                        <TableCell>DemoCodeAction[]</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.actions}</TableCell>
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
                        <TableCell>collapse</TableCell>
                        <TableCell>{locale.css.collapse}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>toolbar</TableCell>
                        <TableCell>{locale.css.toolbar}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>paperContainer</TableCell>
                        <TableCell>{locale.css.paperContainer}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>menuButtonLink</TableCell>
                        <TableCell>{locale.css.menuButtonLink}</TableCell>
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
                <ListItem><Link>Code showers</Link></ListItem>
            </List>
        </DocsPage>
    );
}