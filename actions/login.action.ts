export async function loginAction(state: unknown, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return {
        success: false,
        payload: await response.json()
      }
    }

    return {
      success: true,
      payload: await response.json()
    }
  } catch (error) {
    return {
      success: false,
      payload: { error: 'UNEXPECTED_ERROR' }
    }
  }


}