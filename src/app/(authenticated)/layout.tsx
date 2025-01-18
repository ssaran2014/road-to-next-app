import { getAuthorRedirect } from "@/features/auth/queries/get-auth-or-redirect";

export default async function AuthenticatedLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    await getAuthorRedirect();

    return (
        <>
        {children}
        </>
  );
}