import { Store } from '@ali/kylin-framework';

export default new Store({
  state: {
    mapStateToPropsBug: 'old string'
  },
  mutations: {
    updateMapStateToPropsBug(state, payload) {
      state.mapStateToPropsBug = payload;
    }
  },
  actions: {

  }
});
