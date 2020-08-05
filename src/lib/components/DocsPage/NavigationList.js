import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./styles";
import {useLocation} from "react-router-dom";
import clsx from "clsx";
import {Link} from "@material-ui/core";

export default function NavigationList({keys}) {
    const classes = useStyles();
    const location = useLocation();

    if (keys && !Array.isArray(keys)) throw new TypeError("MaterialDocs: keys must be array type!");
    if (!location) throw new Error("MaterialDocs: Navigation list must be inside Router! [dev]");

    if (!keys || !keys.length) {
        return null;
    }

    return (
        <List dense style={{position: "fixed"}}>
            <ListItem>
                <Typography variant={"h6"}>
                    Content
                </Typography>
            </ListItem>
            {keys.map(key => {
                const active = location.hash.substr(1) === key.id;
                return (
                    <Link underline={"none"} href={`#${key.id}`} key={key.id} className={classes.contentLink}>
                        <ListItem
                            button
                            className={clsx(classes.contentItem, active && classes.contentItemActive)}
                        >
                            <ListItemText
                                primary={key.label}
                                primaryTypographyProps={{
                                    variant: "subtitle2",
                                    color: active ? "textPrimary" : "textSecondary",
                                }}
                            />
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    );
}