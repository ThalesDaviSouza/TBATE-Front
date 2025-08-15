import type { Handle } from "@sveltejs/kit";
import { handleAuth } from "./hooks/auth";

export const handle: Handle = async ({ event, resolve }) => {
  const respose = await handleAuth({ event, resolve });

  return respose;
}