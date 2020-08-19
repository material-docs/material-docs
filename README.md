<div align="center">
    <img alt="Material Docs logo" src="https://github.com/DanilAndreev/material-docs/blob/master/images/MaterialDocsLogoOverview.png"/>
</div>
<div align="center">
</div>

# Material Docs
### React framework for easy creating documentation site in material design style
## Installation.
With __npm__:  
```
npm install @danilandreev/material-docs
```
With __yarn__:  
```
yarn add @danilandreev/material-docs
```
[Read installation guide]()
## Usage
```jsx
import React from "react";
import DocsLayout from "@danilandreev/material-docs/layout/DocsLayout";
import DocsPages from "@danilandreev/material-docs/components/DocsPages";
import PagesGroup from "@danilandreev/material-docs/components/PagesGroup/PagesGroup";


export default function MyApp() {
    return(
        <DocsLayout autoMenu>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo... />
                </PagesGroup>
                <PagesGroup name={"APIs"}>
                    <DocsPageAPI... />
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}
```
[Explore the docs]()
## Author
Danil Andreev | danssg08@gmail.com | https://github.com/DanilAndreev
