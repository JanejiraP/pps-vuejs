<template>
  <div class="box">
    <h3 class="title">Two: {{foo}}</h3>
    <!-- <Three /> -->
  </div>
</template>

<script>
import Three from '@/components/Three'

export default {
  components: {
    Three
  },
  props: {
    // foo: {
    //   defult: 20
    // }
    foo: {
      required: true,
      type: Number
    }
  }
}
</script>