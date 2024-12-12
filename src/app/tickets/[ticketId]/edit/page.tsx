import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
import { CardCompact } from "@/components/card-compact";
import { TicketUpdateForm } from "@/features/ticket/components/ticket-update-form";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <CardCompact
        title = "Edit Ticket"
        description="Edit an existing ticket"
        content = {<TicketUpdateForm ticket={ticket} />}
        className="w-full max-w-[420px] animate-fade-from-top"
      />
    </div>
  );
};

export default TicketEditPage;