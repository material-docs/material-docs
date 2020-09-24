/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {createMuiTheme} from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
//Components display names
import {displayName as AutoDocsMenuDn} from "./../components/AutoDocsMenu";
import {displayName as BlockDn} from "./../components/Block";
import {displayName as BoldDn} from "./../components/Bold";
import {displayName as CodeDn} from "./../components/Code";
import {displayName as CodeSpanDn} from "./../components/CodeSpan";
import {displayName as DemoWithCodeDn} from "./../components/DemoWithCode";
// import {displayName as DocsLayoutDn} from "./../components/DocsLayout";
import {displayName as DocsMenuDn} from "./../components/DocsMenu";
import {displayName as DocsMenuItemDn} from "./../components/DocsMenuItem";
import {displayName as DocsPageDn} from "./../components/DocsPage";
import {displayName as NavigationListDn} from "./../components/DocsPage/NavigationList";
import {displayName as DocsPagesDn} from "./../components/DocsPages";
import {displayName as ExpansionCodeDn} from "./../components/ExpansionCode";
import {displayName as H1Dn} from "./../components/H1";
import {displayName as H2Dn} from "./../components/H2";
import {displayName as H3Dn} from "./../components/H3";
import {displayName as H4Dn} from "./../components/H4";
import {displayName as H5Dn} from "./../components/H5";
import {displayName as H6Dn} from "./../components/H6";
import {displayName as HeaderDn} from "./../components/Header";
import {displayName as ImageDn} from "./../components/Image";
import {displayName as ItalicDn} from "./../components/Italic";
import {displayName as LandingDn} from "./../components/Landing";
import {displayName as LanguageSelectorDn} from "./../components/LanguageSelector";
import {displayName as ListDn} from "./../components/List";
import {displayName as ListItemDn} from "./../components/ListItem";
import {displayName as ListItemContainedDn} from "./../components/ListItemContained";
import {displayName as MarkdownDn} from "./../components/Markdown";
import {displayName as PagesGroupDn} from "./../components/PagesGroup";
import {displayName as SearchFieldDn} from "./../components/SearchField";
import {displayName as SearchMenuItemDn} from "./../components/SearchField/SearchMenuItem";
import {displayName as TableDn} from "./../components/Table";
import {displayName as TagableDn} from "./../components/Tagable";

const DefaultTheme = {
    palette: {
        primary: {
            main: blue[700],
        },
        secondary: {
            main: red[600],
        },
    },
    components: {
        [AutoDocsMenuDn]: {
            defaultProps: {}
        },
        [BlockDn]: {
            defaultProps: {
                color: "light",
            }
        },
        [BoldDn]: {
            defaultProps: {}
        },
        [CodeDn]: {
            defaultProps: {
                language: "javascript",
                theme: "light",
            }
        },
        [CodeSpanDn]: {
            defaultProps: {
                color: "default",
                text: "inherit",
            }
        },
        [DemoWithCodeDn]: {
            defaultProps: {
                noTag: false,
                paperContainer: false,
                p: 0,
                m: 0,
            }
        },
        // [DocsLayoutDn]: {
        //     defaultProps: {
        //         noGenerateAutoSearch: false,
        //         noSearchField: false,
        //         noLanguageSelector: false,
        //         actions: [],
        //         router: "browser-router",
        //         mask: "/(*page)",
        //     }
        // },
        [DocsMenuDn]: {
            defaultProps: {
                dense: false,
            }
        },
        [DocsMenuItemDn]: {
            defaultProps: {
                defaultExpanded: false,
                textPrimary: "",
                textSecondary: "",
                isCurrent: false,
                dense: false,
            }
        },
        [DocsPageDn]: {
            defaultProps: {
                name: "home",
                noGenerateAutoSearch: false,
                noAutoMenu: false,
                searchTags: [],
            }
        },
        [NavigationListDn]: {
            defaultProps: {}
        },
        [DocsPagesDn]: {
            defaultProps: {}
        },
        [ExpansionCodeDn]: {
            defaultProps: {
                collapsedHeight: 100,
            }
        },
        [H1Dn]: {
            defaultProps: {}
        },
        [H2Dn]: {
            defaultProps: {}
        },
        [H3Dn]: {
            defaultProps: {}
        },
        [H4Dn]: {
            defaultProps: {
                noDivider: true,
                noTag: true,
            }
        },
        [H5Dn]: {
            defaultProps: {
                noDivider: true,
                noTag: true,
            }
        },
        [H6Dn]: {
            defaultProps: {
                noDivider: true,
                noTag: true,
            }
        },
        [HeaderDn]: {
            defaultProps: {
                heading: 1,
            }
        },
        [ImageDn]: {
            defaultProps: {
                src: "",
                alt: "",
                fullWidth: false
            }
        },
        [ItalicDn]: {
            defaultProps: {}
        },
        [LandingDn]: {
            defaultProps: {}
        },
        [LanguageSelectorDn]: {
            defaultProps: {
                size: "large"
            }
        },
        [ListDn]: {
            defaultProps: {}
        },
        [ListItemDn]: {
            defaultProps: {
                type: "circle",
                dense: false,
            }
        },
        [ListItemContainedDn]: {
            defaultProps: {}
        },
        [MarkdownDn]: {
            defaultProps: {
                inline: false,
                data: {},
            }
        },
        [PagesGroupDn]: {
            defaultProps: {},
            defaultExpanded :false,
        },
        [SearchFieldDn]: {
            defaultProps: {
                searchData: [],
            }
        },
        [SearchMenuItemDn]: {
            defaultProps: {}
        },
        [TableDn]: {
            defaultProps: {}
        },
        [TagableDn]: {
            defaultProps: {
                noTag: false,
                noDivider: false,
            }
        },


    }
};

export default DefaultTheme;
