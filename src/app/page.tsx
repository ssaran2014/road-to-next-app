import { Heading } from '@/components/heading';
import { Suspense } from 'react';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { Spinner } from '@/components/spinner';
import { getAuth } from '@/features/auth/queries/get-auth';

const HomePage = async () => {
  const { user } = await getAuth();

  return (
    <div className='flex-1 flex flex-col gap-y-8'>
      <Heading 
        title="All Tickets" 
        description="Tickets by everyone in one place."
      />
      <Suspense fallback={<Spinner />}>
        <TicketList userId={user?.id}/>
      </Suspense>
    </div>
  );
};

export default HomePage;