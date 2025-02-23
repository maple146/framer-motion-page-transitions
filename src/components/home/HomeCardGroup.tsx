import { HomeCardGroupTypes } from '@/types/homeCardsGridTypes';
import { HomeCard } from './HomeCard';

const HomeCardGroup = ({ title, cards }: HomeCardGroupTypes) => {
  return (
    <section className='container grid auto-cols-[minmax(0,_2fr)] gap-4 items-center justify-center'>
      <h2 className='col-span-3 text-center text-white text-4xl'>{title}</h2>
      {cards.map((card: any, index: any) => (
        <HomeCard key={`${card.title}-${index}`} {...card} />
      ))}
    </section>
  );
};

export default HomeCardGroup;
