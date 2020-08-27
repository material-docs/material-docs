/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";

class ListItemContained extends React.Component {
    render() {
        return this.props.children;
    }
}

ListItemContained.propTypes = {
    // Containerable
    children: PropTypes.node,
}

export default ListItemContained;