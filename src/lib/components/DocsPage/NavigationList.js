import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./styles";
import {useLocation} from "react-router-dom";
import clsx from "clsx";
import {Link} from "@material-ui/core";
import usePageScroll from "../../utils/usePageScroll";

function getOffsetSum(elem) {
    let top = 0;
    let left = 0;
    while (elem) {
        top = top + parseFloat(elem.offsetTop);
        left = left + parseFloat(elem.offsetLeft);
        elem = elem.offsetParent || elem.parentElement;
    }

    return {top: Math.round(top), left: Math.round(left)}
}


export default function NavigationList({keys}) {
    const classes = useStyles();
    const {scrollY} = usePageScroll();
    const [selected, setSelected] = React.useState(keys[0] && keys[0].id || null);

    if (keys && !Array.isArray(keys)) throw new TypeError("MaterialDocs: keys must be array type!");

    React.useEffect(() => {
        function getClosestId(elements, func) {
            const closestDistance = func(elements.map(element => element.offset));
            const closest = elements.find(item => item.offset === closestDistance) || null;
            const closestId = closest && closest.id;
            return closestId;
        }

        let elements = keys.map(item => {
            const {ref, id} = item;
            let offset = 0;
            try {
                const {top} = getOffsetSum(ref.current);
                offset = scrollY - (top - 64); // 64 - is a height of header;
            } catch (error) {
            }
            return {id, offset};
        });
        if (scrollY >= (document.body.clientHeight - window.innerHeight)) {
            const closestId = getClosestId(elements, elems => Math.min.apply(Math, elems));
            setSelected(closestId);
            return;
        }
        if (elements.every(element => element.offset < 0)) {
            const closestId = getClosestId(elements, elems => Math.max.apply(Math, elems));
            setSelected(closestId);
            return;
        }
        elements = elements.filter(item => item.offset >= 0);
        const closestId = getClosestId(elements, elems => Math.min.apply(Math, elems));
        setSelected(closestId || null);
    }, [scrollY, keys]);

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
                const active = key.id === selected;
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