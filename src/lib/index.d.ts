/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export {
    copyToClipboard,
    createRouteFromName,
    generateMaterialDocsFromMarkdown,
    getElementOffsetSum,
    usePageScroll,
    AspectRatio,
    getContainerByType,
    getChildrenFromContainer,
    getTextFromChildren,
    createChainableTypeChecker,
    goToPage,
    replaceMarkdownParams,
} from "./utils";
export {
    useGroups,
    GroupsContext,
    LangContext,
    useLang,
    NestingContext,
    useNesting,
    SearchContext,
    useSearch,
    TaggingContext,
    useTags,
    useMenu,
    MenuContext,
    useSwitchPage,
    SwitchPageContext,
} from "./hooks";
export {
    withGroups,
    withLang,
    withLocalLang,
    withMenu,
    withNesting,
    withSearch,
    withSwitchPage,
    withTags
} from "./HOCs"
export {
    TableRow, TableRowProps,
    TableHead, TableHeadProps,
    TableBody, TableBodyProps,
    Table, TableProps,
    DocsMenuItem, DocsMenuItemProps,
    PagesGroup, PagesGroupProps,
    AutoDocsMenu, AutoDocsMenuProps,
    ListItem, ListItemProps,
    Block, BlockProps,
    Bold, BoldProps,
    Code, CodeProps,
    CodeSpan, CodeSpanProps,
    DemoWithCode, DemoWithCodeProps,
    DocsMenu, DocsMenuProps,
    DocsPage, DocsPageProps,
    DocsPages, DocsPagesProps,
    ExpansionCode, ExpansionCodeProps,
    H1, H1Props,
    H2, H2Props,
    H3, H3Props,
    H4, H4Props,
    H5, H5Props,
    H6, H6Props,
    Header, HeaderProps,
    Image, ImageProps,
    Italic, ItalicProps,
    LanguageSelector, LanguageSelectorProps,
    List, ListProps,
    ListItemContained, ListItemContainedProps,
    Markdown, MarkdownProps,
    SearchField, SearchFieldProps,
    TableCell, TableCellProps,
    Tagable, TagableProps,
    Link, LinkProps,
    DocsLayout, DocsLayoutProps,
    LangProvider, LangProviderProps,
} from "./components";
export {
    AppBarAction,
    Containerable,
    DemoCodeAction,
    Lang,
    PageData,
    PagesGroupData,
    SearchDataItem,
    Stylable,
    Tag
} from "./interfaces";
export {
    DefaultTheme
} from "./theme";