/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

const markdown = `
\`\`\`{"type": "expansion-code", "theme": "darcula", "name": "ExpansionCode in markdown"}
import React from "react";

function test() {
    console.log("I am function in expansion code element.");
    return null;
}
\`\`\`
`.trim();

export default function ExpansionCodeMD() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
