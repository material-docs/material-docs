/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// Components
import Locale from "../Locale";
// MaterialUI components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import usePageScroll from "../../utils/usePageScroll";
import getElementOffsetSum from "../../utils/getElementOffsetSum";
import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/styles";
import {isWidthUp} from "@material-ui/core";
import clsx from "clsx";
import {useMaterialDocsSystem} from "../../hooks";


export const displayName = "MatDocNavigationList";

const NavigationList = React.forwardRef(function NavigationList(props, ref) {
    const {
        keys,
        width,
        classes
    } = props;
    const {scrollY} = usePageScroll();
    const [selected, setSelected] = React.useState({id: keys[0] && keys[0].id || null, clicked: false});
    const {builtIn} = useMaterialDocsSystem();

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

    if (!isWidthUp("md", width)) return null;

    return (
        <List dense className={classes.navigationList} ref={ref} style={{position: builtIn && "relative"}}>
            <ListItem>
                <Typography variant={"h6"}>
                    <Locale path={"MaterialDocs/navigationList/content"}/>
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
                                    className: classes.typography,
                                }}
                                className={classes.typography}
                            />
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    );
});

NavigationList.displayName = displayName;

NavigationList.propTypes = {
    keys: PropTypes.array,
}

export default withStyles(styles, {name: displayName})(withWidth()(NavigationList));