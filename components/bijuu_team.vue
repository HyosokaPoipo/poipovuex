<template>
  <div id="bijuu-team">
    <h1> Akatsuki Bijuu Team</h1>
    <ul>
      <li v-for="team in bijuu_teams">
          <div>Name : {{team.name}}, Position : {{team.position}}  </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    bijuu_teams() {
      return this.$store.state.bijuu_teams;
    }
  }
}
</script>

<style lang="scss">

</style>
