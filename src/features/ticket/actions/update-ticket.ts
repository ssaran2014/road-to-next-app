"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ticketsPath } from "@/paths";
import { redirect } from "next/navigation";

export const updateTicket = async (id: string, formData: FormData) => {
  const data = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await prisma.ticket.update({
    where: { id },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
