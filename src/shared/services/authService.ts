import { getAuthorized } from "./handleRequestService";
import { post } from "./requestBaseService";
import type { RequestEvent } from "@sveltejs/kit";

interface userInfo {
  user: {
    id: string,
    name: string
    email: string,
  }
};

export async function verifyIsAuthenticated(event: RequestEvent): Promise<boolean> {
  try{
    const token = event.cookies.get('token');
    
    if(!token)
      return false;

    const response = await getAuthorized('/users/me', token);

    if(response.ok){
      const userInfo: userInfo = await response.json(); 

      event.cookies.set('userId', userInfo.user.id, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: true,
        maxAge: 60 * 10 // 10 min
      });
    }

    return response.ok;
  }
  catch{
    return false;
  }
}

export async function getNewAcessToken(event: RequestEvent): Promise<boolean> {
  try{
    const userId = event.cookies.get('userId');

    if(!userId)
      return false;

    const response = await post('/users/refresh', JSON.stringify(userId));

    if(!response.ok){
      event.cookies.delete('userId', { path: '/' });
      return response.ok;
    }

    const body = await response.json();

    event.cookies.set('token', body.token, {
       httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: true,
        maxAge: 60 * 10 // 10 min
    })
    
    return response.ok;
  }
  catch{
    event.cookies.delete('userId', { path: '/' });
    return false;
  }
}