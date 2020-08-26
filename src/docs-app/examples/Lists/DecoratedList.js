/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import List from "@danilandreev/material-docs/components/List";
import ListItem from "@danilandreev/material-docs/components/ListItem";

export default function DecoratedList() {
    return (
        <React.Fragment>
            <List>
                <ListItem type={"circle"}>I am list item with circle styling</ListItem>
                <ListItem type={"square"}>I am list item with square styling</ListItem>
                <ListItem type={"upper-roman"}>I am list item with upper-roman styling</ListItem>
                <ListItem type={"lower-alpha"}>I am list item with lower-alpha styling</ListItem>
                <ListItem type={"none"}>I am list item without styling</ListItem>
            </List>
        </React.Fragment>
    );
}