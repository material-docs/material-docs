import React from "react";
import DocsPage from "../../../lib/components/DocsPage/DocsPage";
import {H1, H2, H3, H5} from "../../../lib/components/Headers/Headers";
import Code from "../../../lib/components/Code/Code";
import ExpansionCode from "../../../lib/components/ExpansionCode/ExpansionCode";
import Markdown from "../../../lib/components/Markdown/Markdown";
import page1 from "../../markdown/page1.md";
import List from "@material-ui/core/List";
import ListItem from "../../../lib/components/ListItem/ListItem";
import ListItemContained from "../../../lib/components/ListItemContained";

export default function InstallationPage() {
    return (
        <DocsPage name={'Installation'}>
            <H1>This is a test page for this wiki</H1>
            <H3>Hello darkness my old friend</H3>
            <H5>Lol</H5>
            <H2>This is a second topic</H2>
            <H3>Hierrro </H3>
            <List>
                <ListItem>
                    <ListItemContained>
                        <ListItem> afasfs </ListItem>
                        <ListItem> afasfs </ListItem>
                        <ListItem>
                            <ListItemContained>
                                <ListItem> afasfs </ListItem>
                                <ListItem> afasfs </ListItem>
                            </ListItemContained>
                            afasfs
                        </ListItem>
                    </ListItemContained>
                    asdfas
                </ListItem>
                <ListItem> afasfs </ListItem>
                <ListItem> afasfs </ListItem>

            </List>
        </DocsPage>
    );
}