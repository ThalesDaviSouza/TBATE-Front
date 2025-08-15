import { redirect, type Handle  } from "@sveltejs/kit";
import { tryAuthenticatedUser } from "../shared/facade/authFacade";

const publicRoutes = new Set(['/login', '/']);

export const handleAuth: Handle = async ({ event, resolve }) => {
  if(publicRoutes.has(event.url.pathname))
    return await resolve(event);

  let authenticated: boolean = await tryAuthenticatedUser(event);

  if(!authenticated && !publicRoutes.has(event.url.pathname))
    throw redirect(303, '/login');

  const response = await resolve(event);
	return response;
}