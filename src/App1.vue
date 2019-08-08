<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>App</h1>
        <button @click="counter+=1" :class="className">Update</button>
        <p :style="style">Counter: {{ counter }}</p>
        <p>Setting</p>
        <hr>
        <One />
      </div>
    </section>

  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import One from '@/components/One'
export default {
  components: {
    One
  },
  data() {
    return {
      counter: 1
    }
  },
  computed: {
    className() {
      return this.counter % 2 ? 'button is-primary' : 'button is-danger'
    },
    style() {
      return this.counter % 2 ? { fontWeight: 'bold', color: 'red' } : { fontWeight: 'bold', color: 'blue' }
    }
  },
}
</script>

<style scoped>
p {
  color: green
}
</style>
