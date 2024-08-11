import { HomeCard } from "@/components/home/HomeCard";
import { homeCardsGridTypes } from "@/types/homeCardsGridTypes";

const HomeCardsGrid = ({ title, cards }: homeCardsGridTypes) => {
    return (
        <section className="container grid auto-cols-[minmax(0,_2fr)] gap-4 items-center justify-center">
            <h3 className="col-span-3 text-center text-white text-4xl">{title}</h3>
            {
                cards.map((props) => (
                    <HomeCard
                        key={props.title}
                        {...props}
                    />
                ))
            }
        </section>
    );
}

export default HomeCardsGrid;