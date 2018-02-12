<template>
  <div id="bijuu-team">
    <h1> Akatsuki Bijuu Team</h1>
    <ul>
      <li v-for="team in bijuu_teams">
          <div>Name : {{team.name}}, Position : {{team.position}}, Power : &nbsp&nbsp{{team.value}}  </div>
      </li>
    </ul>

    <h3>Edited Akatsuki Bijuu Team</h3>
    <ul>
      <li v-for="team in edited_bijuu_teams">
          <div>Name : {{team.name}}, Position : {{team.position}}, Power : &nbsp&nbsp{{team.value}}  </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    bijuu_teams() {
      return this.$store.state.bijuu_teams;
    },
    edited_bijuu_teams(){
      return this.$store.getters.get_bijuu_teams;
    }
  }
}
</script>

<style lang="scss">

</style>
