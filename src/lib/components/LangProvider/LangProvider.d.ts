/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import Containerable from "../../interfaces/Containerable";
import PartialLang from "../../interfaces/PartialLang";

export interface LangProviderProps
    extends Containerable{
    /**
     * lang - lang extension, will be merged with main lang.
     * To main lang will be added fields from provider lang if in main lang they are not defined.
     * @type PartialLang
     */
    lang?: PartialLang;
}

/**
 *
 * @param {LangProviderProps} props
 * @constructor
 * @example
 * const lang = {
 *     locale: {
 *         name: "Hello darkness"
 *         text: "Hello darkness my old friend"
 *     }
 * }
 *
 * return (
 *     <LangProvider lang={lang}>
 *          ...
 *     </LangProvider>
 * )
 */
export default function LangProvider(props: LangProviderProps): JSX.Element;
