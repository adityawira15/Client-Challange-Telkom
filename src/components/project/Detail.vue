<template>
  <div>
    <div class="container">
      <div class="card cardProject">
        <div class="row">

          <div class="col-md-6">
            <div class="row">
              <div class="col-md-3">
                <h4>Project</h4>
                <br>
                Description
                Stak holder
                Sprint Now
                <br>
                <br>
                Start Date
                End Date
              </div>
              <div class="col-md-9">
                <select v-model="value" v-on:change="setProject(value)" class="custom-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <br>
                <br>
                <div> : This is sample description about project </div>
                <div> : DEGM </div>
                <div> : 4 </div>
                <br>
                <div> : 12/06/2018 </div>
                <div> : 22/06/2018 (10 hari lagi) </div>
              </div>
            </div>  
          </div>

          <div class="col-md-6">
            <div class="card cardMember">
              <div class="card-block">
                <h5 class="card-title">Member</h5>
                <table class="table table-bordered table-hover table-member">
                  <thead>
                    <tr> <th>No</th> <th>Nama</th> <th>Stream</th> </tr>
                  </thead>
                  <tbody>
                    <tr> <td>1</td> <td>Budi Artianto</td> <td>Backend</td> </tr>
                    <tr> <td>2</td> <td>Tono Budiman</td> <td>Backend</td> </tr>
                    <tr> <td>3</td> <td>Wawan Aja</td> <td>Front End</td> </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>

      <br>

        <div class="row">
          <div class="col-md-12">
            <div class="card cardProject">
              <div class="card-block">
                <h5 class="card-title">Best Talent Perfomance</h5>
                <table class="table table-bordered table-hover table-member">
                  <thead>
                    <tr> <th>No</th> <th>Nama</th> <th>Stream</th> <th>Point Burn</th> <th>Point Remaining</th> <th>Point Queue</th> </tr>
                  </thead>
                  <tbody>
                    <tr> <td>1</td> <td>Budi Artianto</td> <td>Backend</td> <td>105</td> <td>30</td> <td>30</td> </tr>
                    <tr> <td>2</td> <td>Tono Budiman</td> <td>Backend</td> <td>102</td> <td>32</td> <td>12</td></tr>
                    <tr> <td>3</td> <td>Wawan Aja</td> <td>Front End</td> <td>109</td> <td>32</td> <td>25</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  </div>

</template>

<style>

.ulPerfomance {
  padding: 0px !important;
  margin: 0px !important;
}
.btnMore {
  width: 75px;
  height: 36px;
  border-radius: 4px;
  background-color: #53b9ec;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  font-family: Helvetica;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.listBestProject {
  margin: 3px 0px 3px 0px;
}
.cardProject {
  padding: 20px;
}
.cardMember {
  padding: 20px;
  background-color: #f5f7fa;
}
.table-member {
  background-color: white;
}
</style>

<script>
import axios from 'axios'
// import FormWarehouse from '@/components/warehouse/Form'
// import { GET_WAREHOUSE, UPDATE_WAREHOUSE, DELETE_WAREHOUSE } from '@/store/actions.type'

export default {
  components: {
    // FormWarehouse
  },
  props: ['id'],
  data () {
    return {
      value: 1,
      edit: true,
      title: 'Warehouse',
      alert: {
        status: false, type: 'success', message: ''
      },
      loadingBtnSave: false,
      dialog: false
    }
  },
  computed: {
   // warehouse () {
   //    return this.$store.state.warehouse.warehouse
   //  }
 },
 mounted () {
    // this.$store.dispatch(GET_WAREHOUSE, this.id)
  },
  methods: {
    setProject(value) {
      console.log(value)
    }
    // deleted () {
    //   this.$store.dispatch(DELETE_WAREHOUSE, this.id)
    //   .then((response) => {
    //     this.$router.push({ path: '/warehouse' })
    //   }).catch((err) => {
    //     this.alert = {
    //       status: true,
    //       type: 'error',
    //       message: err.message
    //     }
    //   });
    // },
    // save () {
    //   this.loadingBtnSave = true
    //   this.$store.dispatch(UPDATE_WAREHOUSE, this.warehouse)
    //   .then((response) => {
    //     this.loadingBtnSave = false
    //     this.$router.push({ path: '/warehouse' })
    //   }).catch((err) => {
    //     this.alert = {
    //       status: true,
    //       type: 'error',
    //       message: err.message
    //     }
    //     this.loadingBtnSave = false
    //   })
    // }
  }
}
</script>