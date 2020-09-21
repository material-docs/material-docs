/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {SearchContext} from "../../hooks/useSearch";

export default function (Component) {
    const Wrapper = React.forwardRef(function (props, ref) {
        const {
            noGenerateAutoSearch = false,
            searchData: inputSearchData,
            ...other
        } = props;
        const [searchData, setSearchData] = React.useState(inputSearchData ? new Set(inputSearchData) : new Set());

        const addSearchItem = item => !noGenerateAutoSearch && setSearchData(prev => {
            const newData = new Set(prev);
            newData.add(item);
            return newData;
        });

        const removeSearchItem = item => !noGenerateAutoSearch && setSearchData(prev => {
            const newData = new Set(prev);
            newData.delete(item);
            return newData;
        });

        const getSearchData = () => [...searchData];


        return (
            <SearchContext.Provider value={{addSearchItem, removeSearchItem, getSearchData}}>
                <Component {...other} ref={ref} getSearchData={getSearchData}/>
            </SearchContext.Provider>
        );
    });

    return Wrapper;
}