/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";

class DocsMenu extends React.Component {
    static displayName = "DocsMenu";
    render() {
        return this.props.children;
    }
}

DocsMenu.propTypes = {
    // Containerable
    children: PropTypes.node,
}

export default DocsMenu;