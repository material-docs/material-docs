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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@danilandreev/material-docs/components/Link/Link";
import Bold from "@danilandreev/material-docs/components/Bold/Bold";
import clsx from "clsx";
import demoScreenshotMobile from "./images/demo-screenshot-mobile.png";
import demoScreenshotDesktop1 from "./images/demo-screenshot-desktop-1.png";
import demoScreenshotDesktop2 from "./images/demo-screenshot-desktop-2.png";
import Divider from "@material-ui/core/Divider";
import useSwitchPage from "@danilandreev/material-docs/hooks/useSwitchPage";

export default function MaterialDocsLanding() {
    const classes = useStyles();
    const {switchPage} = useSwitchPage();
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
                        <Button
                            size={"large"}
                            className={classes.getStartedButton}
                            onClick={event => {debugger; switchPage(["Getting started", "Installation"])}}
                        >
                            Get started
                        </Button>
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
                            <Divider/>
                            <Box className={classes.demoImagesContainer}>
                                <Box className={classes.demoImageBox} p={1}>
                                    <img src={demoScreenshotDesktop1} className={classes.demoImage}/>
                                </Box>
                                <Box className={classes.demoImageBox} p={1}>
                                    <img src={demoScreenshotMobile} className={classes.demoImage}/>
                                </Box>
                                <Box className={classes.demoImageBox} p={1}>
                                    <img src={demoScreenshotDesktop2} className={classes.demoImage}/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} style={{height: 200}}/>
                    <Grid item xs={12} className={classes.filled}>
                        <Grid container>
                            <Grid item xs={12}>
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
                                    <Divider/>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
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
                                                <Button onClick={() => switchPage(["Getting started", "Installation"])}>
                                                    Read installation docs
                                                </Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
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
                                                <Button onClick={event => switchPage(["Tutorials", "Creating Material Docs"])}>
                                                    Explore the docs
                                                </Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{height: 200}}/>
                    <Grid item xs={12} className={clsx(classes.filled, classes.footer)}>
                        <Box p={2}>
                            <Grid container>
                                <Grid item xs={12} sm={6} md={3}>
                                    <List>
                                        <ListItem>
                                            <Bold>DOCUMENTATION</Bold>
                                        </ListItem>
                                        <ListItem>
                                            <Link page={["Getting started", "Installation"]}>Installation</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link page={["Getting started", "Installation"]}>Overview</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link page={["Components", "Layout"]}>Components</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link page={["Tutorials", "Creating Material Docs"]}>Tutorials</Link>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <List>
                                        <ListItem>
                                            <Bold>BASED ON</Bold>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://material-ui.com/"}>
                                                Material-UI
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://reactjs.org/"}>
                                                React
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://marked.js.org/"}>
                                                marked
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://github.com/DanilAndreev/routing-manager/wiki"}>
                                                routing-manager
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <List>
                                        <ListItem>
                                            <Bold>SOURCES</Bold>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://github.com/DanilAndreev/material-docs"}>GitHub
                                                repository</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://www.npmjs.com/package/@danilandreev/material-docs"}>npm
                                                package</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://github.com/DanilAndreev/material-docs/projects/2"}>Project
                                                board</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link
                                                href={"https://github.com/DanilAndreev/material-docs/blob/master/README.md"}>Readme</Link>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <List>
                                        <ListItem>
                                            <Bold>FEEDBACK</Bold>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"mailto: help.materialdocs@gmail.com"}>
                                                help.materialdocs@gmail.com
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://github.com/DanilAndreev"}>My GitHub</Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://github.com/DanilAndreev/material-docs/issues"}>
                                                Issues and bugs
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href={"https://github.com/DanilAndreev/material-docs/pulls"}>
                                                If you want to help
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Parallax>
        </React.Fragment>
    );
}