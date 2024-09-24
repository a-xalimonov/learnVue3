<script setup lang="ts">
import { ref } from 'vue';
import Card from '../../components/Card/Card.vue';
import type { User } from './types'

const users = ref<User[]>([]);

getUsers();

function handeleDelete(userId: number) {
  users.value = users.value.filter((user) => 
    user.id !== userId
  )
}

function getUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      users.value = json;
    })
}

</script>

<template>
  <div class="content">
			<Card
        v-for="user in users"
        :title="user.username"
        @delete="handeleDelete(user.id)"
      >
				<div>Имя: {{ user.name }}</div>
				<div>Почта: {{ user.email }}</div>
        <div>Телефон: {{ user.phone }}</div>
        <div>Сайт: {{ user.website }}</div>
			</Card>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px;
}
</style>