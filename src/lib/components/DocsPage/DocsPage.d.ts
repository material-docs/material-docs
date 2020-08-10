import Containerable from "../../interfaces/Containerable";

export interface DocsPageProps
    extends Containerable {
    /**
     * name - page name. Route will be generated automatically from name.
     * @type string
     * @example
     * F.e. name:  Hello darkness -> route: hello-darkness
     */
    name: string;
}

/**
 * DocsPage - component, used to create page in DocsPages.
 * @param props
 * @constructor
 * @example
 * <DocsPages>
 *     <DocsPage name="My first page">
 *         ...content...
 *     </DocsPage>
 * </DocsPages>
 */
export default function DocsPage(props: DocsPageProps): JSX.Element;