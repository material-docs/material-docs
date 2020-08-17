/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "../../../lib/components/DocsPage/DocsPage";
import {H1, H2, H3} from "../../../lib/components/Headers";

export default function DocsPageDemo() {
    return(
        <DocsPage name={"DocsPages"} searchDescription={"Docs pages sdfsfs"}>
            <H1 noDivider>DocsPages</H1>
            <H3>DocsPages description</H3>


        </DocsPage>
    );
}