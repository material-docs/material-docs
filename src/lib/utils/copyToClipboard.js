/**
 * copyToClipboard - function copies str value to client clipboard.
 * @param {any} str
 * {Promise<*>}
 * @example
 * copyToClipboard();
 */
export default async function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    return str;
}