const EMPLOYEE_PAGING = 'employee_paging'
const ACCOUNT_PAGING = 'account_paging'

export default {
  // pagination state employee
  getEmployeePaging () {
    return window.localStorage.getItem(EMPLOYEE_PAGING)
  },

  saveEmployeePaging (datas) {
    window.localStorage.setItem(EMPLOYEE_PAGING, datas)
  },

  destroyEmployeePaging () {
    window.localStorage.removeItem(EMPLOYEE_PAGING)
  },

  // pagination state account
  getAccountPaging () {
    return window.localStorage.getItem(ACCOUNT_PAGING)
  },

  saveAccountPaging (datas) {
    window.localStorage.setItem(ACCOUNT_PAGING, datas)
  },

  destroyAccountPaging () {
    window.localStorage.removeItem(ACCOUNT_PAGING)
  }
}
