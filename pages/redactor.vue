<template lang="pug">
.redactor
	.container
		.redactor__header
			h1.redactor__title
		.redactor__body
			p {{ word }}

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

	async mounted() {
		await this.$store.dispatch('bindCountDocument')
	},

	unmounted() {
		this.$store.dispatch('unbindCountDocument')
	}
}
</script>
