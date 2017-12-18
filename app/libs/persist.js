export default function(alt, storage, storageName) {
  try {
    alt.bootstrap(storage.get(storageName));
  }
  catch(e) {
    return console.log('Failed to bootstrap data', e);
  }

  alt.FinalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot());
    }
  });
}