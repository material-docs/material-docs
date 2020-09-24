/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export const NestingContext = React.createContext(0);

const useNesting = () => React.useContext(NestingContext);
export default useNesting;
