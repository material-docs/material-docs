/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// PropTypes validators
import PropTypes from "prop-types";

export const displayName = "MatDocLanding";

class Landing extends React.Component {
    render() {
        return this.props.children;
    }
}

Landing.displayName = displayName;

Landing.propTypes = {
    children: PropTypes.node,
}

export default Landing;
