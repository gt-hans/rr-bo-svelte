import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
  let id = cookies.get('userid');

  if (!id) {
    id = crypto.randomUUID();
    cookies.set('userid', id, { path: '/' });
  }
  const { email, password } = await request.json();
  const result = json({ success: true, email, id, countdown: 60 });
  console.log('api/send-code', result);
  return new Promise(resolve => setTimeout(() => {
    resolve(result);
  }, 2000));
}
