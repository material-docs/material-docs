/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default class AspectRatio {
    /**
     * Creates AspectRatio class
     * @method
     * @constructor
     * @param {number} height Relative height.
     * @param {number} width Relative width.
     * @throws TypeError
     * @example
     * const ratio = new AspectRatio(3, 5);
     * const height = ratio.getHeight(100);
     */
    constructor(height, width) {
        if (typeof height !== "number")
            throw new TypeError(`MaterialDocs: Incorrect type of "height", expected "number" got "${typeof height}"`);
        if (typeof width !== "number")
            throw new TypeError(`MaterialDocs: Incorrect type of "height", expected "number" got "${typeof width}"`);
        this.height = height;
        this.width = width;
    }

    /**
     * getHeight - method, designed to calculate absolute height from absolute width by ratio.
     * @method
     * @param {number} width Absolute width to calculate height.
     * @return {number}
     */
    getHeight(width) {
        if (this.height === 0) return 0;
        let multiplier = this.width / this.height;
        if (isNaN(multiplier)) multiplier = 0;
        return Math.trunc(width * multiplier);
    }
}