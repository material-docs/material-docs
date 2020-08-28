/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import * as React from "react";
import Containerable from "../../interfaces/Containerable";

export interface LandingProps
    extends Containerable {
}

export default class Landing extends React.Component<LandingProps, any> {
    render(): JSX.Element;
}