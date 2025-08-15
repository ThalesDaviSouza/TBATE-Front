import type { RequestEvent } from "@sveltejs/kit";
import { getNewAcessToken, verifyIsAuthenticated } from "../services/authService";

export async function tryAuthenticatedUser(event: RequestEvent): Promise<boolean> {
  console.log('cookies: ', event.cookies.getAll());
  
  let authenticated: boolean = await verifyIsAuthenticated(event);
  
  if(!authenticated) 
    authenticated = await getNewAcessToken(event);
  
  return authenticated;
}