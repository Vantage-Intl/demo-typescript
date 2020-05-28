import { CardData } from './card';

export type PackData = {
    id: string;
    name: string;
    cards: CardData[];
};

class Pack {
    _id: string;
    _name: string;
    _cards: CardData[];

    constructor({ id, name, cards }: PackData) {
        this._id = id;
        this._name = name;
        this._cards = cards;
    }

    id(id?: string): string {
        if (id) {
            this._id = id;
        }

        return this._id;
    }

    name(name?: string): string {
        if (name) {
            this._name = name;
        }

        return this._name;
    }

    cards(cards?: CardData[]): CardData[] {
        if (cards) {
            this._cards = cards;
        }

        return this._cards;
    }
}

export default Pack;
