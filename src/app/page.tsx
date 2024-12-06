import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-lg">
        Home Page
      </h1>
      This is the home page of the app.
      <br />
      <Link href={ticketsPath()} className="underline text-blue-500">
        Go to Tickets
      </Link>
    </div>
  );
};

export default HomePage;