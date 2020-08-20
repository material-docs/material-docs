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
import {PagesGroup} from "@danilandreev/material-docs";
// or
import PagesGroup from "@danilandreev/material-docs/components/PagesGroup";
`.trim();

export default function PagesGroupAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.PagesGroupAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;
    return (
        <DocsPage
            name={"PagesGroup API"}
            searchTags={["page", "group", "gather", "container"]}
            searchDescription={locale.pageSearchDescription}
        >
            <H1 noDivider>PagesGroup API</H1>
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
                        <TableCell>getData</TableCell>
                        <TableCell>(data: PagesGroupData): void</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{locale.props.getData}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <H2>CSS</H2>
            {locale.noCssText}
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Code showers</Link></ListItem>
            </List>
        </DocsPage>
    );
}