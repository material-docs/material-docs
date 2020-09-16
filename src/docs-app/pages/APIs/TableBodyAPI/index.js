/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {TableBody} from "@danilandreev/material-docs";
// or
import TableBody from "@danilandreev/material-docs/components/TableBody";
`.trim();

export default function TableBodyAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableBodyAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"TableBodyAPI"}
            searchTags={["table", "cell", "row", "header", "api", "body"]}
            name={"TableBody"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}