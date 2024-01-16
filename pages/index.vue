<template lang="pug">
.main
	vue-word-cloud.dadada(
		:words="users"
		:rotation="7/8"
		font-family="Roboto"
	)
	.form
		input(v-model='input' type="text")
		button(@click="add()") Отправить
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			input: '',
			colors: ['#ffd077', '#3bc4c7', '#3a9eea'],
		}
	},
	async mounted() {
		await this.$store.dispatch('bindCountDocument')
	},
	computed: {
		...mapGetters(['word']),
		users() {
			return this.word.map(user => (
					{
						text: user,
						weight: this.randomInteger(2, 8),
						color: this.colors[this.randomInteger(0, 2)]
					}
				)
			);
		}
	},
	methods: {
		add() {
			const updatedArr = [...this.word]
			updatedArr.push(this.input)
			this.$fire.firestore
				.collection('master')
				.doc('dect')
				.update({ word: updatedArr })
		},
		randomInteger(min, max) {
			const rand = min + Math.random() * (max + 1 - min);
			return Math.floor(rand);
		},
	},
	unmounted() {
		this.$store.dispatch('unbindCountDocument')
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
	.form {
		position: absolute;
		display: flex;
		gap: 10px;
		top: 50px;
		left: 50px;
	}
</style>
