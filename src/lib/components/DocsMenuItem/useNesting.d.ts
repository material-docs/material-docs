/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />

export interface useNestingType {
    nesting: number;
}

/**
 * useNesting - react hook, created to provide elements with nesting information.
 * @function
 * @return useNestingType
 */
export declare const useNesting: () => useNestingType;