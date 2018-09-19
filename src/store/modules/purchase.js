// store  Purchase or service  Purchase
import ApiService from '@/common/api.service'
import LsService from '@/common/ls.service'
import { ROW_PER_PAGE, NUMBER_OF_PAGES } from '@/common/config'
import {
  GET_STATE_PURCHASES,
  GET_PURCHASES,
  GET_PURCHASE,
  CREATE_PURCHASE,
  CREATE_APPROVE_PURCHASE,
  UPDATE_PURCHASE,
  DELETE_PURCHASE
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
  getPurchases: state => {},
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
  // get sorting purchase
  GET_SORTING_PURCHASES (context, params) {
    context.state.tablestate.SortColumnName = params.SortColumnName
    context.state.tablestate.IsDescending = params.IsDescending
    context.dispatch(GET_STATE_PURCHASES, context.state.tablestate)
  },
  // get pagination purchase
  GET_PAGINATION_PURCHASE (context, page) {
    let tmpNumberOfRowSkip =
      (page - 1) * context.state.tablestate.NumberOfPages
    context.state.tablestate.NumberOfRowSkip = tmpNumberOfRowSkip
    context.dispatch(GET_STATE_PURCHASES, context.state.tablestate)
    context.state.paginations.currentPage = page
  },
  // search table state
  GET_SEARCH_PURCHASES ({ commit, dispatch, state }, keyword) {
    state.tablestate.SearchKeyword = keyword
    state.tablestate.NumberOfRowSkip = 0
    dispatch(GET_STATE_PURCHASES)
  },
  // action get state Purchase
  [GET_STATE_PURCHASES] (context, params) {
    if (typeof params !== 'undefined') {
      context.state.tablestate = params
    }
    context.commit('CLEAR_PURCHASE')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.query('/api/purchase/state', {
        params: context.state.tablestate
      })
        .then(result => {
          context.commit('SET_PURCHASES', { results: result.data })
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // action get Purchases
  [GET_PURCHASES] (context) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/purchase/list')
        .then(result => {
          context.commit('SET_PURCHASES', { results: result.data })
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  },
  // action get  Purchase by ...
  [GET_PURCHASE] (context, slug) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/purchase', slug)
        .then(result => {
          console.log(result, 'result purcahse')
          resolve(result)
          context.commit('SET_PURCHASE', result.data)
        })
        .catch(err => {
          reject(err)
          context.commit('SET_ERROR', { result: err.message })
        })
    })
  },
  // action create Purchase
  [CREATE_PURCHASE] (context, formData) {
    console.log(formData, 'di purchase')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.post('/api/purchase', formData)
        .then(result => {
          context.commit('CLEAR_ERROR')
          context.commit('ADD_PURCHASE', result.data)
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  },
  // action create approve Purchase
  [CREATE_APPROVE_PURCHASE] (context, formData) {
    console.log(formData, 'test')
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.post('/api/purchase/ApprovePurchase', formData)
        .then(result => {
          context.commit('CLEAR_ERROR')
          context.commit('ADD_PURCHASE', result.data)
          resolve(result)
        })
        .catch(err => {
          context.commit('SET_ERROR', { result: err.message })
          reject(err)
        })
    })
  },
  // action update Purchase
  [UPDATE_PURCHASE] (context, datas) {
    context.commit('CLEAR_ERROR')
    // let id = context.state.purchase.Id
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.put('/api/purchase/' + datas.Id, datas)
        .then(result => {
          context.dispatch(GET_STATE_PURCHASES, context.state.tablestate)
          resolve(result)
        })
        .catch(err => {
          reject(err)
          context.commit('SET_ERROR', { result: err.message })
        })
    })
  },
  // action delete Purchase
  [DELETE_PURCHASE] (context, slug) {
    context.commit('CLEAR_ERROR')
    return new Promise((resolve, reject) => {
      ApiService.delete('/api/purchase/' + slug)
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err)
          context.commit('SET_ERROR', { result: err.message })
        })
    })
  },

  GET_SUPLLIER_OF_PURCHASE_BY_ID (context, slug) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/supplier', slug)
      .then((result) => {
        console.log(result.data, 'di supplier aeou')
        resolve(result)
        context.commit('SET_SUPPLIER_ID', result.data)
      }).catch((err) => {
        reject(err)
        context.commit('SET_ERROR', { result: err.message })
      })
    })
  },
  // get'+Supllier+'Of'+Purchase
  GET_SUPLLIER_OF_PURCHASE (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/supplier')
        .then(result => {
          this.state.supplier.suppliers = result.data
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  // get'+PaymentTerm+'Of'+Purchase
  GET_PAYMENTTERM_OF_PURCHASE (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/paymentterm')
        .then(result => {
          this.state.paymentterm.paymentterms = result.data
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  // get'+Warehouse+'Of'+Purchase
  GET_WAREHOUSE_OF_PURCHASE (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/warehouse')
        .then(result => {
          this.state.warehouse.warehouses = result.data
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  // get'+Warehouse+'Of'+Purchase
  GET_PRODUCT_OF_PURCHASE (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/product/purchase')
        .then(result => {
          this.state.product.products = result.data
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // get'+Warehouse+'Of'+Purchase
  GET_TAX_OF_PURCHASE (context, params) {
    return new Promise((resolve, reject) => {
      ApiService.setHeader()
      ApiService.get('/api/tax')
        .then(result => {
          this.state.tax.taxs = result.data
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
// mutations
const mutations = {
  SET_PURCHASES (state, { results }) {
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
