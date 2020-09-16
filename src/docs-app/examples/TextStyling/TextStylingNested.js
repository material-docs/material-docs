/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Bold from "@danilandreev/material-docs/components/Bold";
import Italic from "@danilandreev/material-docs/components/Italic";
import Block from "@danilandreev/material-docs/components/Block";
import CodeSpan from "@danilandreev/material-docs/components/CodeSpan";

export default function TextStylingNested() {
    return (
        <React.Fragment>
            I <Bold> am an <Italic>italic text inside</Italic> bold component.</Bold><br/><br/>
            <Block>I am a <CodeSpan>Block</CodeSpan> with <Italic><Bold>an italic bold
                text</Bold> inside!</Italic></Block>
        </React.Fragment>
    );
}