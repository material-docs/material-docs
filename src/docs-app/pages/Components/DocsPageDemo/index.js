/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {DocsPage, H1, H2, H3, Markdown} from "@danilandreev/material-docs";

const pageMarkdown = `
# Hello, i ___italic text___ am header 1
## And me is header 2
# heading no 1
##### heading no 5
> tip field  
> sdfsf  
> sdafaf  

I am a simple text 

* list lol1 \`\`\`import lol from lol\`\`\` hello darkness
* list lol2
  * list nested1
  * list nested2
  
\`\`\`javascript
//I am the code
export default function Lol(1) {
    return null;
}

\`\`\`

\`\`\` I am inline code \`\`\`

[I am link __sdfsf__](https://sdfsf.com.ua)  
[I am an another link](https://sdfsf.com.ua)

__bold text__  
___bold italic___  
_italic_

![I am picture](https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale)

---

| Name          | Type     | Default | Description                             |
|---------------|----------|---------|-----------------------------------------|
| button        | boolean  |         | if __true__, row will be clickable.     |
| onClick       | function |         | callback, called on click event.        |
| onDoubleClick | function |         | callback, called on double click event. |
| children      | node     |         | The content of element                  |

`;

const pageMarkdown2 = `
# FlexibleTable API
### The API documentation of the FlexibleTable React component. Learn more about the props and the CSS customization points.

## Import
\`\`\`jsx
import {FlexibleTable} from "@danilandreev/mui-table-flexible";
//or 
import FlexibleTable from "@danilandreev/mui-table-flexible/dist/organizms/FlexibleTable";
\`\`\`
You can learn more about the difference by [reading this guide](https://material-ui.com/guides/minimizing-bundle-size/).
## Props
| Name          | Type     | Default | Description                             |
|---------------|----------|---------|-----------------------------------------|
| button        | boolean  |         | if true, row will be clickable.         |
| onClick       | function |         | callback, called on click event.        |
| onDoubleClick | function |         | callback, called on double click event. |
| children      | node     |         | The content of element                  |


The __ref__ is forwarded to the root element.

Any other props supplied will be provided to the root element (native element).

## CSS
| Rule name      | Description                                  |
|----------------|----------------------------------------------|
| root           | Styles applied to the root element.          |
| tableContainer | Styles applied to the inner table container. |
| head           | Styles applied to the table head element.    |
| body           | Styles applied to the table body element.    |

You can override the style of the component thanks to one of these customization points:
* With a rule name of the [__classes__ object prop](https://material-ui.com/customization/components/#overriding-styles-with-classes).
* With a [global class name](https://material-ui.com/customization/components/#overriding-styles-with-global-class-names).

If that's not sufficient, you can check the [implementation of the component](https://github.com/DanilAndreev/mui-table-flexible/blob/master/src/lib/organizms/FlexibleTable/FlexibleTable.tsx) for more detail.
## Demos
* [FlexibleTable](/DanilAndreev/mui-table-flexible/wiki/FlexibleTable)
`;

export default function DocsPageDemo() {
    return(
        <DocsPage name={"DocsPages"} searchDescription={"Docs pages sdfsfs"}>
            <H1 noDivider>DocsPages</H1>
            <H3>DocsPages description</H3>
            <Markdown>{pageMarkdown2}</Markdown>

        </DocsPage>
    );
}