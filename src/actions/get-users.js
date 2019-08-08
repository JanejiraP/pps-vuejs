import axios from 'axios'
const  url = 'https://jsonplaceholder.typicode.com/users'

const actionGetUsers = async (context) => {
  try {
    context.commit('mutateWaiting', true)
    const res = await axios.get(url)
    context.commit('mutateUsers', res.data)
    context.commit('mutateWaiting', false)
  } catch(err) {
    context.commit('mutateUsers', [])
    context.commit('mutateWaiting', false)
  }
}

export {actionGetUsers}