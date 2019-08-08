<template>
  <div>
    <h1 class="title">VueX</h1>
    <button @click="$store.dispatch('actionGetUsers')" class="button">Get User</button>
    <pre v-if="!$store.state.waiting">{{ $store.state.users }}</pre>
    <p v-else> Please Waiting..</p>
    <!-- <p>Counter: {{ $store.state.counter }}</p>
    <p>Double Counter: {{ $store.getters.doubleCounter }}</p>
    <p><button @click="mutateCounter(10)" class="button">Update</button></p>
    <p><button @click="$store.dispatch('actionCounter')" class="button">Update Mutation</button></p> -->
  </div>
</template>

<script>
// import axios from 'axios'
// const  url = 'https://jsonplaceholder.typicode.com/users'

export default {
  methods: {
    // getUsers() {
    //   axios.get(url).then(res => {
    //     this.store.commit('mutateUsers', res.data)
    //   })
    // }
    // async getUsers() {
    //   try {
    //     const res = await axios.get(url)
    //     this.$store.commit('mutateUsers', res.data)
    //   } catch(err) {
    //     this.$store.commit('mutateUsers', [])
    //   }
    // }
    // updateCounter() {
    //   this.$store.commit('mutateCounter', param)
    // }
    // ...mapMutations(['mutateCounter'])
  }
}
</script>