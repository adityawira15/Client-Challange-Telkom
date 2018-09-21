<template>
  <v-container>
    <h1 class="headline">{{teamperformance}}</h1>
  </v-container>
</template>

<script>
// import sidebar from '@/components/dashboard/Sidebar'
export default {
  data () {
    return {}
  },
  computed: {
    teamperformance () {
      return this.$t('teamperformance')
    }
  }
}
</script>

