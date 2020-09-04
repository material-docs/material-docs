/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default interface AspectRatio {
    height: number;
    width: number;
    constructor(height: number, width: number);
    getHeight(width: number): number;
}
