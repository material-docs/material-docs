/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";

class Landing extends React.Component {
    render() {
        return this.props.children;
    }
}

Landing.propTypes = {
    children: PropTypes.node,
}

export default Landing;
