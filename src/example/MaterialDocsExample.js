import React from "react";
import DocsLayout from "../lib/layout/DocsLayout";
import DocsPages from "../lib/components/DocsPages";
import DocsMenu from "../lib/components/DocsMenu";
import DocsMenuItem from "../lib/components/DocsMenuItem/DocsMenuItem";
import SettingsIcon from '@material-ui/icons/Settings';
import DocsPage from "../lib/components/DocsPage";
import {H1, H2, H3, H5} from "../lib/components/Headers/Headers";
import Code from "../lib/components/Code";
import ExpansionCode from "../lib/components/ExpansionCode/ExpansionCode";
import Markdown from "../lib/components/Markdown/Markdown";

import page1 from "./markdown/page1.md";
import List from "@material-ui/core/List";
import ListItem from "../lib/components/ListItem/ListItem";
import ListItemContained from "../lib/components/ListItemContained";

const code = `
export default function MaterialDocsExample() {
    return (
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary={"hello"} icon={<SettingsIcon />}/>
                <DocsMenuItem textPrimary={"darkness"}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"}/>
                    <DocsMenuItem textPrimary={"friend"}/>
                </DocsMenuItem>
            </DocsMenu>
            <DocsPages>
                <DocsPage name={'Example page'}>
                    <H1>This is a test page for this wiki</H1>
                    <H3>Hello darkness my old friend</H3>
                    <Code>
                        
                    </Code>
                    <div style={{height: 2000}}> sfasdf </div>
                </DocsPage>
            </DocsPages>
        </DocsLayout>
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary={"hello"} icon={<SettingsIcon />}/>
                <DocsMenuItem textPrimary={"darkness"}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"}/>
                    <DocsMenuItem textPrimary={"friend"}/>
                </DocsMenuItem>
            </DocsMenu>
            <DocsPages>
                <DocsPage name={'Example page'}>
                    <H1>This is a test page for this wiki</H1>
                    <H3>Hello darkness my old friend</H3>
                    <Code>
                        
                    </Code>
                    <div style={{height: 2000}}> sfasdf </div>
                </DocsPage>
            </DocsPages>
        </DocsLayout>
    );
}
`.trim();

const code2 = `
export default function MaterialDocsExample() {
    return (
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary={"hello"} icon={<SettingsIcon />}/>
                <DocsMenuItem textPrimary={"darkness"}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"}/>
                    <DocsMenuItem textPrimary={"friend"}/>
                </DocsMenuItem>
            </DocsMenu>
        </DocsLayout>
    );
}
`.trim();

const md1 = `
# Hello darkness
## yeah s 
### asdfgsaf
* adsf1
* asdfs
  * asdfd
`.trim();


export default function MaterialDocsExample() {
    return (
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary={"Example page"} icon={<SettingsIcon />} page={"Example page"}/>
                <DocsMenuItem textPrimary={"darkness"} page={"Darkness"}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"} page={"Example 2"}/>
                    <DocsMenuItem textPrimary={"friend"}/>
                </DocsMenuItem>
            </DocsMenu>
            <DocsPages>
                <DocsPage name={'Example page'}>
                    <H1>This is a test page for this wiki</H1>
                    <H3>Hello darkness my old friend</H3>
                    <Code theme="darcula">
                        {code}
                    </Code>
                    <ExpansionCode theme={'darcula'} demoCode={code2}>
                        {code}
                    </ExpansionCode>
                    <H5>Lol</H5>
                    <H2>This is a second topic</H2>
                    <H3>Hierrro </H3>
                    <Markdown> {md1} </Markdown>
                    <Markdown file={page1} />
                    <List>
                        <ListItem>
                            <ListItemContained>
                                <ListItem> afasfs </ListItem>
                                <ListItem> afasfs </ListItem>
                                <ListItem>
                                    <ListItemContained>
                                        <ListItem> afasfs </ListItem>
                                        <ListItem> afasfs </ListItem>
                                    </ListItemContained>
                                    afasfs
                                </ListItem>
                            </ListItemContained>
                            asdfas
                        </ListItem>
                        <ListItem> afasfs </ListItem>
                        <ListItem> afasfs </ListItem>

                    </List>
                </DocsPage>
                <DocsPage name={'Darkness'}>
                    <H1>Hi mark</H1>
                    <H3>Hello storage number one</H3>
                    <Code theme="darcula">
                        {code}
                    </Code>
                    <H5>Lol</H5>
                    <H2>This is a second topic</H2>
                    <H3>Hierrro </H3>
                </DocsPage>
                <DocsPage name={'Example 2'}>
                    <div>
                        example 2
                    </div>
                </DocsPage>
            </DocsPages>
        </DocsLayout>
    );
}