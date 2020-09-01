/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useStyles} from "./styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const Image = React.forwardRef(function Image({src = "", alt = "", style, className, children, fullWidth = false, ...props}, ref) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div style={style} className={clsx(fullWidth && classes.fullWidth, className)} ref={ref}>
                <LazyLoadImage
                    alt={alt}
                    style={{width: "100%"}}
                    src={src}
                    placeholder={<CircularProgress/>}
                />
            </div>
            {children && <Typography color={"textSecondary"} variant={"subtitle2"}>{children}</Typography>}
        </React.Fragment>
    );
});

Image.displayName = "Image";

Image.defaultProps = {
    src: "",
    alt: "",
    fullWidth: false
}

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

export default Image;