/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {TableRow} from "@danilandreev/material-docs";
// or
import TableRow from "@danilandreev/material-docs/components/TableRow";
`.trim();

export default function TableRowAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TableRowAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"TableRowAPI"}
            searchTags={["table", "cell", "row", "header", "api"]}
            name={"TableRow"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Tables</Link></ListItem>
            </List>
        </ApiPage>
    );
}