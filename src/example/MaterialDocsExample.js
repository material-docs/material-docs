import React from "react";
import DocsLayout from "../lib/layout/DocsLayout";
import DocsPages from "../lib/components/DocsPages";
import DocsMenu from "../lib/components/DocsMenu";
import DocsMenuItem from "../lib/components/DocsMenuItem/DocsMenuItem";
import SettingsIcon from '@material-ui/icons/Settings';
import DocsPage from "../lib/components/DocsPage";
import {H1, H2, H3, H5} from "../lib/components/Headers/Headers";
import Code from "../lib/components/Code";
import InstallationPage from "./Pages/GettingStarted/InstallationPage";
import OverviewPage from "./Pages/GettingStarted/OverviewPage";

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
                <DocsMenuItem textPrimary={"Example page"} icon={<SettingsIcon />}>
                    <DocsMenuItem page={"Overview"}/>
                    <DocsMenuItem page={"Installation"}/>
                </DocsMenuItem>
                <DocsMenuItem textPrimary={"darkness"} page={"Darkness"}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"} page={"Example 2"}/>
                    <DocsMenuItem textPrimary={"friend"}/>
                </DocsMenuItem>
            </DocsMenu>
            <DocsPages>
                <InstallationPage />
                <OverviewPage />
                <DocsPage name={'Darkness'}>
                    <H1>Hi mark</H1>
                    <H3>Hello storage number one</H3>
                    <Code theme="darcula">
                        {code}
                    </Code>
                    <H5>Lol</H5>
                    <H2>This is a second topic</H2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis deleniti deserunt dolores eligendi illo, illum itaque laboriosam nobis obcaecati quos sed sequi tempore veniam voluptates. Aliquam asperiores cum cumque cupiditate deleniti dolorem ea, eius expedita facere id illum in incidunt laboriosam magni nisi odit, omnis quos ratione repellendus sunt ut veniam voluptate? Accusantium amet animi deleniti distinctio earum eius exercitationem itaque iure libero necessitatibus, praesentium quasi quidem quis quisquam sed unde voluptas voluptatibus. Ab amet asperiores assumenda at cupiditate debitis, dolor dolores dolorum ea, esse eum eveniet harum incidunt magnam maxime officiis optio placeat porro quae rerum saepe totam veritatis vitae voluptatem voluptatum. Accusamus accusantium aut delectus esse expedita fuga, incidunt laborum maiores nemo omnis provident quis, rem repellat repellendus repudiandae, tenetur voluptatum. A asperiores corporis cupiditate deleniti ducimus ea earum eligendi enim esse eum ex facere fugiat incidunt iste itaque minima molestias neque omnis placeat provident quas quasi quia quibusdam quidem ratione saepe sapiente sequi similique tempore ullam, vel veritatis vitae voluptas! Accusamus amet atque blanditiis corporis cumque, deleniti dicta dolor ea est iure laborum, necessitatibus numquam perferendis porro provident reprehenderit sapiente tempora tempore veritatis voluptate. Aspernatur magnam modi nemo nostrum, placeat porro saepe velit? Accusamus dolor doloribus eius hic ipsa molestiae mollitia, quos rerum totam veritatis! A accusantium, alias asperiores atque aut, eligendi facilis illo ipsa ipsum, laboriosam necessitatibus neque nihil non nulla quidem quo repellendus reprehenderit repudiandae sapiente voluptate? Dolore ducimus facilis ipsum nemo non recusandae suscipit tempore, ullam? At beatae explicabo maiores modi, mollitia nihil nulla perferendis repudiandae voluptatem. Adipisci aliquam, beatae consequuntur culpa eaque eius eos maxime odio optio provident quam repellat velit voluptatibus? Aut dolor eius, enim est libero rerum sed? Ad atque distinctio fuga quibusdam repudiandae. Ab ad aspernatur doloribus error officiis quae quas recusandae. Amet autem delectus distinctio dolores, ea facilis illo molestias neque odit optio porro quia quo repellendus rerum similique temporibus ut veritatis. Accusantium aperiam at, eos ex exercitationem fuga iure nam, quae quia, totam ullam voluptate! Accusamus aperiam at beatae cumque fuga magnam molestias quis repudiandae! Culpa ea eius ex harum illum libero quidem reprehenderit, similique tenetur voluptas. Aspernatur delectus eius est eum eveniet illo itaque natus neque non numquam, quos, sequi velit, voluptatem? Autem dignissimos eius et eum fugit itaque placeat quam unde! Animi beatae corporis debitis dolores dolorum ducimus error ex facere fugit incidunt labore libero maiores molestiae nobis non omnis pariatur possimus praesentium quae quos recusandae repudiandae, sapiente sunt tempore ullam vel veniam veritatis? Animi architecto debitis, deleniti, doloribus eligendi est fugit in ipsam laboriosam nihil, obcaecati sit totam unde veritatis voluptas! Exercitationem, neque saepe! Blanditiis harum maxime minima minus nulla placeat, porro quaerat similique sunt unde. Ab accusantium, aperiam deleniti doloribus eos error, facere facilis illum nam nisi nulla ratione recusandae, velit. Corporis fugit itaque libero non? Alias aliquid aperiam aspernatur consectetur dignissimos dolorem ducimus, hic ipsam nobis nulla optio perspiciatis porro possimus quasi quia recusandae reiciendis? Atque cum deleniti ea, hic id impedit iusto magni minus non sequi suscipit ut voluptates. Facere, voluptatum?
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