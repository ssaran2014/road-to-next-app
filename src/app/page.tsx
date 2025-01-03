import Link from 'next/link';

import { Heading } from '@/components/heading';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div>
      <Heading 
        title="Home" 
        description="Your home page to start."
      />
      <Link href={ticketsPath()} className="underline text-blue-500">
        Go to Tickets
      </Link>
    </div>
  );
};

export default HomePage;