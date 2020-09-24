/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {LangContext} from "../../hooks/useLang";
import {useChangeRoute} from "routing-manager";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import mergeLangs from "../../utils/mergeLangs";
import * as _ from "lodash";

export default function withLangSetup(Component) {
    const Wrapper = React.forwardRef(function (props, ref) {
        const {
            langs,
            defaultLang,
            onHelpToTranslate,
            ...other
        } = props;
        const {getQueryParams, getRouteParams, changeRoute} = useChangeRoute();
        const [lang, setLang] = React.useState(null);
        const [loading, setLoading] = React.useState(true);

        const {l: langName} = getQueryParams();

        // Effect for language setup on startup and changing lang on url hash changing.
        React.useEffect(() => {
            if (defaultLang) {
                if (!langName) {
                    changeRoute(null, {l: defaultLang.name});
                }
                if (Array.isArray(langs)) {
                    const newLang = langs.find(candidate => candidate.name === langName) || defaultLang;
                    switchLang(newLang).then();
                } else {
                    switchLang(defaultLang).then();
                }
            } else {
                setLoading(false);
            }
        }, [langName]);

        // Effect for setting up loading screen state when locale not loaded.
        React.useEffect(() => {
            if (defaultLang)
                lang ? setLoading(false) : setLoading(true);
        }, [lang]);

        async function switchLangRoute(inputLang) {
            if (typeof inputLang !== "object")
                throw new TypeError(`MaterialDocs: incorrect type of lang, expected Lang, got ${typeof inputLang}`);
            if (typeof inputLang.name !== "string")
                throw new TypeError(`MaterialDocs: incorrect type of lang.name, expected string, got ${typeof inputLang.name}`);
            changeRoute(null, {l: inputLang.name});
        }

        async function switchLang(inputLang) {
            if (typeof inputLang !== "object")
                throw new TypeError(`MaterialDocs: incorrect type of lang, expected Lang, got ${typeof inputLang}`);
            let newLang = _.cloneDeep(inputLang);
            if (!inputLang.locale && typeof inputLang.loadLang !== "function") {
                throw new TypeError(`MaterialDocs: you must specify in "inputLang" one of fields: "locale: object" or "loadLang: function(): object"`);
            } else if (!inputLang.locale && inputLang.loadLang) {
                newLang.locale = newLang.loadLang();
            }
            newLang = mergeLangs(newLang, defaultLang);
            setLang(newLang);
        }

        if (loading) return (
            <Box style={{
                display: "flex",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <CircularProgress size={100}/>
                <Box p={1}>
                    <Typography variant={"h3"} color={"primary"}>
                        Material Docs is loading...
                    </Typography>
                    <Typography variant={"h6"} color={"textSecondary"}>
                        Please wait a couple of time.
                    </Typography>
                </Box>
            </Box>
        );

        return (
            <LangContext.Provider value={{lang, switchLang: switchLangRoute, langs, onHelpToTranslate}}>
                <Component {...other} ref={ref} noLanguageSelector={defaultLang ? other.noLanguageSelector : true}/>
            </LangContext.Provider>
        );
    });

    return Wrapper;
}