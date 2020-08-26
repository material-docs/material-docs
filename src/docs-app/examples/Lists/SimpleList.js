/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import List from "@danilandreev/material-docs/components/List";
import ListItem from "@danilandreev/material-docs/components/ListItem";
import {H4} from "@danilandreev/material-docs/components/Headers";

export default function SimpleList() {
    return (
        <React.Fragment>
            <H4 noTag>Buy</H4>
            <List>
                <ListItem>Carrot x3</ListItem>
                <ListItem>Potato 3kg</ListItem>
                <ListItem>Apples 1kg</ListItem>
                <ListItem>Strawberry 1kg</ListItem>
            </List>
        </React.Fragment>
    );
}