export interface homeCardTypes {
    title: string;
    description: string;
    url: string;
}

export interface HomeCardGroupTypes {
    title: string;
    cards: homeCardTypes[];
}