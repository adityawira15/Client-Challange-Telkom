<template>
<v-layout row justify-center v-if="$store.state.warehouse.dialogState">
    <v-form ref="fWarehouse">
    <v-dialog class="dialog_modal" v-model="$store.state.warehouse.dialogState" scrollable max-width="500px">
      <v-card class="card_dialog">
        <v-card-title class="headerModal">
        <v-layout row wrap>
          <v-flex xs2> </v-flex>
          <v-flex xs8 class="titleModal"> 
            Add New Warehouse
          </v-flex>
          <v-flex xs2> 
              <v-btn @click.native="closeWarehouse" style="margin: -15px 0px -19px 0px !important" flat icon color="white">
                <img src="../../assets/img/close-button-icon.png" style="width: 21px; height: 21px"></img>
              </v-btn>
                <div class="spanIcon">close</div>
          </v-flex>
        </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-0" style="height: 100%;">
          <v-container grid-list-md>
            <v-layout row v-for="(form, index) in forms" :key="form.label">
            <v-flex v-if="form.type === 'text' || form.type === 'email' || form.type === 'password' ">
              <v-layout row wrap>
                <v-flex xs2> </v-flex>
                <v-flex xs8>

                <v-text-field
                class="inputDialog"
                solo
                prepend-icon="place"
                :label="form.label"
                v-model="warehouse[form.id]"
                :type="form.type"
                :rules="form.isRequired?[v => !!v || form.label + ' is required.']:[]"
                :required="form.isRequired"
                ></v-text-field>
                </v-flex>
                <v-flex xs2> </v-flex>
              </v-layout>
            </v-flex>
            <v-flex v-if="form.type === 'select'">
              <v-layout row wrap>
                <v-flex xs2> </v-flex>
                <v-flex xs8>
                <v-select
                class="inputDialog select1"
                content-class="listPurchase"
                solo
                prepend-icon="place"
                :label="form.label"
                v-model="warehouse[form.id]"
                :items="form.data"
                item-text="Name"
                item-value="Id"
                autocomplete
                ></v-select>
                </v-flex>
                <v-flex xs2> </v-flex>
              </v-layout>
                
            </v-flex>
            <v-flex v-if="form.type === 'radio'">
                <v-radio-group
                :label="form.label"
                v-model="warehouse[form.id]"
                row
                >
                <v-radio
                    v-for="item in form.data"
                    :key="item.Id"
                    :label="item.Name"
                    :value="item.Id"
                ></v-radio>
                </v-radio-group>
            </v-flex>
            <v-flex v-if="form.type === 'datetime'">
                <v-menu
                ref="menu2"
                :close-on-content-click="false"
                :v-model="form.modal"
                :nudge-right="40"
                :return-value.sync="warehouse[form.id]"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px">
                <v-text-field
                    slot="activator"
                    v-model="warehouse[form.id]"
                    :label="form.label"
                    readonly
                    :rules="form.isRequired?[v => !!v || form.label + ' is required.']:[]"
                    :required="form.isRequired"
                ></v-text-field>
                <v-date-picker v-model="warehouse[form.id]" @input="$refs.menu2[index - 1].save(warehouse[form.id])"></v-date-picker>
                </v-menu>
            </v-flex>
            </v-layout> 
          </v-container>
          
            <hr class="hrDialog">
          <div class="text-xs-center">
              <v-btn round color="success" class="btnSave" @click.native="saveWarehouse">Save</v-btn>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-form>
    </v-layout>
</template>

<script>
import FormDialogWarehouseType from '@/components/warehousetype/FormDialog'

export default {
  data(){
    return {
        warehouse:{}
    }
  },
  components:{
    
    FormDialogWarehouseType
    
  },
  methods:{
      closeWarehouse(){
          this.$refs.fWarehouse.reset()
          this.$store.state.warehouse.dialogState = false
      },
    saveWarehouse(){
      if (this.$refs.fWarehouse.validate()){
        this.$store.dispatch('createWarehouse', this.warehouse)
        .then((result) => {
          this.closeWarehouse()
        })
      }
    }
  },
  computed: {
  forms () {
      return [
      
      {"type":"text","id":"Name","label":"Name","isRequired":false},
      
      {"type":"text","id":"Description","label":"Description","isRequired":false},
      
      {"type": 'select', "id": 'WarehouseTypeId', "label": 'Warehouse Type',"isRequired": true,"data": this.$store.state.warehousetype.warehousetypes,buttonAdd:true, dialogAction:this.showDialogWarehouseType},
      
      ]
    }
  },
  created(){
      this.$store.dispatch('GET_WAREHOUSETYPE_OF_WAREHOUSE')
  }
}
</script>
