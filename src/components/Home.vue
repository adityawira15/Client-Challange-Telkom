<template>
  <v-container>
    <h1 class="headline">{{welcome}}</h1>
  </v-container>
</template>

<script>
// import sidebar from '@/components/dashboard/Sidebar'
export default {
  data () {
    return {}
  },
  computed: {
    welcome () {
      return this.$t('welcome')
    }
  }
}
</script>

