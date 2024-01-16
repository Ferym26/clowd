<template lang="pug">
.redactor
	.container
		.redactor__header
			h1.redactor__title
		.redactor__body
			ul
				li(v-for="el in elements") {{ el.word }}

</template>

<script>
export default {
	name: 'RedactorPage',

	head() {
		return {
			title: 'Redactor',
			destroySync: null,
		}
	},

	data: () => ({
		elements: []
	}),

	async mounted() {
		const collection = this.$fire.firestore
			.collection('master')

		const ref = collection
			.doc('dect');

		this.destroySync = collection.onSnapshot((query) => {
			query.forEach((doc) => {
				this.elements = []
				this.elements.push(doc.data())
			})
		})

		const snapshot = await ref.get()
		const doc = snapshot.data();
	},

	unmounted() {
		this.destroySync && this.destroySync()
	}
}
</script>
