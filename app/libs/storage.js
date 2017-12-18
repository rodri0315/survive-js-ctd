export default storage => ({
  // fetch items from the storage
  // JSON.parse can fail, we need to take into account.
  get(k) {
    try {
      return JSON.parse(storage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  // Set items from the storage
  // JSON.stringify for serialization
  set(k, v) {
    storage.setItem(k, JSON.stringify(v));
  }
})