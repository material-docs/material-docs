/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

import {H2, List, ListItem, useLang, Link} from "@danilandreev/material-docs";
import ApiPage from "../../../components/ApiPage";

const importCode = `
import {Tagable} from "@danilandreev/material-docs";
// or
import Tagable from "@danilandreev/material-docs/components/Tagable";
`.trim();

export default function TagableAPI() {
    const {lang} = useLang();
    const locale = lang.locale.pages.TagableAPI;
    const localeSpells = lang.locale.common.spells;
    const componentAPILocale = lang.locale.common.ComponentAPI;

    return (
        <ApiPage
            lang={lang}
            localeName={"TagableAPI"}
            searchTags={["header", "tag", "anchor", "api", "tagable"]}
            name={"Tagable"}
            importCode={importCode}
        >
            <H2>Demos</H2>
            <List>
                <ListItem><Link page={["Components", "Headers"]}>Headers</Link></ListItem>
            </List>
        </ApiPage>
    );
}