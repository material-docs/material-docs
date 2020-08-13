import React from "react";
import DocsPage from "../../../lib/components/DocsPage/DocsPage";
import {H1, H2, H3} from "../../../lib/components/Headers/Headers";
import List from "../../../lib/components/List";
import ListItem from "../../../lib/components/ListItem/ListItem";
import ListItemContained from "../../../lib/components/ListItemContained";
import Image from "../../../lib/components/Image/Image";

import image1 from "./images/image1.jpg"

export default function InstallationPage() {
    return (
        <DocsPage name={'Overview'} searchDescription={"This is an overview page of Material Docs"}>
            <H1>Material Docs</H1>
            <H3>Simple react framework for creating documentation</H3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio eaque esse fugiat itaque laborum, ratione voluptas! Aut consequuntur dolorem doloremque dolores enim non odio odit placeat praesentium repudiandae? A autem beatae commodi consequuntur dignissimos dolore dolores ducimus eius enim et excepturi explicabo fugit impedit in ipsa iste maxime modi nam nihil nisi obcaecati officiis omnis pariatur perspiciatis possimus praesentium quibusdam quis quisquam quos rem saepe similique sunt totam velit veritatis voluptate, voluptates. Aliquid aspernatur, dolores esse illum maxime modi perferendis quae. Aliquid aspernatur corporis distinctio expedita laborum molestiae nisi omnis rem, sit velit vitae voluptatibus voluptatum. Nesciunt, odio voluptas.
            <H3>Nice picture, yeah!</H3>
            <Image src={image1}>
                Caption of image
            </Image>
            <H2>This is a second topic</H2>
            <H3>Hierrro </H3>
            <List>
                <ListItem>
                    <ListItemContained>
                        <ListItem type={"square"}> afasfs </ListItem>
                        <ListItem type={"none"}> afasfs </ListItem>
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
    );
}