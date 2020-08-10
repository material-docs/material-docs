export interface NavigationListProps {
    /**
     * keys - list with information about tags and labels in page.
     * @type: array
     */
    keys: any[];
}

/**
 * NavigationList - system component, used to display tags in page. Used inside DocsPage.
 * @param props
 * @constructor
 */
export default function NavigationList(props: NavigationListProps): JSX.Element;