/**
 * This is currently a light wrapper around localStorage, so we can swap out the storage provider if needed.
 * Supports chaining (set/remove/clear return the storage object)
 */

export default {
  set(key, value) {
    localStorage.setItem(key, value);
    return this;
  },
  get(key) {
    return localStorage.getItem(key);
  },
  remove(key) {
    localStorage.removeItem(key);
    return this;
  },
  clear() {
    localStorage.clear();
    return this;
  },
};
