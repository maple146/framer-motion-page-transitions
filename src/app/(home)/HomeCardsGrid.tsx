import { HomeCard } from "@/components/HomeCard";

const HomeCardsGrid = ({ title, cards }) => {
    return (
        <section className="container grid grid-cols-3 gap-4 items-center justify-center">
            <h3 className="col-span-3 text-center text-white text-4xl">{title}</h3>
            {
                cards.map((card) => (
                    <HomeCard key={card.title} title={card.title} />
                ))
            }
        </section>
    );
}

export default HomeCardsGrid;