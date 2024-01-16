<template lang="pug">
.redactor
	.container
		.redactor__header
			h1.redactor__title
		.redactor__body
			ul
				li {{ 123 }}

</template>

<script setup>
	const ref = this.$fire.firestore
		.collection('master')
		.doc('dect');

	const snapshot = await ref.get()
	const doc = snapshot.data();
	console.log(doc.word);
</script>


