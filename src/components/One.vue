<template>
  <div class="box">
      <h1 class="title">One: {{doubleCounter}}</h1>
      <Two :foo="doubleCounter" />
      <!-- <Two :foo="'Hello'" /> -->
  </div>
</template>

<script>
import Two from '@/components/Two'
export default {
  components: {
    Two
  },
  props: [
    'doubleCounter'
  ]  
}
</script>