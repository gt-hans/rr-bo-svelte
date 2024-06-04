import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, locals, params }) {
  console.log('login2/+page.server.js load', cookies, locals, params);
  let id = cookies.get('userid');

  if (!id) {
    id = crypto.randomUUID();
    cookies.set('userid', id, { path: '/' });
    return {
      id
    };
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    // TODO log the user in
    const id = cookies.get('userid');
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const result = { success: true, email, id };
    console.log('login2/+page.server.js - action: login', result);
    // return result;
    // Delay the response by 1 second
    return new Promise(resolve => setTimeout(() => {
      resolve(result);
    }, 2000));
  }
};
