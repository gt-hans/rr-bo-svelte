import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
  const id = cookies.get('userid');
  const { email, password } = await request.json();
  const result = json({ success: true, email, id });
  console.log('api/authenticate', result);
  return json({ success: true, email, id }, { status: 201 });;
}
