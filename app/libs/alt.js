import Alt from 'alt';
// A module of its own and then refer to that from everywhere.

// const alt = new Alt();
// This is a standard way to implement singletons using ES6 syntax.

import makeFinalStore from 'alt-utils/lib/makeFinalStore';

// export default alt;
// It caches the modules so the next time you import Alt from somewhere, 
// it will return the same instance again.

class Flux extends Alt {
  constructor(config) {
    super(config);
    this.FinalStore = makeFinalStore(this);
  }
}

const flux = new Flux();
export default flux;