import { HomeCard } from "@/components/home/HomeCard";

const HomeCardsGrid = ({ title, cards }) => {
    return (
        <section className="container grid auto-cols-[minmax(0,_2fr)] gap-4 items-center justify-center">
            <h3 className="col-span-3 text-center text-white text-4xl">{title}</h3>
            {
                cards.map((card) => (
                    <HomeCard
                        key={card.title}
                        title={card.title}
                        url={card.url}
                    />
                ))
            }
        </section>
    );
}

export default HomeCardsGrid;