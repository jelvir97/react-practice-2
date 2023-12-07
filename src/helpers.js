/**
 * Accepts array of items and returns a random item form array.
 */
function choice(items) {
  const rand = Math.floor(Math.random() * items.length);
  return items[rand];
}

/**
 * Accepts array and and item. 
 * 
 * If item is found, item is removed and then returned.
 * 
 * If item is not found, undefined is returned.
 */
function remove(items, item) {
  const i = items.indexOf(item);
  if (i !== -1) {
    items.splice(i, 1);
    return item;
  }
  return undefined;
}

export { choice, remove };
