/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {AutoDocsMenu, DocsLayout, DocsPages} from "../lib/components";
import DocsMenu from "../lib/components/DocsMenu";
import Landing from "../lib/components/Landing";
import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import DocsPage from "../lib/components/DocsPage";
import H1 from "../lib/components/H1";

export default function BuiltInDocumentation() {
    return (
        <Container maxWidth={"lg"} style={{backgroundColor: "#eee", padding: 0, marginBottom: 1500}}>
                <DocsLayout builtIn>
                    <DocsMenu dense>
                        <AutoDocsMenu/>
                    </DocsMenu>
                    <DocsPages>
                        <DocsPage name={"hello"} searchDescription={"darkness"} disableCopyright>
                            <H1>asdfasf1</H1>
                            <H1>asdfasf2</H1>
                            <H1>asdfasf3</H1>
                            <H1>asdfasf4</H1>
                            <H1>asdfasf5</H1>
                            <H1>asdfasf6</H1>
                            <H1>asdfasf8</H1>
                            <H1>asdfasf7</H1>
                            <H1>asdfasf9</H1>
                            <H1>asdfasf10</H1>
                            <H1>asdfasf11</H1>
                            <H1>asdfasf12</H1>
                            <H1>asdfasf13</H1>
                            <H1>asdfasf14</H1>
                            <H1>asdfasf15</H1>
                            <H1>asdfasf16</H1>
                            <H1>asdfasf17</H1>
                            <H1>asdfasf18</H1>
                            <H1>asdfasf19</H1>
                            <H1>asdfasf20</H1>
                            <H1>asdfasf21</H1>
                            asdfasfasfas

                        </DocsPage>
                    </DocsPages>
                    <Landing>

                    </Landing>
                </DocsLayout>
        </Container>
    );
}
