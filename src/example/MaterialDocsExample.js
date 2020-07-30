import React from "react";
import DocsLayout from "../lib/layout/DocsLayout";
import DocsPages from "../lib/components/DocsPages";
import DocsMenu from "../lib/components/DocsMenu";
import DocsMenuItem from "../lib/components/DocsMenuItem/DocsMenuItem";

export default function MaterialDocsExample() {
    return (
        <DocsLayout>
            <DocsMenu>
                <DocsMenuItem textPrimary={"hello"}/>
                <DocsMenuItem textPrimary={"darkness"}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"}/>
                    <DocsMenuItem textPrimary={"friend"}/>
                </DocsMenuItem>
            </DocsMenu>
            <DocsPages>
            </DocsPages>
        </DocsLayout>
    );
}