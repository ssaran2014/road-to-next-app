import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { cache } from "react";

export const getAuth = cache(async () => {
  const sessionId =
    (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  //check if the session is valid
  const result = await lucia.validateSession(sessionId);

  //try blocks not allowed in server component
  //in this construct, allowed to do write operations in server actions
  //but not allowed to do write operations in react server components
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {
    //do nothing if used in a RSC
  }
  return result;
});
