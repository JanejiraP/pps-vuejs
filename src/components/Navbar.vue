<template>
  <div>
    <h1 class="title">Navbar</h1>
      <RouterLink to="/">One</RouterLink>
    {{'|'}}
      <RouterLink to="/about">Two</RouterLink>
    {{'|'}}
      <RouterLink to="/user">User</RouterLink>
    {{'|'}}
      <RouterLink to="/form">Preson Form</RouterLink>
    {{'|'}}
      <RouterLink to="/nested">Nested</RouterLink>
    {{'|'}}
      <RouterLink to="/vuex">Vuex</RouterLink>
    {{'|'}}
      <RouterLink to="/chart">Chart</RouterLink>
  </div>
</template>

<script>
export default {
}
</script>
