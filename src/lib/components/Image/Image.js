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
import {useCommonStyles} from "../../stylesheets/commonStyles";


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
        align = "left",
        classes,
        ...other
    } = props;
    const [loaded, setLoaded] = React.useState(false);
    const [error, setError] = React.useState(false);
    const commonClasses = useCommonStyles();

    return (
        <React.Fragment>
            <Box
                style={{minHeight: loaded ? 0 : 200, ...style}}
                className={clsx(
                    commonClasses.pageBlock,
                    classes.root,
                    fullWidth && classes.fullWidth,
                    frame && classes.frame, className,
                    align === "right" && classes.alignRight,
                    align === "center" && classes.alignCenter,
                )}
                ref={ref}
            >
                <LazyLoadImage
                    alt={alt}
                    style={{width: "100%"}}
                    src={src}
                    placeholderSrc={placeholderSrc || src}
                    effect={"blur"}
                    wrapperClassName={clsx(fullWidth && classes.fullWidth)}
                    afterLoad={() => setLoaded(true)}
                    onError={(error) => setError(true)}
                />
                {!loaded && !error &&
                <Box className={clsx(classes.placeholder)} style={{opacity: placeholderSrc ? 0.4 : 1}}>
                    <CircularProgress className={classes.progress} size={70}/>
                </Box>
                }
                {error &&
                <Box className={clsx(classes.placeholder)} style={{opacity: placeholderSrc ? 0.4 : 1}}>
                    <Box className={classes.errorText}>
                        {alt &&
                        <Typography variant="h6" color="textSecondary" noWrap>
                            {alt}
                        </Typography>
                        }
                        <Typography variant="body1" color="textSecondary" noWrap>
                            404 | Image not found
                        </Typography>
                    </Box>
                </Box>
                }
            </Box>
            {children &&
            <Typography color={"textSecondary"} variant={"subtitle2"} paragraph={false}>{children}</Typography>}
        </React.Fragment>
    );
});

Image.displayName = displayName;

Image.propTypes = {
    // ImageProps
    src: PropTypes.string,
    placeholderSrc: PropTypes.string,
    alt: PropTypes.string,
    fullWidth: PropTypes.bool,
    frame: PropTypes.bool,
    align: PropTypes.oneOf(["left", "center", "right"]),
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Image);