const user = {
  state: {
    users: [1, 2, 3, 4]
  },
  getters: {
    userCount(state) {
      return state.users.lenght
    }
  },
  mutations: {
    foo(state) { // call >> 'foo'
      console.log('user: foo()', state)
    }
  }
}

export default user