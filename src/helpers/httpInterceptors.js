import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'http://localhost:7977/api/employees',
//   timeout: 10000,
//   params: {} // do not remove this, its added to add params later in the config
// })

// instance.interceptors.request.use(function (config) {
//   // alert('test')
//   config.headers.authorization = mytoken.access_token
//   return config
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error)
// })

// export default instance

const instance = axios.interceptors.request.use(function (config) {
  // const token = cookie.get(__TOKEN_KEY__)
  let token = window.localStorage.getItem('mytoken')
  const mytoken = JSON.parse(token)

  if (token != null) {
    config.headers.Authorization = `Bearer ${mytoken.access_token}`
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

export default instance
