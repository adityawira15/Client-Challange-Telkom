// store  Purchase or service  Purchase
import ApiService from '@/common/api.service'
import LsService from '@/common/ls.service'
import { ROW_PER_PAGE, NUMBER_OF_PAGES } from '@/common/config'
import {
  GET_PROJECTS,
  GET_PROJECT,
  GET_PRODUCTPERFOMANCES,
  GET_SQUADPERFOMANCES
} from '@/store/actions.type'
import { GET_MEMBER } from '../actions.type'

// initial state
const state = {
  projects: [],
  project: {},
  members: [],
  productperfomances: [],
  squadperfomances: [],
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

  [GET_PROJECTS] (context) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('http://backend-challange-telkom.herokuapp.com/api/projects')
        .then(result => {
          console.log(result, 'dari project')
          context.commit('SET_PROJECTS', { results: result.data })
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  },

  // action get Purchases
  [GET_PRODUCTPERFOMANCES] (context) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('http://backend-challange-telkom.herokuapp.com/api/productperformance')
        .then(result => {
          console.log(result, 'dari project')
          context.commit('SET_PRODUCTPERFOMANCES', { results: result.data })
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  },

  // action get Purchases
  [GET_SQUADPERFOMANCES] (context) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('http://backend-challange-telkom.herokuapp.com/api/squadperformance')
        .then(result => {
          console.log(result, 'dari project')
          context.commit('SET_SQUADPERFOMANCES', { results: result.data })
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  },

  [GET_PROJECT] (context, slug) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('http://backend-challange-telkom.herokuapp.com/api/projects', slug)
        .then(result => {
          console.log(result, 'result project')
          resolve(result)
          context.commit('SET_PROJECT', result.data.data)
        })
        .catch(err => {
          reject(err)
          context.commit('SET_ERROR', { result: err.message })
        })
    })
  },

  // action get  Purchase by ...
  [GET_MEMBER] (context) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('http://backend-challange-telkom.herokuapp.com/api/users')
        .then(result => {
          console.log(result.data, 'result membur')
          resolve(result)
          context.commit('SET_MEMBERS', { results: result.data })
        })
        .catch(err => {
          reject(err)
          context.commit('SET_ERROR', { result: err.message })
        })
    })
  }

}
// mutations
const mutations = {

  SET_MEMBERS (state, { results }) {
    console.log(results)
    state.members = results.data
    state.paginations.pageLength = results.numberOfPages
  },
  SET_PRODUCTPERFOMANCES (state, { results }) {
    console.log(results)
    state.productperfomances = results.data
    state.paginations.pageLength = results.numberOfPages
  },
  SET_SQUADPERFOMANCES (state, { results }) {
    console.log(results)
    state.squadperfomances = results.data
    state.paginations.pageLength = results.numberOfPages
  },
  SET_PROJECTS (state, { results }) {
    state.projects = results.data
    state.paginations.pageLength = results.numberOfPages
  },
  SET_SUPPLIER_ID (state, result) {
    console.log(result, 'aosenuth')
    state.supplier_id = result
  },
  SET_PROJECT (state, result) {
    state.project = result
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
