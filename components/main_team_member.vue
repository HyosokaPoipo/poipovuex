<template>
  <div id="main-team">
  <h1> Akatsuki Main Team </h1>
  <ul>
    <li v-for="team in main_teams">
        <div>Name : {{team.name}}, Position : {{team.position}}  </div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  computed: {
    main_teams() {
      return this.$store.state.main_teams;
    }
  }
}
</script>

<style lang="scss">

</style>
