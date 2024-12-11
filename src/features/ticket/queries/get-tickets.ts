import { prisma } from "@/lib/prisma";

export const getTickets = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return prisma.ticket.findMany({
    orderBy: {
      id: "asc",
    },
  });
};
