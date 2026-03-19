'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const empStore = {

  store: new JsonStore('./models/-store.json', { employee: {} }),
  collection: 'employee',


  getCardInfo() {
    return this.store.findAll(this.collection);
  },

};

export default card-store;
