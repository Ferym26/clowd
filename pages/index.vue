<template lang="pug">
.same
	vue-word-cloud.dadada(
		:words="users"
		:rotation="7/8"
		font-family="Roboto"
	)
</template>

<script>
export default {
	data() {
		return {
			users: [],
			colors: ['#ffd077', '#3bc4c7', '#3a9eea'],
		}
	},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => {
					this.users = json.map(user => (
							{
								text: user.name,
								weight: this.randomInteger(2, 8),
								color: this.colors[this.randomInteger(0, 2)]
							}
						)
					);
				})
		},
		randomInteger(min, max) {
			const rand = min + Math.random() * (max + 1 - min);
			return Math.floor(rand);
		}
	}
}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.dadada {
		width: 100vw !important;
		height: 100vh !important;
		overflow: hidden;
	}
</style>
