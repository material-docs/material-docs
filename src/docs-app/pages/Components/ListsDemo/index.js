/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "@danilandreev/material-docs/components/DocsPage/DocsPage";
import {H1, H2, H3, H4, H5, H6} from "@danilandreev/material-docs/components/Headers";
import DemoWithCode from "@danilandreev/material-docs/components/DemoWithCode/DemoWithCode";
import SimpleList from "../../../examples/Lists/SimpleList";
import Box from "@material-ui/core/Box";
import ListWithNestedItems from "../../../examples/Lists/ListWithNestedItems";
import DecoratedList from "../../../examples/Lists/DecoratedList";
import List from "@danilandreev/material-docs/components/List/List";
import ListItem from "@danilandreev/material-docs/components/ListItem/ListItem";
import Link from "@material-ui/core/Link";
import Markdown from "@danilandreev/material-docs/components/Markdown/Markdown";

const SimpleListCode = `
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
`.trim();

const ListWithNestedItemsCode = `
import React from "react";
import List from "@danilandreev/material-docs/components/List";
import ListItem from "@danilandreev/material-docs/components/ListItem";
import ListItemContained from "@danilandreev/material-docs/components/ListItemContained/ListItemContained";

export default function ListWithNestedItems() {
    return (
        <React.Fragment>
            <List>
                <ListItem>
                    Web
                    <ListItemContained>
                        <ListItem>Front-end</ListItem>
                        <ListItem>Back-end</ListItem>
                    </ListItemContained>
                </ListItem>
                <ListItem>
                    <ListItemContained>
                        <ListItem>Engine programmer</ListItem>
                        <ListItem>Level designer</ListItem>
                        <ListItem>Character artist</ListItem>
                    </ListItemContained>
                    Gamedev
                </ListItem>
                <ListItem>Data science</ListItem>
            </List>
        </React.Fragment>
    );
}
`.trim();

const DecoratedListCode = `
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
`.trim();

export default function ListsDemo() {
    return (
        <DocsPage
            name={"Lists"}
            searchDescription={"Demonstration page of lists functional."}
            searchLabel={"Lists"}
            searchTags={["lists", "demo", "tutorial"]}
        >
            <H1>Lists</H1>
            <H3 noTag noDivider>Lists can be used to show structured information with list items.</H3>
            <Markdown>
                For example, you want to show people your TO DO list or list of programs you use. Each ```ListItem``` can contain
                its content and nested list items inside ```ListItemContained``` component.
            </Markdown>
            <DemoWithCode code={SimpleListCode} paperContainer theme={"darcula"} name={"Simple list"} defaultExpanded>
                <Box p={2}>
                    <SimpleList/>
                </Box>
            </DemoWithCode>

            <Markdown>
                You can create __nested lists__ inside ```ListItem``` component. Just place __nested items__ inside ```ListItemContained``` component in ```ListItem```.
            </Markdown>
            <DemoWithCode code={ListWithNestedItemsCode} paperContainer theme={"darcula"} name={"List with nested items"}>
                <Box p={2}>
                    <ListWithNestedItems/>
                </Box>
            </DemoWithCode>

            <Markdown>Lists can be __decorated__ with several points type.</Markdown>
            <DemoWithCode code={DecoratedListCode} paperContainer theme={"darcula"} name={"List with items decoration"}>
                <Box p={2}>
                    <DecoratedList/>
                </Box>
            </DemoWithCode>

            <H2>API</H2>
            <List>
                <ListItem><Link>ListItem</Link></ListItem>
                <ListItem><Link>List</Link></ListItem>
                <ListItem><Link>ListItemContained</Link></ListItem>
            </List>

        </DocsPage>
    );
}