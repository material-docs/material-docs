/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/**
 * createChainableTypeChecker - function, designed to create chainable PropTypes validators.
 * @function
 * @param {function} validate
 * @return {object}
 * @throws Error
 */
export default function createChainableTypeChecker(
    validate: (props: object, propName: string, componentName: string, location: any) => Error
): object;
