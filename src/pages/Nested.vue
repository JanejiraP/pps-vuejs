<template>
  <div >
    <h1 class="title">Nested: {{counter}}</h1>
    <p>
      <button @click="counter+=1" class="button is-info">Update</button>
    </p>
    <One  :doubleCounter="counter*2" />
    <three v-slot="xxx">
      <p>Current Time: {{xxx.now}}</p>
    </three>
  </div>
</template>

<script>
import One from '@/components/One'
import Three from '@/components/Three'
export default {
  components: {
    One,
    Three
  },
  data() {
    return {
      counter: 1
    }
  },
  watch: {
    counter() {
      console.log('OK')
    }
  },
}
</script>