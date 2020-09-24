/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const TaggingContext = React.createContext({
    setTag: (key, value) => {
    },
    removeTag: (key) => {
    },
    tags: {},
});

const useTags = () => React.useContext(TaggingContext);
export default useTags;
