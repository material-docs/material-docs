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
import ExpansionCode from "../lib/components/ExpansionCode/ExpansionCode";
import DemoWithCode from "../lib/components/DemoWithCode";

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
                <DocsMenuItem textPrimary={"Example page"}>
                    <DocsMenuItem page={"Overview"}/>
                    <DocsMenuItem page={"Installation"}/>
                    <DocsMenuItem textPrimary={"Example page"}>
                        <DocsMenuItem page={"Overview"}/>
                        <DocsMenuItem page={"Installation"}/>
                    </DocsMenuItem>
                </DocsMenuItem>
                <DocsMenuItem textPrimary={"darkness"} page={"Darkness"} icon={<SettingsIcon />}/>
                <DocsMenuItem textPrimary={"my"}>
                    <DocsMenuItem textPrimary={"old"} page={"Example 2"}/>
                    <DocsMenuItem textPrimary={"friend"} />
                </DocsMenuItem>
            </DocsMenu>
            <DocsPages>
                <InstallationPage />
                <OverviewPage />
                <DocsPage name={'Darkness'}>
                    <H1>Hi mark</H1>
                    <H3>Code</H3>
                    <Code theme="darcula">
                        {code}
                    </Code>
                    <ExpansionCode theme="darcula" name={"Lool"} demoCode={code2}>
                        {code}
                    </ExpansionCode>
                    <H5>Lol</H5>
                    <DemoWithCode code={code2} theme={"darcula"} name={"Code name"}>
                        <div style={{width: "100%", backgroundColor: "#777"}}>
                            <H1 noTag noDivider>Hello darkness my old friend</H1>
                            <H2 noTag noDivider>Hello darkness my old friend</H2>
                        </div>
                    </DemoWithCode>
                    <H2>This is a second topic</H2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis deleniti deserunt dolores eligendi illo, illum itaque laboriosam nobis obcaecati quos sed sequi tempore veniam voluptates. Aliquam asperiores cum cumque cupiditate deleniti dolorem ea, eius expedita facere id illum in incidunt laboriosam magni nisi odit, omnis quos ratione repellendus sunt ut veniam voluptate? Accusantium amet animi deleniti distinctio earum eius exercitationem itaque iure libero necessitatibus, praesentium quasi quidem quis quisquam sed unde voluptas voluptatibus. Ab amet asperiores assumenda at cupiditate debitis, dolor dolores dolorum ea, esse eum eveniet harum incidunt magnam maxime officiis optio placeat porro quae rerum saepe totam veritatis vitae voluptatem voluptatum. Accusamus accusantium aut delectus esse expedita fuga, incidunt laborum maiores nemo omnis provident quis, rem repellat repellendus repudiandae, tenetur voluptatum. A asperiores corporis cupiditate deleniti ducimus ea earum eligendi enim esse eum ex facere fugiat incidunt iste itaque minima molestias neque omnis placeat provident quas quasi quia quibusdam quidem ratione saepe sapiente sequi similique tempore ullam, vel veritatis vitae voluptas! Accusamus amet atque blanditiis corporis cumque, deleniti dicta dolor ea est iure laborum, necessitatibus numquam perferendis porro provident reprehenderit sapiente tempora tempore veritatis voluptate. Aspernatur magnam modi nemo nostrum, placeat porro saepe velit? Accusamus dolor doloribus eius hic ipsa molestiae mollitia, quos rerum totam veritatis! A accusantium, alias asperiores atque aut, eligendi facilis illo ipsa ipsum, laboriosam necessitatibus neque nihil non nulla quidem quo repellendus reprehenderit repudiandae sapiente voluptate? Dolore ducimus facilis ipsum nemo non recusandae suscipit tempore, ullam? At beatae explicabo maiores modi, mollitia nihil nulla perferendis repudiandae voluptatem. Adipisci aliquam, beatae consequuntur culpa eaque eius eos maxime odio optio provident quam repellat velit voluptatibus? Aut dolor eius, enim est libero rerum sed? Ad atque distinctio fuga quibusdam repudiandae. Ab ad aspernatur doloribus error officiis quae quas recusandae. Amet autem delectus distinctio dolores, ea facilis illo molestias neque odit optio porro quia quo repellendus rerum similique temporibus ut veritatis. Accusantium aperiam at, eos ex exercitationem fuga iure nam, quae quia, totam ullam voluptate! Accusamus aperiam at beatae cumque fuga magnam molestias quis repudiandae! Culpa ea eius ex harum illum libero quidem reprehenderit, similique tenetur voluptas. Aspernatur delectus eius est eum eveniet illo itaque natus neque non numquam, quos, sequi velit, voluptatem? Autem dignissimos eius et eum fugit itaque placeat quam unde! Animi beatae corporis debitis dolores dolorum ducimus error ex facere fugit incidunt labore libero maiores molestiae nobis non omnis pariatur possimus praesentium quae quos recusandae repudiandae, sapiente sunt tempore ullam vel veniam veritatis? Animi architecto debitis, deleniti, doloribus eligendi est fugit in ipsam laboriosam nihil, obcaecati sit totam unde veritatis voluptas! Exercitationem, neque saepe! Blanditiis harum maxime minima minus nulla placeat, porro quaerat similique sunt unde. Ab accusantium, aperiam deleniti doloribus eos error, facere facilis illum nam nisi nulla ratione recusandae, velit. Corporis fugit itaque libero non? Alias aliquid aperiam aspernatur consectetur dignissimos dolorem ducimus, hic ipsam nobis nulla optio perspiciatis porro possimus quasi quia recusandae reiciendis? Atque cum deleniti ea, hic id impedit iusto magni minus non sequi suscipit ut voluptates. Facere, voluptatum?
                    <H3>Hierrro </H3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores blanditiis debitis dicta distinctio, dolores et ex hic impedit incidunt ipsam laboriosam laudantium non, porro quisquam quo quod reiciendis repellat voluptate voluptatum. At corporis distinctio eaque excepturi necessitatibus quidem, ratione reiciendis repellat soluta vero! Accusamus aspernatur eius eveniet fugiat fugit illo, ipsa ipsam ipsum nam nemo neque nostrum porro praesentium quae qui quia quod sed, unde voluptate voluptatem? Ad, aliquid assumenda dignissimos dolore doloremque dolores ducimus eaque earum, iusto laboriosam minus nisi non perspiciatis provident quas, ratione tenetur veritatis voluptatum? Adipisci alias eligendi in laboriosam laborum maiores ut, veniam. Assumenda consequatur dolor eos, eveniet fugit harum libero saepe veniam? Aliquid amet consectetur dignissimos, eaque in itaque laboriosam laudantium omnis, repellendus sapiente, tenetur veritatis! Consectetur distinctio doloribus eius iste non omnis perferendis ratione veniam veritatis. Ab aliquam aspernatur blanditiis delectus dicta error excepturi, iure magni necessitatibus nemo quas quia quod rem repellat tenetur, voluptate, voluptatum? A ad adipisci assumenda atque blanditiis cum dolorem dolores ducimus eos in itaque mollitia natus, nemo nisi nobis numquam omnis, quam quod repudiandae sunt temporibus vitae voluptatem. A aliquid animi, cum deserunt, dolor ducimus eum hic modi odio perferendis quae quasi repellat repudiandae sunt vitae? Ad animi aperiam blanditiis culpa delectus deserunt eligendi eos excepturi exercitationem, harum id impedit incidunt inventore magnam minima molestias mollitia nemo, nisi odit quaerat qui quidem recusandae reiciendis sequi tempore veniam voluptate. Delectus harum id minus nihil nisi nulla numquam quia? Accusantium atque consequuntur laudantium libero maxime repellat sapiente. Accusantium ad architecto, distinctio eius eos excepturi molestiae non saepe soluta sunt vel vero! Ad consequuntur corporis culpa debitis enim fugiat, in inventore ipsam laboriosam minus molestiae nulla placeat quasi quia quis reiciendis rerum voluptas. Accusantium adipisci, aliquid, asperiores cupiditate dicta ipsam itaque necessitatibus quaerat repellat sapiente sed, tempore voluptate voluptatibus. Alias aliquid aspernatur cum debitis distinctio, odio tempore ullam unde. Aspernatur, illum, magnam. A ad architecto assumenda, consectetur consequatur consequuntur deleniti, eius facilis, hic illum laborum natus non obcaecati placeat voluptas! Eligendi ipsam ipsum iusto nihil rem. Corporis culpa expedita laborum, nisi quidem sapiente unde veniam. A aperiam architecto autem dolorem eos ex exercitationem fuga fugit harum hic, impedit maxime nostrum porro provident vel. A accusamus assumenda cum dicta distinctio eos esse et eveniet excepturi facere fuga fugit incidunt ipsa ipsam modi nobis nulla omnis optio pariatur perspiciatis quasi quia ratione, reprehenderit sapiente sit voluptatem voluptatum. Accusamus aperiam beatae consequuntur debitis, dignissimos doloremque dolorum eaque earum excepturi facere facilis fuga harum id in ipsa ipsum iure laboriosam magnam maxime mollitia natus non officia porro praesentium quas quasi ratione rem repellendus sapiente sequi tempora tempore unde veniam veritatis voluptas voluptatem voluptatum. Adipisci consequuntur corporis cupiditate error fugiat iusto laborum, laudantium nemo numquam ratione? Accusantium adipisci aperiam beatae ea error eum id impedit libero obcaecati odit praesentium quaerat quibusdam recusandae repellat veniam, vitae, voluptatibus? A alias amet asperiores beatae commodi dolorem doloremque doloribus earum eius est excepturi facere fuga hic, impedit inventore iste magnam odio officia perspiciatis quasi rerum saepe sint sit ullam ut vel veniam voluptatibus? Corporis, dignissimos ex facilis fuga hic illo necessitatibus nobis nulla officia veritatis. Amet culpa dignissimos doloribus exercitationem expedita illum maxime soluta vel. At ea fugiat mollitia neque nobis pariatur qui quod, voluptatibus. Aperiam autem corporis dolore eius esse exercitationem inventore ipsam magni molestiae necessitatibus omnis, placeat quia quibusdam sapiente sit sunt tempore totam ullam ut veniam! Assumenda atque culpa, eligendi enim explicabo fugiat in odio quos repudiandae tempora. Consequatur harum labore molestias porro repellat sed. Consequatur dolor harum placeat saepe voluptate voluptatibus. Assumenda culpa earum id possimus quas, sed tenetur. Cumque dolor doloremque excepturi iure temporibus.
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