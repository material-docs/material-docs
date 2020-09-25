/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// Components
import {LazyLoadImage} from 'react-lazy-load-image-component';
// MaterialUI components
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import clsx from "clsx";
import {withStyles} from "@material-ui/styles";
import Box from "@material-ui/core/Box";


export const displayName = "MaterialDocs-Image";

const Image = React.forwardRef(function Image(props, ref) {
    const {
        src = "",
        alt = "",
        placeholderSrc,
        style,
        className,
        children,
        fullWidth = false,
        frame = false,
        classes,
        ...other
    } = props;
    const [loaded, setLoaded] = React.useState(false);

    return (
        <React.Fragment>
            <Box
                style={{minHeight: loaded ? 0 : 200, ...style}}
                className={clsx(classes.root, fullWidth && classes.fullWidth, frame && classes.frame, className)}
                ref={ref}
            >
                <LazyLoadImage
                    alt={alt}
                    style={{width: "100%"}}
                    src={src}
                    placeholderSrc={placeholderSrc || src}
                    effect={"blur"}
                    afterLoad={() => setLoaded(true)}
                />
                {!loaded &&
                    <Box className={clsx(classes.placeholder)} style={{opacity: placeholderSrc ? 0.4 : 1}}>
                        <CircularProgress className={classes.progress} size={70}/>
                    </Box>
                }
            </Box>
            {children && <Typography color={"textSecondary"} variant={"subtitle2"} paragraph={false}>{children}</Typography>}
        </React.Fragment>
    );
});

Image.displayName = displayName;

Image.propTypes = {
    // ImageProps
    src: PropTypes.string,
    alt: PropTypes.string,
    fullWidth: PropTypes.bool,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Image);