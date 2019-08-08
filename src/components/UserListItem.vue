<template>
  <div>
    <tr>
      <td>
        <RouterLink :to="'/user/' + user.id">{{ user.name }}</RouterLink>
      </td>
      <td>{{ user.username }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.website }}</td>
      <td>{{ counter }}</td>
    </tr>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {
    user: {
      required: true
    }
  },
  computed: {
    ...mapState(['counter', 'foo'])
  },
}
</script>