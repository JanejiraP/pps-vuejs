<template>
  <div class="box">
    <h3 class="title">Three {{now}}</h3>
    <slot :now="now">Default Content</slot>
    
  </div>
</template>

<script>

export default {
  computed: {
    now() {
      return new Date()
    }
  },
}
</script>