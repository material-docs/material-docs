/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPageDemo from "./Pages/Components/DocsPageDemo/index";
import DocsPageAPI from "./Pages/APIs/DocsPageAPI";
import DemoWithCodeAPI from "./Pages/APIs/DemoWithCode";

import {DocsLayout, DocsPage, DocsPages, PagesGroup} from "../lib";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import {H1, H2, H3, H4, H5, H6} from "../lib/components";
import Landing from "../lib/components/Landing/Landing";
import AutoDocsMenu from "../lib/components/AutoDocsMenu/AutoDocsMenu";
import DocsMenu from "../lib/components/DocsMenu/DocsMenu";
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import logo from "./../logo.svg";
import Block from "../lib/components/Block/Block";
import List from "../lib/components/List/List";
import ListItem from "../lib/components/ListItem/ListItem";
import ListItemContained from "../lib/components/ListItemContained/ListItemContained";
import Link from "../lib/components/Link/Link";
import Markdown from "../lib/components/Markdown/Markdown";
import LocalLocaleTestPage from "./Pages/Test/LocalLocaleTestPage";
import Button from "@material-ui/core/Button";


export default function ExampleDocumentation() {
    const [text, setText] = React.useState("");
    return (
        <DocsLayout
            autoMenu
            defaultLang={EN}
            langs={[EN, RU]}
            basename={process.env.PUBLIC_URL}
            actions={[
                {icon: <GitHubIcon/>, tooltip: "asdfasdfsf", onClick: () => alert("kuku")},
                {icon: <Brightness4Icon/>, tooltip: "Hello darkness my old friend.", link: "http://google.com"}
            ]}
            name={"Material Docs testing"}
            version={"1.12.2-alpha"}
            logo={logo}
        >
            <DocsMenu dense>
                <AutoDocsMenu/>
            </DocsMenu>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo/>
                </PagesGroup>
                <PagesGroup name={"APIs"}>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <DocsPage name={"TestPage1"} searchDescription={"sdfsfsd"}>
                        <H1>Hello Darkness my old friend</H1>
                        <H2>Darkness</H2>
                        <H3>Darkness</H3>
                        <H4>Darkness</H4>
                        <H5>Darkness</H5>
                        <H6>Darkness</H6>
                    </DocsPage>
                    <DocsPage name={"TestPage2"} searchDescription={"sdfsfsd"}>
                        <H1>HelloDarknessmyoldfriend</H1>
                        <H2>{text}</H2>
                        {text}
                        <Button onClick={() => setText(prev => prev ? "" : "Hello darkness")}>Set value</Button>
                        <Markdown data={{name: "Danil Andreev", age: "14, name: __&&name__."}}>My name is __&&name__, I am &&age years old!</Markdown>
                    </DocsPage>
                    <DocsPage name={"TestPage3"} searchDescription={"sdfsfsd"}>
                        asfasf2324
                        <Block>asdfasfas</Block>
                        <List>
                            <ListItem>
                                asfsdf
                                <ListItemContained>
                                    <ListItem>adsfsa</ListItem>
                                </ListItemContained>
                            </ListItem>
                            <Link page={["Components", "DocsPages"]}>Hello</Link>
                            <Markdown>{`[{"text": "Hello darkness my old friend", "page": "components/docs-pages"}](https://google.com)`}</Markdown>
                        </List>
                    </DocsPage>
                    <LocalLocaleTestPage/>
                </PagesGroup>
            </DocsPages>
            <Landing>

            </Landing>
        </DocsLayout>
    );
}