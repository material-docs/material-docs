/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./classes";
import LogoWide from "./images/MaterialDocsLogoOverview.png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import GetAppIcon from '@material-ui/icons/GetApp';
import CardContent from "@material-ui/core/CardContent";
import Code from "@danilandreev/material-docs/components/Code/Code";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {Parallax} from "react-parallax";
import background from "./images/background.png";

export default function MaterialDocsLanding() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Parallax
                bgImage={background}
                strength={1000}
            >
                <Box className={classes.banner}>
                    <Box
                        className={classes.bannerBlock}
                    >
                        <img src={LogoWide} className={classes.bannerImage}/>
                        <Button>Get started</Button>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item xs={12} className={classes.filled}>
                        <Box p={2}>
                            <Typography variant={"h3"} align={"center"}>
                                What is Material Docs
                            </Typography>
                            <Typography align={"center"} className={classes.textRegular}>
                                Material Docs is a powerful framework that allows you to quickly and easily create
                                websites with documentation.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} style={{height: 200}} />
                    <Grid item xs={12} className={classes.filled}>
                        <Box p={2}>
                            <Typography variant={"h4"} align={"center"}>
                                Why Material Docs
                            </Typography>
                            <Typography align={"center"} className={classes.textRegular}>
                                Material Docs we use the principles of material design in our project to make the design
                                as intuitive and simple as possible.<br/>
                                Your documentation can be compiled for hosts like
                                GitHub pages and more fancy.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.filled}>
                        <Box p={2} className={classes.cardBox}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar><GetAppIcon/></Avatar>
                                    }
                                    title={<Typography variant={"h6"}>Installation</Typography>}
                                />
                                <CardContent>
                                    <Typography>Install MaterialDocs's source files via npm.</Typography>
                                    <Code theme={"darcula"}>$ npm install @danilandreev/material-docs</Code>
                                    <Typography>Also we recommend to use this framework with Material-UI for best
                                        experience. But it is optional.</Typography>
                                    <Code
                                        theme={"darcula"}>{"$ npm install @material-ui/core\n$ npm install @material-ui/icons"}</Code>
                                    <CardActions>
                                        <Button>Read installation docs</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.filled}>
                        <Box p={2} className={classes.cardBox}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar><GetAppIcon/></Avatar>
                                    }
                                    title={<Typography variant={"h6"}>Installation</Typography>}
                                />
                                <CardContent>
                                    <Typography>MaterialDocs components work without any additional setup, and don't
                                        pollute
                                        the global scope.</Typography>
                                    <Code theme={"darcula"}>$ npm install @danilandreev/material-docs</Code>
                                    <CardActions>
                                        <Button>Explore the docs</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.filled}>
                        Usage
                    </Grid>
                </Grid>
            </Parallax>
        </React.Fragment>
    );
}