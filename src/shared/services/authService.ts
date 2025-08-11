import { writable } from "svelte/store";

const API_URL =  import.meta.env.VITE_API_URL;

interface userInfo {
  user: {
    id: string,
    name: string
    email: string,
  }
};

export const userStore = writable<userInfo | null>(null);

export async function verifyIsAuthenticated(): Promise<boolean> {
  try{
    const response = await fetch(`${API_URL}/users/me`, {
      credentials: 'include',
      method: 'GET'
    });

    if(response.ok){
      const userInfo: userInfo = await response.json(); 
      userStore.set(userInfo);
      localStorage.setItem('userId', userInfo.user.id);
    }

    return response.ok;
  }
  catch{
    return false;
  }
}

export async function getNewAcessToken(): Promise<boolean> {
  try{
    const userId = localStorage.getItem('userId');
    if(!userId)
      return false;

    const response = await fetch(`${API_URL}/users/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userId)
    });

    if(!response.ok)
      localStorage.removeItem('userId');
    
    return response.ok;
  }
  catch{
    console.error("Usuário não está logado");
    localStorage.removeItem('userId');
    
    return false;
  }
}