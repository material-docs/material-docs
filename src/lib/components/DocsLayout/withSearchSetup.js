/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {SearchContext} from "../../hooks/useSearch";

export default function (Component) {
    const Wrapper = React.forwardRef(function () {
        return (
            <SearchContext.Provider value={{addSearchItem, removeSearchItem, getSearchData}}>

            </SearchContext.Provider>
        );
    });

    return Wrapper;
}