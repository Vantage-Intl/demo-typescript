// Card class
export type CardData = {
    id: number;
    clue: string;
    answer: string;
};

class Card {
    // instance variables
    _id: number;
    _clue: string;
    _answer: string;

    constructor({ id, clue, answer }: CardData) {
        this._id = id;
        this._clue = clue;
        this._answer = answer;
    }

    id(): number {
        return this._id;
    }

    clue(): string {
        return this._clue;
    }

    answer(): string {
        return this._answer;
    }
}

export default Card;
