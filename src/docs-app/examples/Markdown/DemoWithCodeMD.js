/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

function HelloWorld() {
    return (
        <div>
            <h1>Hello darkness my old friend</h1>
        </div>
    );
}

const markdown = `
\`\`\`{"type": "demo-with-code", "theme": "darcula", "name": "DemoWithCode in markdown", "demo": "exampleFunction"}
import React from "react";

function HelloWorld() {
    return (
        <div>
            <h1>Hello darkness my old friend</h1>
        </div>
    );
}
\`\`\`
`.trim();

export default function DemoWithCodeMD() {
    return (
        <Markdown data={{exampleFunction: <HelloWorld/>}}>
            {markdown}
        </Markdown>
    );
}
