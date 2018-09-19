<template>
  <!-- dialog delete -->
  <div>
    <v-dialog v-model="dialog" :max-width="width">
      <v-card justify-center align-center>
        <v-card-text class="red">
          <div class="headline text-xs-center white--text">{{title}}</div>
        </v-card-text>
        <hr class="devider">
        <v-card-text class="text-xs-center">
          {{content}}
        </v-card-text>
        <v-card-actions>
          <v-btn color="" @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.native="btnYes">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['dialog','title', 'content', 'width'],
  data () {
    return {
      // width: '290'
      // dialog: true
    }
  },
  methods: {
    btnYes () {
      this.$emit('btnYes')
    }
  }
}
</script>

<style>

</style>
