<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
    firstName: '',
    lastName: '',
    patronymic: '',
    age: null,
})

</script>

<template>
  <div class="content">
    <div class="list form">
        <label>Фамилия</label>
        <input type="text" v-model="form.lastName">
        <label>Имя</label>
        <input type="text" v-model="form.firstName">
        <label>Отчество</label>
        <input type="text" v-model="form.patronymic">
        <label>Возраст</label>
        <input type="number" v-model="form.age">
    </div>
    <div class="list report">
        <p>
            <span>Фамилия:</span>
            <span>{{ form.lastName }}</span>
        </p>
        <p>
            <span>Имя:</span>
            <span>{{ form.firstName }}</span>
        </p>
        <p>
            <span>Отчество:</span>
            <span>{{ form.patronymic }}</span>            
        </p>
        <p>
            <span>Возраст:</span>
            <span>{{ form.age }}</span>
        </p>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  gap: 60px;
}

.list {
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    padding: 26px;
    width: 320px;
}

.form input {
    margin-block: 10px;
}

.report {
    color: rgb(107, 107, 107);
}

.report p {
    margin: 0px;
    padding-block: 20px;
    display: flex;
    border-bottom: 1px solid #aaa;
}
.report span {
    word-break: break-all;
    width: 50%;
} 
</style>