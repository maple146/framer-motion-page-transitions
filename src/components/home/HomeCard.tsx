import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { homeCardTypes } from '@/types/homeCardsGridTypes';
import Link from 'next/link';

export function HomeCard({ title, description, url }: homeCardTypes) {
  return (
    <Link href={url}>
      <Card className='bg-verdigris border-light-yellow'>
        <CardHeader>
          <CardTitle className='text-center text-light-yellow'>
            {title}
          </CardTitle>
          <CardDescription className='text-center text-light-yellow'>
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
