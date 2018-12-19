const getters = {
  token: state => state.user.token,
  authenticated: state => state.user.authenticated,
  user: state => state.user.user
}

export default getters
