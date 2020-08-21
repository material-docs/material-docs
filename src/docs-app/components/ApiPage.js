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
    Code,
    DocsPage,
    H1,
    H2,
    H3,
    List,
    ListItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@danilandreev/material-docs";
import {makeStyles} from "@material-ui/core/styles";
import {grey, purple} from "@material-ui/core/colors";
import clsx from "clsx";
import Markdown from "../../lib/components/Markdown/Markdown";
import {CodeSpan} from "../../lib/components";


const useStyles = makeStyles(theme => ({
    datatype: {
        color: purple[800],
    },
    code: {
        fontFamily: "monospace",
        fontSize: "14px",
    },
    underlined: {
        textDecoration: `underline dotted ${grey[500]}`,
    }
}));

export default function ApiPage({lang, localeName, importCode, name, searchTags, children, ...props}) {
    const classes = useStyles();
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
            <Markdown>{componentAPILocale.importDifferenceText}</Markdown>
            <H2>{componentAPILocale.ComponentNameHeader}</H2>
            <Markdown>{locale.ComponentNameText}</Markdown>
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
                            <TableCell className={classes.code}>{prop.name}</TableCell>
                            <TableCell className={clsx(classes.datatype, classes.code)}>{prop.type}</TableCell>
                            <TableCell className={clsx(classes.code, classes.underlined)}>{prop.default}</TableCell>
                            <TableCell>{prop.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            }
            {!locale.enableProps && <Markdown>{locale.noPropsText}</Markdown>}
            {locale.forwardRef && <Markdown>{componentAPILocale.ref}</Markdown>}
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
                            <TableCell className={classes.code}>{key}</TableCell>
                            <TableCell>{locale.css[key]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            }
            {!locale.enableCss && <Markdown>{locale.noCssText}</Markdown>}
            {locale.enableCss &&
            <Markdown>{componentAPILocale.customization}</Markdown>
            }
            {children}
        </DocsPage>
    );
}