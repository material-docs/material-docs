<a href="http://material-docs.com">
    <div align="center">
        <img alt="Material Docs logo" src="https://github.com/DanilAndreev/material-docs/blob/master/images/MaterialDocsLogoOverview.png"/>
    </div>
</a>

# Material Docs
### A React framework for easy creating documentation site in material design style
![GitHub package.json version](https://img.shields.io/github/package-json/v/material-docs/material-docs)
![GitHub forks](https://img.shields.io/github/forks/material-docs/material-docs?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/material-docs/material-docs?style=social)
![GitHub pull requests](https://img.shields.io/github/issues-pr/material-docs/material-docs)
![GitHub top language](https://img.shields.io/github/languages/top/material-docs/material-docs)
![npm](https://img.shields.io/npm/dw/@material-docs/core)
![GitHub issues](https://img.shields.io/github/issues-raw/material-docs/material-docs)
## Overview
Material Docs is a React framework for material design style documentation. It allows easy page manipulation,
has a built-in localization and search engine. __Fully compatible with _Markdown_ markup language__.
> Compatible with GitHub Pages and other hosts!

## Installation.
With __npm__:  
```
npm install @material-docs/core
```
With __yarn__:  
```
yarn add @material-docs/core
```
[Read installation guide](http://material-docs.com/getting-started/installation)
## Usage
```jsx
import React from "react";
import DocsLayout from "@material-docs/core/layout/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import DocsPage from "@material-docs/core/components/PagesGroup/DocsPage";
import PagesGroup from "@material-docs/core/components/PagesGroup/PagesGroup";


export default function MyApp() {
    return(
        <DocsLayout>
            <DocsMenu>
                <AutoDocsMenu/>
            </DocsMenu>
            <DocsPages>
                <PagesGroup name="Getting started">
                    {/*...*/}
                </PagesGroup>
                <PagesGroup name="Components">
                    <DocsPage
                        name="My page"
                        searchDescription="This is a page inside my documentation"
                    >
                        {/*...*/}
                    </DocsPage>
                </PagesGroup>
                <PagesGroup name="APIs">
                    {/*...*/}
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}
```
## Learn
### Tutorials
You can learn __Material Docs__ on practice with tutorials:
* [Basics of Material Docs](http://material-docs.com/tutorials/creating-material-docs)
* [Hosting on GitHub Pages](http://material-docs.com/tutorials/hosting-on-github-pages)
* [Localization workflow](http://material-docs.com/tutorials/localization-workflow)
### Documentation
If you want to get specifications and other info - visit [Material Docs Documentation](http://material-docs.com)
## Support
You can ask for support by email: help.materialdocs@gmail.com
## Author
Danil Andreev | danssg08@gmail.com | https://github.com/DanilAndreev
