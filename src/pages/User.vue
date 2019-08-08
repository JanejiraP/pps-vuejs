<template>
  <div>
    <h1 class="title">User</h1>
    <button @click="getUsers()" class="button">Get Users</button>
    <!-- <p v-for="each in users" :key="each.id">{{ each.name }}</p> -->
    <table class="table">
      <!-- <tr>
        <th>Firstname</th>
        <th>Username</th> 
        <th>Email</th>
        <th>Website</th>
      </tr> -->
      <!-- <tr v-for="each in users" :key="each.id">
        <td>
          <RouterLink :to="'/user/' + each.id">{{ each.name }}</RouterLink>
        </td>
        <td>{{ each.username }}</td>
        <td>{{ each.email }}</td>
        <td>{{ each.address.street }}</td>
        <td>{{ each.address.suite }}</td>
        <td>{{ each.address.city }}</td>
        <td>{{ each.address.zipcode }}</td>
      </tr>  -->
      <UserListItem v-for="each in users" :key="each.id"  :user="each" />

    </table>
  </div>
</template>

<script>
import axios from 'axios'
import UserListItem from '@/components/UserListItem'

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUsers() {
      axios.get(url)
      .then(res => {
        this.users = res.data
      })
    }
  },
  components: {
    UserListItem
  }
}
</script>