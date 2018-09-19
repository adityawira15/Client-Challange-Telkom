// store  Purchase or service  Purchase
import ApiService from '@/common/api.service'
import LsService from '@/common/ls.service'
import { ROW_PER_PAGE, NUMBER_OF_PAGES } from '@/common/config'
import {
  GET_PROJECTS
} from '@/store/actions.type'

// initial state
const state = {
  purchases: [],
  purchase: {},
  error: {},
  tablestate: {
    SortColumnName: '',
    IsDescending: true,
    NumberOfRowSkip: 0,
    NumberOfPages: NUMBER_OF_PAGES,
    RowPerPage: ROW_PER_PAGE,
    SearchKeyword: ''
  },
  paginations: {
    currentPage: 1,
    pageLength: 1,
    rowsPerPage: ROW_PER_PAGE
  },
  supplier: [],
  supplier_id: {},
  paymentterm: [],
  warehouse: [],
  product: [],
  tax: [],
  modelState: {}
}
// getters
const getters = {
  getProjects: state => {},
  getPurchaseError: state => {
    return state.error
  },
  getSupllierOfPurchase: state => {
    return state.supllier
  },
  getPaymentTermOfPurchase: state => {
    return state.paymentterm
  },
  getWarehouseOfPurchase: state => {
    return state.warehouse
  }
}
// actions
const actions = {
  // action get Purchases
  [GET_PROJECTS] (context) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('http://backend-challange-telkom.herokuapp.com/api/projects')
        .then(result => {
          context.commit('SET_PROJECTS', { results: result.data })
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  }
  // action get  Purchase by ...
  // [GET_PURCHASE] (context, slug) {
  //   context.commit('CLEAR_ERROR')
  //   return new Promise((resolve, reject) => {
  //     ApiService.setHeader()
  //     ApiService.get('/api/purchase', slug)
  //       .then(result => {
  //         console.log(result, 'result purcahse')
  //         resolve(result)
  //         context.commit('SET_PURCHASE', result.data)
  //       })
  //       .catch(err => {
  //         reject(err)
  //         context.commit('SET_ERROR', { result: err.message })
  //       })
  //   })
  // }

}
// mutations
const mutations = {
  SET_PROJECTS (state, { results }) {
    state.purchases = results.data.filter(item => item.Type === 0)
    state.paginations.pageLength = results.numberOfPages
  },
  SET_SUPPLIER_ID (state, result) {
    console.log(result, 'aosenuth')
    state.supplier_id = result
  },
  SET_PURCHASE (state, result) {
    state.purchase = result
  },
  CLEAR_PURCHASE (state) {
    state.purchase = {}
  },
  UPDATE_PAGINATION (state, result) {
    let tmpPaging = {
      SortColumnName: result.sortBy,
      IsDescending: result.descending,
      NumberOfRowSkip: (result.page - 1) * NUMBER_OF_PAGES,
      NumberOfPages: NUMBER_OF_PAGES,
      RowPerPage: ROW_PER_PAGE
    }
    state.pagination = tmpPaging
  },
  SET_ERROR: (state, { result }) => {
    state.error = {
      status: true,
      type: 'error',
      message: result
    }
  },
  CLEAR_ERROR: state => {
    state.error = {
      status: false,
      type: 'error',
      message: ''
    }
  },
  ADD_PURCHASE (state, result) {
    state.purchases.push(result)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
