<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card cardProject">
            <h4>Que All Project</h4>
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Project</th>
                  <th>Unit</th>
                  <th>Stakeholder</th>
                  <th>Sprint</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items">
                  <td style="text-align: center">{{ item.no }}</td>
                  <td>{{ item.nama_project }}</td>
                  <td>{{ item.unit }}</td>
                  <td>{{ item.stakeholder }}</td>
                  <td>{{ item.sprint }}</td>
                  <td v-if="item.status == 'Complete'">
                    <span class="text-success">{{ item.status }}</span>
                  </td>
                  <td v-if="item.status == 'Rejected'">
                    <span class="text-danger">{{ item.status }}</span>
                  </td>
                  <td v-if="item.status == 'On Going'">
                    <span class="text-warning">{{ item.status }}</span>
                  </td>
                  <td v-if="item.status == 'In Queue'">
                    <span class="text-secondary">{{ item.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>      
          </div>
        </div>
      </div>
      <br>
      <div class="row">

        <div class="col-md-4">

          <div class="card cardProject">
            <div class="card-block">
              <h4 class="card-title">Best Product Perfomance</h4>
              <ul v-for="item in perfomance" class="ulPerfomance">
                <li class="listBestProject d-flex justify-content-between align-items-center"> {{ item.no }}.{{ item.nama_project }}
                  <span class="badge  badge-pill">
                    <img style="width: 15px; " src="../../assets/img/triangle-down.png">
                    {{ item.score }}
                  </span>
                </li>
              </ul>
              <br>
              <div class="row">
                <ul class="nav col-md-12 justify-content-end">
                  <button type="button" class="btn btnMore btn-primary">MORE</button>
                </ul>
              </div>
            </div>
          </div>       
        </div>
        <div class="col-md-4">

          <div class="card cardProject">
            <div class="card-block">
              <h4 class="card-title">Best Squad Perfomance</h4>
              <ul v-for="item in perfomance" class="ulPerfomance">
                <li class="listBestProject d-flex justify-content-between align-items-center"> {{ item.no }}.{{ item.nama_project }}
                  <span class="badge  badge-pill">
                    <img style="width: 15px; " src="../../assets/img/triangle-down.png">
                    {{ item.score }}
                  </span>
                </li>
              </ul>
              <br>
              <div class="row">
                <ul class="nav col-md-12 justify-content-end">
                  <button type="button" class="btn btnMore btn-primary">MORE</button>
                </ul>
              </div>
            </div>
          </div>       
        </div>
        <div class="col-md-4">

          <div class="card cardProject">
            <div class="card-block">
              <h4 class="card-title">Talent</h4>
              <div class="row">
                <div class="col-md-4">
                  Floating
                  <ul v-for="item in talent" class="ulPerfomance">
                    <li class="listBestProject d-flex justify-content-between align-items-center"> {{ item.name }}
                      <span class="badge  badge-pill">
                        {{ item.score }}
                      </span>
                    </li>
                  </ul>
                  <button type="button" class="btn btnMore btn-primary">MORE</button>
                </div>
                <div class="col-md-4"> </div>
                <div class="col-md-4">
                  Vacant
                  <ul v-for="item in talent" class="ulPerfomance">
                    <li class="listBestProject d-flex justify-content-between align-items-center"> {{ item.name }}
                      <span class="badge  badge-pill">
                        {{ item.score }}
                      </span>
                    </li>
                  </ul>
                  <button type="button" class="btn btnMore btn-primary">MORE</button>
                </div>
              </div>
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
</style>


<script>
import ButtonCreate from '@/components/UIComponents/Buttons/ButtonCreate'
import Alert from '@/components/UIComponents/Alerts/Default'
import { GET_STATE_WAREHOUSES, GET_PROJECTS } from '@/store/actions.type'
import LsService from '@/common/ls.service'
import { ROW_PER_PAGE } from '@/common/config'
import { mapGetters } from 'vuex'
import _ from 'underscore'


export default {
  components: {
    ButtonCreate,
    Alert
  },
  data () {
    return {
      title: 'Project',
      alert: {},
      bordered: true,
      fields: [
      { key: 'no', label: 'No' },
      { key: 'nama_project', label: 'Nama Project' },
      { key: 'unit', label: 'Unit' },
      { key: 'stakeholder', label: 'Stakeholder' },
      { key: 'sprint', label: 'Sprint' },
      { key: 'status', label: 'Status' },

      ],
      items: [
      { 'no': 1, 'nama_project': 'Teman Berbagi', 'unit': 'TNT', 'stakeholder': 'TNT', 'sprint': 15, 'status': 'Complete'},
      { 'no': 1, 'nama_project': 'Teman Berbagi', 'unit': 'TNT', 'stakeholder': 'TNT', 'sprint': 15, 'status': 'Rejected'},
      { 'no': 1, 'nama_project': 'Teman Berbagi', 'unit': 'TNT', 'stakeholder': 'TNT', 'sprint': 15, 'status': 'On Going'},
      { 'no': 1, 'nama_project': 'Teman Berbagi', 'unit': 'TNT', 'stakeholder': 'TNT', 'sprint': 15, 'status': 'In Queue'},
      { 'no': 1, 'nama_project': 'Teman Berbagi', 'unit': 'TNT', 'stakeholder': 'TNT', 'sprint': 15, 'status': 'Complete'}
      ],
      perfomance: [
      { 'no': 1, 'nama_project': 'MyIndihome', 'score': 3},
      { 'no': 1, 'nama_project': 'MyIndihome', 'score': 3},
      { 'no': 1, 'nama_project': 'MyIndihome', 'score': 3},
      { 'no': 1, 'nama_project': 'MyIndihome', 'score': 3},
      { 'no': 1, 'nama_project': 'MyIndihome', 'score': 3},
      { 'no': 1, 'nama_project': 'MyIndihome', 'score': 3},
      ],
      talent: [
      { 'name': 'UX', 'score': 3, 'type': 'floating'},
      { 'name': 'UX', 'score': 3, 'type': 'floating'},
      { 'name': 'UX', 'score': 3, 'type': 'floating'},
      { 'name': 'UX', 'score': 3, 'type': 'floating'},
      { 'name': 'UX', 'score': 3, 'type': 'floating'},
      { 'name': 'UX', 'score': 3, 'type': 'floating'},
      ],
      striped: false,
      bordered: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      search: '',
      headers: [
      ],
      pagination: {}
    }
  },
  computed: {
    // items () {
    //   return this.$store.state.warehouse.warehouses
    // },
    // pages () {
    //   return this.$store.state.warehouse.paginations.pageLength
    // },
    // currentPages () {
    //   return this.$store.state.warehouse.paginations.currentPage
    // }
  },
  methods: {
  },
  created () {
    this.$store.dispatch(GET_PROJECTS).then((result) => {
      console.log(result)
    })
    // this.$store.dispatch(GET_STATE_WAREHOUSES)
    //   .then((result) => {
    //       const a =_.allKeys(result.data.data[0])
    //       const b = _.filter(a,(o)=>{
    //         if(o!=='CreatedTime' &&  o!=='ModifiedTime' 
    //         &&  o!=='ModifiedBy' 
    //         &&  o!=='Deleted' &&  o!=='RowVersion'){
    //           this.headers.push({text:o,value:o})
    //         }
    //       })
    //   })
    //   .catch((err) => {
    //     this.SetAlert('error', err.message)
    //   })
  }
}
</script>
