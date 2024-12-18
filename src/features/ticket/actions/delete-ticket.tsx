"use server";

import { setCookieByKey } from "@/actions/cookies";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { redirect } from "next/navigation";

export const deleteTicket = async (id: string) => {
    await prisma.ticket.delete({
        where: {
        id: id,
        },
    });
    setCookieByKey("toast", "Ticket deleted");
    redirect(ticketsPath());
};