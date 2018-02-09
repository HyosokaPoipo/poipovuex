import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    main_teams: [
      {name: 'Painz', position: 'leader', value: 99},
      {name: 'Konan', position: 'vice leader', value: 93},
      {name: 'Tobi', position: 'secret leader', value: 97}
    ]
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }

})


