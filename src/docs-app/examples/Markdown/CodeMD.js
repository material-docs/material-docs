/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

const markdown = `
\`\`\`{"type": "code", "theme": "darcula"}
import React from "react";

function test() {
    console.log("I am function in code element.");
    return null;
}
\`\`\`
`.trim();

export default function CodeMD() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
