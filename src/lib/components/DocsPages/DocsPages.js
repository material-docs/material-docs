/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import PropTypes from "prop-types";

function DocsPages(children) {
    return children;
}

DocsPages.displayName = "DocsPages";


DocsPages.propTypes = {
    // Containerable
    children: PropTypes.node,
}

export default DocsPages;