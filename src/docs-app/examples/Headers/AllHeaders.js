/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
} from "@danilandreev/material-docs/components/Headers";

export default function AllHeaders() {
    return (
        <div style={{padding: "20px"}}>
            <H1> I am H1 header. I am the biggest.</H1>
            <H2> I am H2 header. I am so pretty.</H2>
            <H3> I am H3 header.</H3>
            <H4> I am H4 header. I have no underline.</H4>
            <H5> I am H5 header. Also I don't create item in page navigation list.</H5>
            <H6> I am H6 header. I am the smallest.</H6>
        </div>
    );
}