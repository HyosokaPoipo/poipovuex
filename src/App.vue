<template>
  <div id="app">
    <main-team></main-team>
    <bijuu-team></bijuu-team>
  </div>
</template>

<script>

import MainTeam from '../components/main_team_member.vue';
import BijuuTeam from '../components/bijuu_team.vue';

export default {
  components: {
    'main-team' : MainTeam,
    'bijuu-team' : BijuuTeam
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
