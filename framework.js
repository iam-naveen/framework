
HTMLElement.prototype.text = function (/**@type string*/text) {
    this.textContent = text;
    return this;
}

/**
    * Creates a DOM element
    * @param {keyof HTMLElementTagNameMap} tag - The tag name of the element
    * @param {string} selector - The selector of the element. It can be ID or ClassName
    * @param {NamedNodeMap} attributes - The attributes of the element
    * @param {Array<HTMLElement>} children - The children of the element
    * @returns {HTMLElement} - The DOM element
*/
function createElement(tag, selector, attributes, ...children) {
    const element = document.createElement(tag);

    if (selector) {
        if (selector.startsWith('#')) {
            element.id = selector.slice(1);
        } else if (selector.startsWith('.')) {
            let selectors = selector.split('.').filter(s => s)
            selectors.forEach(className => element.classList.add(className));
        }
    }

    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }

    if (children) {
        children.forEach(child => {
            element.appendChild(child);
        });
    }
    return element;
}

/**
 * Creates a DOM element with tag name as div
 * @param {string} selector - The selector of the element. It can be ID or ClassName
 * @param {NamedNodeMap} attributes - The attributes of the element
 * @param {Array<HTMLElement>} children - The children of the element
 * @returns {HTMLElement} - The DOM element
 */
function div(selector, attributes, ...children) {
    return createElement('div', selector, attributes, ...children);
}

/**
 * Creates a DOM element with tag name as div
 * @param {Array<HTMLElement>} children - The children of the element
 * @returns {HTMLElement} - The DOM element
 */
function div(...children) {
    if (children.length >= 1 && typeof children[0] === 'string') {
        const [selector, ...rest] = children;
        return createElement('div', selector, null, ...rest);
    }
    return createElement('div', null, null, ...children);
}

