export function setInnerHTML(element, innerHTML) {
  element.innerHTML = innerHTML;
  return element;
}

export function queryElement(element, query) {
  return element.querySelector(query);
}