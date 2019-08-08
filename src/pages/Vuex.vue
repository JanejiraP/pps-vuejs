<template>
  <div>
    <h1 class="title">VueX</h1>
    <pre>{{ $store.state.user.users }}</pre>
    <p>Count: {{ $store.getters.userCount }}</p>
    <button @click="$store.commit('customer/foo')" class="button">Foo</button>
  </div>
</template>

<script>

export default {

}
</script>