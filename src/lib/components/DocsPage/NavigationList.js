/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./styles";
import clsx from "clsx";
import {Link} from "@material-ui/core";
import usePageScroll from "../../utils/usePageScroll";
import getElementOffsetSum from "../../utils/getElementOffsetSum";
import PropTypes from "prop-types";


const NavigationList = React.forwardRef(function NavigationList({keys}, ref) {
    const classes = useStyles();
    const {scrollY} = usePageScroll();
    const [selected, setSelected] = React.useState({id: keys[0] && keys[0].id || null, clicked: false});

    if (keys && !Array.isArray(keys)) throw new TypeError("MaterialDocs: keys must be array type!");

    React.useEffect(() => {
        function getClosestId(elements, func) {
            const closestDistance = func(elements.map(element => element.offset));
            const closest = elements.find(item => item.offset === closestDistance) || null;
            const closestId = closest && closest.id;
            return closestId;
        }

        if (selected.clicked) {
            setSelected({...selected, clicked: false});
            return;
        }

        let elements = keys.map(item => {
            const {ref, id} = item;
            let offset = 0;
            try {
                const {top} = getElementOffsetSum(ref.current);
                offset = scrollY - (top - 64); // 64 - is a height of header;
            } catch (error) {
            }
            return {id, offset};
        });
        if (scrollY >= (document.body.clientHeight - window.innerHeight)) {
            const closestId = getClosestId(elements, elems => Math.min.apply(Math, elems));
            setSelected({id: closestId, clicked: false});
            return;
        }
        if (elements.every(element => element.offset < 0)) {
            const closestId = getClosestId(elements, elems => Math.max.apply(Math, elems));
            setSelected({id: closestId, clicked: false});
            return;
        }
        elements = elements.filter(item => item.offset >= 0);
        const closestId = getClosestId(elements, elems => Math.min.apply(Math, elems));
        setSelected({id: closestId || null, clicked: false});
    }, [scrollY, keys]);

    if (!keys || !keys.length) {
        return null;
    }

    return (
        <List dense style={{position: "fixed"}} ref={ref}>
            <ListItem>
                <Typography variant={"h6"}>
                    Content
                </Typography>
            </ListItem>
            {keys.map(key => {
                const active = key.id === selected.id;
                return (
                    <Link
                        underline={"none"}
                        href={`#${key.id}`}
                        key={key.id}
                        className={classes.contentLink}
                        onClick={event => setSelected({id: key.id, clicked: true})}
                    >
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
});

NavigationList.propTypes = {
    keys: PropTypes.array,
}

export default NavigationList;