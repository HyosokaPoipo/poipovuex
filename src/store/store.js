import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    main_teams: [
      {name: 'Painz', position: 'leader', value: 99},
      {name: 'Konan', position: 'vice leader', value: 93},
      {name: 'Tobi', position: 'secret leader', value: 97}
    ],
    bijuu_teams: [
      {name: 'Itachi', position: 'bla bla bla', value: 87},
      {name: 'Hisoka', position: 'commander 1', value: 89},
      {name: 'Kisame', position: 'itachi\'s backup ', value: 77},
      {name: 'Sasory', position: 'winger', value: 73},
      {name: 'Poipo', position: 'captain', value: 91}
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


