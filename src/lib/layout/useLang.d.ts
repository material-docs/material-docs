/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Lang from "../interfaces/Lang";

export interface LangContext{
    /**
     * switchLang - function, designed to change language settings.
     * @function
     * @param {Lang} lang
     * @async
     */
    switchLang(lang: Lang): Promise<void>;
    /**
     * lang - currently selected language.
     * @type Lang
     */
    lang: Lang | null;
    /**
     * langs - array of all available langs.
     * @type Lang[]
     */
    langs: Lang[];
    /**
     * onHelpToTranslate - function, called on help to translate button click. If not defined - button will not be rendered.
     * @function
     * @param {Lang} lang
     */
    onHelpToTranslate(lang: Lang): void;
}

/**
 * useLang - react hook, designed to provide element with language data.
 * @function
 * @return LangContext
 */

declare const useLang: () => LangContext;
export default useLang;
