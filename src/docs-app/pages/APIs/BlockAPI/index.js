/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Block} from "@danilandreev/material-docs";
// or
import Block from "@danilandreev/material-docs/components/Block";
`.trim();

export default function BlockAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.BlockAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"BlockAPI"}
            searchTags={["block", "tip", "slided", "separated", "blockquote", "quote"]}
            name={"BlockAPI"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Pages</Link></ListItem>
            </List>
        </ApiPage>
    );
}