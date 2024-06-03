/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		// TODO log the user in
		// how to add a server log?
		console.log('Logged in');
		return {
			status: 200,
			body: 'Logged in',
		};
	}
};
