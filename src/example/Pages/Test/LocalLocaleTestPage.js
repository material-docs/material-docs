/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPage from "../../../lib/components/DocsPage/DocsPage";
import {Markdown} from "../../../lib/components";
import withLang from "../../../lib/HOCs/withLang";
import withLocalLang from "../../../lib/HOCs/withLocalLang";
import H1 from "../../../lib/components/H1";
import Locale from "../../../lib/components/Locale";

const localLang = {
    locale: {
        test: {
            hello: "Hello my friend",
            my: "My __&&lol__",
        }
    }
}

function LocalLocaleTestPage(props) {
    const {lang} = props.lang;
    return (
        <DocsPage name={"LocalLocaleTestPage"} searchDescription={"asdfasf"}>
            <Markdown locale={"test/hello"} />
            <Markdown>{lang.locale.test.darkness}</Markdown>
            <Markdown locale={"test/my"} data={{lol: "try my &&kek", kek: "keks"}}/>
            <H1><Locale path={"test/hello"}/></H1>
        </DocsPage>
    );
}

export default withLocalLang(localLang)(withLang(LocalLocaleTestPage));
// export default withLang(LocalLocaleTestPage);
