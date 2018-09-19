<template>
  <div>
    <v-fab-transition>
      <v-btn
        color="success"
        dark
        absolute
        bottom
        right
        fab
        fixed
        class="mb-5"
        :to="to"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  props: ['to']
}
</script>

<style>

</style>
