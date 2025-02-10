/**
 * axios
 * 1. 對應該 source 的 axios 設定，例如利用攔截器更改回傳的資料格式（response_wrapper）、統一例外的處理方法
 * 2. 封裝 http 方法
 */

import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export const cb_json_axios = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,
})

cb_json_axios.interceptors.response.use((res) => {
  return res
})
cb_json_axios.defaults.headers.get["Accept"] = "application/json"
cb_json_axios.defaults.headers.post["Content-Type"] = "application/json"
cb_json_axios.defaults.withCredentials = true
cb_json_axios.defaults.xsrfCookieName = "csrftoken"
cb_json_axios.defaults.xsrfHeaderName = "X-CSRFToken"
cb_json_axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
cb_json_axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("google_bearer_access_token")

const response_wrapper = (response: AxiosResponse) => {
  return {
    data: response.data?.data,
    message: response.data?.message,
    code: response.data?.code,
  }
}

// request 攔截器
cb_json_axios.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response 攔截器
cb_json_axios.interceptors.response.use(
  (response: AxiosResponse): any => {
    return response_wrapper(response)
  },
  (error) => {
    // 如果連不上後端，會直接拿到一個 AxiosError, 沒有帶 response 屬性
    if (error.response?.data?.code) {
      // 後端可處理, 但因某些原因回傳了錯誤訊息
      // 這種情形需由前端另行判斷決定處理方式
      return Promise.resolve(response_wrapper(error.response))
    } else {
      // 後端真的發生錯誤
      if (!window.navigator.onLine) {
        alert("Network problem...")
      }

      return Promise.reject(error)
    }
  }
)

// 封裝 http 方法
export const req = (method: string, url: string, data?: any): any => {
  method = method.toLowerCase()
  switch (method) {
    case "post":
      return cb_json_axios.post(url, data)
    case "get":
      return cb_json_axios.get(url, { params: data })
    case "delete":
      return cb_json_axios.delete(url, { data: data })
    case "put":
      return cb_json_axios.put(url, data)
    case "patch":
      return cb_json_axios.patch(url, data)
    default:
      console.log(`Unknown http method: ${method}`)
      return false
  }
}
