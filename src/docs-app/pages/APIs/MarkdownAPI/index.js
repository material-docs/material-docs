/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {Link} from "@material-ui/core";

import {H2, List, ListItem, useLang} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Markdown} from "@danilandreev/material-docs";
// or
import Markdown from "@danilandreev/material-docs/components/Markdown";
`.trim();

export default function MarkdownAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.MarkdownAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"MarkdownAPI"}
            searchTags={["mark", "down", "parser", "interpret", "layout", "api"]}
            name={"Markdown"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link>Markdown</Link></ListItem>
            </List>
        </ApiPage>
    );
}