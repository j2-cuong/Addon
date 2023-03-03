import axiosClient from "./axiosClient"

const authApi = {
  signup: params => axiosClient.post('auth/signup', params),
  login: params => axiosClient.post('Login/Login', params),
}

export default authApi