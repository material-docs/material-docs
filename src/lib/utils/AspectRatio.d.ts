/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/**
 * AspectRatio - class, designed to provide sizeable component with height calculation function.
 * @class
 * @interface
 * @example
 * // Creating DemoWithCode component with aspect ratio 2:3
 * <DemoWithCode ratio={new AspectRatio(3, 3)}>
 *     ...
 * </DemoWithCode>
 */
export default interface AspectRatio {
    height: number;
    width: number;
    /**
     * @constructor
     * @param {number} height
     * @param {number} width
     */
    constructor(height: number, width: number);
    /**
     * getHeight - method, designed to calculate height using input ratio relation.
     * @method
     * @param {number} width
     */
    getHeight(width: number): number;
}
