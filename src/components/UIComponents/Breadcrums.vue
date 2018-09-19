<template>
  <div class="blue-grey lighten-4">
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
        v-for="item in items"
        :key="item.name"
        v-if="item.meta !== 'List'"
        :to="item.path"
        exact
      >
        {{ item.meta }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$route.matched
    }
  }
}
</script>
