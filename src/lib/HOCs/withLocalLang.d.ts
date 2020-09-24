/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/**
 * withLocalLang - react HOC, designed to provide element with local lang.
 * @function
 * @param {{locale: object}} lang local Lang object for merging.
 * @return function
 */

declare function withLocalLangWrapper(Component: object): object;

export default function withLocalLang(lang: {locale: object}): (Component: object) => object;