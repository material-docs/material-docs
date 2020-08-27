/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";

export default class DocsMenu extends React.Component {
    static propTypes = {
        // Containerable
        children: PropTypes.node,

    }
    render() {
        return this.props.children;
    }
}
