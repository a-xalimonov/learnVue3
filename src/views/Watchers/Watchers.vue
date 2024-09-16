<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { onMounted } from 'vue';
import type { Post, Comment } from './types'

const postId = ref(0);
const post = ref<Post | null>(null);
const comments = ref<Comment[]>([]);

onMounted(() => {
	postId.value = 1;
});

function getPost(postId: number) {
	const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
	fetch(url)
		.then((resp) =>{
			if (resp.ok) {
				return resp.json()
			} else {
				post.value = null;
			}
		})
		.then((json) => {
			post.value = json;
		});
}
function getComments(postId: number) {
	const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
	fetch(url)
		.then((resp) =>
			resp.json()
		)
		.then((json) => {
			comments.value = json;
		});
}
function nextPost() {
	postId.value++;
}
function previousPost() {
	postId.value--;
}

const firstPost = computed(() => {
	return postId.value === 1;
})

watch(postId, (newId) => {
	getPost(newId);
})
watch(post, (newPost) => {
	comments.value = [];
	if (newPost) {
		getComments(newPost.id);
	}
})
</script>

<template>
  <div class="content">
		<div class="nav">
			<button @click="previousPost" :disabled="firstPost">Прошлый пост</button>
			{{ postId }}
			<button @click="nextPost">Следующий пост</button>
		</div>
		<div v-if="post">
			<div class="post">
				<h1>{{ post.title }}</h1>
				<p>{{ post.body }}</p>
			</div>
			<h2>Комментарии</h2>
			<div
				v-for="comment in comments"
				:key="comment.id"
				class="comment"
			>
				<h3>{{ comment.name }}</h3>
				<p class="email">{{ comment.email }}</p>
				<p>{{ comment.body }}</p>
			</div>
		</div>
		<h1 v-else>Пост с выбранным Id не найден</h1>
  </div>
</template>

<style scoped>
.content {
	padding: 20px;
}

.nav {
	display: flex;
	align-items: center;
	gap: 12px;
}

.post {
	background-color: white;
	padding: 24px;
	margin-bottom: 16px;
}

.comment {
	background-color: white;
	padding: 12px;
	margin-top: 16px;
	width: 60%;
}

.email {
	color: rgb(168, 168, 168);
}

h1, h2, h3, h4, p {
	font-weight: normal;
	margin: 0px;
}
</style>