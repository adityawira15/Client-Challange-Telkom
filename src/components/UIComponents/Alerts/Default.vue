<template>
  <div v-if="alert.status">
    <v-alert v-model="alert.status" :type="alert.type" dismissible transition="scale-transition">{{alert.message}}</v-alert>
  </div>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function () {
        return { status: false, type: 'success', message: 'hello' }
      }
    }
  },
  methods: {
    // SetAlert (typeX, msgX) {
    //   this.alert = {
    //     status: true, type: typeX, message: msgX
    //   }
    // }
  }
}
</script>
