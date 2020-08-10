import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface DocsMenuItemProps
    extends Stylable, Containerable {
    /**
     * defaultExpanded - if true, panel will be expanded on startup.
     * @default false
     * @type boolean
     */
    defaultExpanded?: boolean;
    /**
     * textPrimary - primary text.
     * @type string
     */
    textPrimary?: string;
    /**
     * textSecondary - secondary text.
     * @type string
     */
    textSecondary?: string;
    /**
     * icon - icon, displayed in left corner.
     * @type JSX.Element
     */
    icon?: JSX.Element;
    /**
     * onClick - callback, will be triggered on onclick event handling.
     * @function
     * @param event
     */
    onClick?(event: any): void,

    /**
     * page - page name for redirecting or object structure for routing-manager changeRoute.
     * @see https://github.com/DanilAndreev/routing-manager/wiki/changeRoute
     * @type string
     */
    page?: string | any,
    /**
     * isCurrent - if true, button will be active. Used when displayed page, connected to this menu item.
     * @type function | boolean
     */
    isCurrent?: ((routeParams, pageRoute, page) => boolean) | boolean,
}

/**
 * DocsMenuItem - component, used in DocsMenu component to create menu items.
 * @param props
 * @constructor
 * @example
 * <DocsMenu>
 *     <DocsMenuItem textPrimary={"drop down"}>
 *         <DocsMenuItem textPrimary="Page 1 - best page" textSecondary="Hello, its me!" page="page1"/>
 *         <DocsMenuItem textPrimary="Page 2 - best page" textSecondary="Hello, its me!" page="page2"/>
 *     </DocsMenuItem>
 *     <DocsMenuItem textPrimary="Last page" textSecondary="I am the last one" page="page3"/>
 * </DocsMenu>
 */
export default function DocsMenuItem(props: DocsMenuItemProps): JSX.Element;