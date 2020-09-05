/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default class AspectRatio {
    constructor(height, width) {
        if (typeof height !== "number")
            throw new TypeError(`MaterialDocs: Incorrect type of "height", expected "number" got "${typeof height}"`);
        if (typeof width !== "number")
            throw new TypeError(`MaterialDocs: Incorrect type of "height", expected "number" got "${typeof width}"`);
        this.height = height;
        this.width = width;
    }

    getHeight(width) {
        if (this.height === 0) return 0;
        const multiplier = this.width / this.height;
        return Math.trunc(width * multiplier);
    }
}