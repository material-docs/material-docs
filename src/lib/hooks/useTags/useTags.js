/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const TaggingContext = React.createContext({
    setTag: (key, value) => {
        throw new ReferenceError("MaterialDocs: This function (setTag) hasn't been initialized yet. Maybe, you forget to call hook useTags() inside TaggingContext.Provider");
    },
    removeTag: (key) => {
        throw new ReferenceError("MaterialDocs: This function (removeTag) hasn't been initialized yet. Maybe, you forget to call hook useTags() inside TaggingContext.Provider");
    },
    tags: {},
});

const useTags = () => React.useContext(TaggingContext);
export default useTags;