<template>
  <div id="main-team">
    <h1> Akatsuki Main Team </h1>
    <ul>
      <li v-for="team in main_teams">
          <div>Name : {{team.name}}, Position : {{team.position}}  </div>
      </li>
    </ul>
    <h2> Edited Akatsuki Main Team </h2>
    <ul>
      <li v-for="team in edited_main_teams">
          <div>Name : {{team.name}}, Position : {{team.position}},  Power : {{team.value}}  </div>
      </li>
    </ul>
    <input type="text" ref="power_value"/>
    <button v-on:click="changePower_main"> Change Power </button>
  </div>
</template>

<script>
export default {
  computed: {
    main_teams() {
      return this.$store.state.main_teams;
    },
    edited_main_teams() {
      return this.$store.getters.get_main_teams;
    }
  },
  methods: {
    changePower_main() {
      var temp = this.$refs.power_value.value;
      this.$store.commit('changeMainPower', temp); //changeMainPower itu nama mutations distore

    }
  }
}
</script>

<style lang="scss">

</style>
