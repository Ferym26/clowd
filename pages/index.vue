<template lang="pug">
.same
	p(v-for="(user, index) in users" :key="index") {{ user.name }}
</template>

<script>
export default {
	data() {
		return {
			users: [],
		}
	},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => this.users = json)
		},
	}
}
</script>
