import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function NavigationList({keys}) {
    if (keys && !Array.isArray(keys)) throw new TypeError("MaterialDocs: keys must be array type!")

    return (
        <List dense style={{position: "fixed"}}>
            <ListItem>
                <Typography variant={"h6"}>
                    Content
                </Typography>
            </ListItem>
            {keys.map(key => (
                <ListItem key={key.id}>
                    <Link href={`#${key.id}`}>{key.label}</Link>
                </ListItem>
            ))}
        </List>
    );
}