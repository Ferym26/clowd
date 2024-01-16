import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
	dect: {
		word: [],
	},
})
export const mutations = {
	...vuexfireMutations,
}

export const actions = {
	bindCountDocument: firestoreAction(async function ({ bindFirestoreRef }) {
		const ref = this.$fire.firestore
			.collection('master')
			.doc('dect')
		await bindFirestoreRef('dect', ref, { wait: true })
	}),
	unbindCountDocument: firestoreAction(function ({ unbindFirestoreRef }) {
		unbindFirestoreRef('dect', false)
	}),
}
export const getters = {
	word(state) {
		return state.dect.word
	},
}
