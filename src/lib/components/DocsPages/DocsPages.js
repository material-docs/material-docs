/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
// PropTypes validators
import PropTypes from "prop-types";


export const displayName = "MatDocDocsPages";

function DocsPages(children) {
    return children;
}

DocsPages.displayName = displayName;

DocsPages.propTypes = {
    // Containerable
    children: PropTypes.node,
}

export default DocsPages;