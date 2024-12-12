"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ticketsPath } from "@/paths";
import { redirect } from "next/navigation";

export const upsertTicket = async (
  id: string | undefined,
  formData: FormData
) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  };

  await prisma.ticket.upsert({
    where: { id: id || "" },
    update: data,
    create: data,
  });

  revalidatePath(ticketsPath());

  if (id) {
    redirect(ticketsPath());
  }
};
