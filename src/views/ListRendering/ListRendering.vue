<script setup lang="ts">
import { ref, computed } from 'vue';
import { type TodoItem, Filter } from './types'

const newName= ref<string>('');
const filter = ref<Filter>(Filter.All);
const list = ref<TodoItem[]>([
	{
		name: 'Купить молоко',
		active: false
	},
	{
		name: 'Помыть полы',
		active: true
	},
	{
		name: 'Приготовить ужин',
		active: true
	},
]);

function removeItem(item: TodoItem) {
	list.value = list.value.filter(todo => todo !== item);
}
function toggleItem(item: TodoItem) {
	item.active = !item.active;
}
function addItem() {
	if (newName.value) {
		list.value = [
			...list.value,
			{
				name: newName.value,
				active: true
			}
		];
		newName.value = '';
	}
}
function todoClasses(item: TodoItem) {
	return {
		'inactive': !item.active
	};
}
function btnClasses(btnFilter: Filter) {
	return {
		'active-filter': btnFilter === filter.value
	};
}
function setFilter(newFilter: Filter) {
	filter.value = newFilter;
}

const filteredList = computed(() => {
	switch (filter.value) {
		case Filter.All:
			return list.value;
		case Filter.Active:
			return list.value.filter(item => item.active);
		case Filter.Inactive:
			return list.value.filter(item => !item.active);
	}
});

</script>

<template>
  <div class="content">
		<div class="todo-list">
			<h1 class="header">TODO</h1>
			<form @submit.prevent="addItem">
				<input v-model="newName" type="text">
				<button>Добавить</button>
			</form>
			<div class="todo-filter">
				<button
					@click="setFilter(Filter.All)"
					:class="btnClasses(Filter.All)"
				>
					Все
				</button>
				<button
					@click="setFilter(Filter.Active)"
					:class="btnClasses(Filter.Active)"
				>
					Несделанные
				</button>
				<button
					@click="setFilter(Filter.Inactive)"
					:class="btnClasses(Filter.Inactive)"
				>
					Сделанные
				</button>
			</div>
			<div
				v-for="item in filteredList"
				:key="item.name"
				class="todo-item"
				@click="toggleItem(item)"
			>
				<div
					:class="todoClasses(item)"
				>
					{{ item.name }}
				</div>
				<button @click="removeItem(item)">╳</button>
			</div>
		</div>
  </div>
</template>

<style scoped>
.todo-list {
	margin: 80px auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 265px;
}

.todo-filter {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 12px;
}

.active-filter {
	color: white;
	background-color: rgb(172, 182, 153);
}

.todo-item {
	display: flex;
	justify-content: space-between;
	padding: 10px;
	margin-top: 12px;
	background-color: white;
	word-break: break-all;
	width: 100%;
	
}

.todo-item button {
	width: 32px;
	height: 32px;
	margin-left: 8px;
	flex-shrink: 0;
	font-size: 8px;
	color: white;
	background-color: rgb(191, 87, 87);
}

.inactive {
	text-decoration: line-through;
}
</style>