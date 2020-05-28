import Card from '../card';

const ID = 1;
const CLUE = 'I';
const ANSWER = 'eu';

describe('card', () => {
    it('has getters and setters', () => {
        const card = new Card({ id: ID, clue: CLUE, answer: ANSWER });

        expect(card.id()).toBe(1);
        expect(card.clue()).toBe(CLUE);
        expect(card.answer()).toBe(ANSWER);
    });
});
