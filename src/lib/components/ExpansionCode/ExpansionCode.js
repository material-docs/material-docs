import React from "react";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Code from "../Code";
import clsx from "clsx";
import {useStyles} from "./styles";

export default function ExpansionCode({theme, language, children, demoCode = ''}) {
    const [expanded, setExpanded] = React.useState(true);
    const [code, setCode] = React.useState(demoCode);
    const classes = useStyles();

    return (
        <Box>
            <Button onClick={event => setExpanded(!expanded)}> switch {expanded.toString()} </Button>
            <Collapse in={expanded} collapsedHeight={"600px"} onExit={() => setCode(children)}
                      onEnter={() => setCode(demoCode)} style={{minHeight: 0}}>
                <div className={clsx(!expanded && classes.collapsedCode)}>
                    <Code theme={theme} language={language}>
                        {code}
                    </Code>
                </div>
            </Collapse>

        </Box>
    );
}