const API_URL =  import.meta.env.VITE_API_URL;

export async function get(partialUrl: string): Promise<Response> {
  return await fetch(`${API_URL}${partialUrl}`, {
    method: 'GET'
  });
}

export async function getAuthorized(partialUrl: string): Promise<Response> {
  return await fetch(`${API_URL}${partialUrl}`, {
    credentials: 'include',
    method: 'GET'
  });
}


export async function post(partialUrl: string, jsonBody: string): Promise<Response> {
  return await fetch(`${API_URL}${partialUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonBody
  });
}

export async function postAuthorized(partialUrl: string, jsonBody: string): Promise<Response> {
  return await fetch(`${API_URL}${partialUrl}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonBody
  });
}

