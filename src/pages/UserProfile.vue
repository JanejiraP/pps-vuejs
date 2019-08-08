<template>
  <div>
    <h1 class="title">User Profile {{ $route.params.id }}</h1>
    <pre>{{ user }}</pre>pre>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/users'

export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUser(id) {
      axios.get(url + '/' + id)
        .then(res =>{
          this.user = res.data
        })
    }
  },
  mounted() {
    this.getUser(this.$route.params.id)
  }
}
</script>