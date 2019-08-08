<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">App</h1>
        <Navbar />
        <hr/>
        <RouterView />
      </div>
    </section>

  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'
import Navbar from '@/components/Navbar'
export default {
  components : {
    Navbar
  }
}
</script>
