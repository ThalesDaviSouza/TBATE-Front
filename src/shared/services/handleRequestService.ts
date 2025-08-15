const API_URL =  import.meta.env.VITE_API_URL;

export async function getAuthorized(partialUrl: string, acessToken: string): Promise<Response> {
  return await fetch(`${API_URL}${partialUrl}`, {
    method: 'GET',
    headers: {
      'Cookie': `token=${acessToken}`
    }
  });
}
