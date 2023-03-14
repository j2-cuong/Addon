
const authUtils = {
  isAuthenticated: () => {
    const token = localStorage.getItem('token')
    return token
  },
  isLogout: () => {
    localStorage.clear()
    sessionStorage.clear()
  },
}

export default authUtils