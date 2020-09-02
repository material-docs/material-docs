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
} from "../../../../lib";

const importCode = `
import {DocsPage} from "@danilandreev/material-docs";
// or
import DocsPage from "@danilandreev/material-docs/components/DocsPage";
`.trim();

export default function DemoWithCodeAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.DocsPageAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;
    return (
        <DocsPage
            name={"DemoWithCode API"}
            searchTags={["demo", "with", "code", "api"]}
            searchDescription={locale.pageSearchDescription}
        >
            <H1 noDivider>DemoWithCodeAPI_LOLOLOLOLO</H1>
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
            <H2>ComponentName</H2>
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
                <ListItem><Link>DocsPages</Link></ListItem>
            </List>
        </DocsPage>
    );
}