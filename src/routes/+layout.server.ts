import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ locals, cookies, route }) => {
	if (!locals.user) {
		if (route.id !== '/login' && route.id !== '/login2' && route.id !== '/login3') {
			redirect(307, '/login');
		}
		return {
			login: {
				result: false,
				route: route.id
			}
		};
	}
};


