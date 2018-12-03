<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li
        v-for="(user, key) in users"
        :key="key"
      >{{ user.name }}: {{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ res }) {
    return {
      users: res.context.users
    }
  }
}
</script>
