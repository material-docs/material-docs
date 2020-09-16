/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Markdown from "@danilandreev/material-docs/components/Markdown";

const markdown = `
# This is an overview markdown example
### It generated from markdown text and rendered using Material Docs elements
> You can change styling by providing theme overrides!

| Hello darkness my old friend     | Здравствуй, ночь, моя старая подруга! |
|----------------------------------|---------------------------------------|
| I've come to talk with you again | Я пришел снова побеседовать с тобой   |
`.trim();

export default function MarkdownOverview() {
    return (
        <Markdown>
            {markdown}
        </Markdown>
    );
}
