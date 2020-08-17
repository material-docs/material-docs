/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />

export type NestingContext = number;

/**
 * useNesting - react hook, created to provide elements with nesting information.
 * @function
 * @return number
 */
declare const useNesting: () => NestingContext;
export default useNesting;