/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, locals, params }) {
  console.log('login2/+page.server.js load', cookies, locals, params);
}

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ request }) => {
    // TODO log the user in
    console.log('login2/+page.server.js - action: login');
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    return { success: true, email, password};
  }
};
