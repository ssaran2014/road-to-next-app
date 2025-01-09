import { getAuth } from "@/features/auth/queries/get-auth";
import { signInPath } from "@/paths";
import { redirect } from "next/navigation";

export const getAuthorRedirect = async () => {
  const auth = await getAuth();

  if (!auth.user) {
    redirect(signInPath());
  }
  return auth;
};
