/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

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

export default function ApiPage({lang, localeName, importCode, name, searchTags, children, ...props}) {
    if (!lang) throw new Error(`Documentation: lang is required prop`);
    if (!localeName) throw new Error(`Documentation: localeName is required prop`);

    const locale = lang.locale.pages[localeName];
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;
    return (
        <DocsPage
            name={name}
            searchTags={searchTags || locale.searchTags}
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
            {<H2>Props</H2>}
            {locale.enableProps &&
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
                    {locale.props.map(prop => (
                        <TableRow key={prop.name}>
                            <TableCell>{prop.name}</TableCell>
                            <TableCell>{prop.type}</TableCell>
                            <TableCell>{prop.default}</TableCell>
                            <TableCell>{prop.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            }
            {!locale.enableProps && locale.noPropsText || null}
            <H2>CSS</H2>
            {locale.enableCss &&
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{componentAPILocale.ruleName}</TableCell>
                        <TableCell>{componentAPILocale.ruleDescription}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(locale.css).map(key => (
                        <TableRow key={key}>
                            <TableCell>{key}</TableCell>
                            <TableCell>{locale.css[key]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            }
            {!locale.enableCss && locale.noCssText || null}
            {locale.enableCss &&
                <React.Fragment>
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
                </React.Fragment>
            }
            {children}
        </DocsPage>
    );
}