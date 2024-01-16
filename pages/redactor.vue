<template lang="pug">
.redactor
	.container
		.redactor__header
			h1.redactor__title
		.redactor__body
			.redactor-item(v-for="el in word")
				span {{ el }}
				button(@click="removeWord(el)") X

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'RedactorPage',

	head() {
		return {
			title: 'Redactor',
		}
	},

	data: () => ({
		elements: []
	}),

	computed: {
		...mapGetters(['word']),
	},

	methods: {
		removeWord(el) {
			const edited = this.word.filter(item => item !== el);
			this.$fire.firestore
				.collection('master')
				.doc('dect')
				.update({ word: edited })
		},
	},

	async mounted() {
		await this.$store.dispatch('bindCountDocument')
	},

	unmounted() {
		this.$store.dispatch('unbindCountDocument')
	}
}
</script>

<style>
	.redactor-item {
		display: flex;
		align-items: center;
		gap: 20px;
	}
</style>
