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


export default function MaterialDocsExample() {
    return (
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary={"Example page"} icon={<SettingsIcon />} page={"example-page"}/>
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
                    <Code theme="darcula">
                        {code}
                    </Code>
                    <ExpansionCode theme={'darcula'} demoCode={code2}>
                        {code}
                    </ExpansionCode>
                    <H5>Lol</H5>
                    <H2>This is a second topic</H2>
                    <H3>Hierrro </H3>
                    <div style={{height: 2000}}> sfasdf </div>
                    <Markdown text={`#asdfasf \n ##asdfasdf`}/>
                </DocsPage>
            </DocsPages>
        </DocsLayout>
    );
}