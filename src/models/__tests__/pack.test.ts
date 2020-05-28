import Pack from '../pack';

const ID = 'A';
const NAME = 'Pack A';
const cards = [
    { id: 1, clue: 'a', answer: 'x' },
    { id: 2, clue: 'b', answer: 'y' },
    { id: 3, clue: 'c', answer: 'z' },
];

const LEN = cards.length;

describe('card', () => {
    it('has getters', () => {
        const pack = new Pack({ id: ID, name: NAME, cards });

        expect(pack.id()).toBe(ID);
        expect(pack.name()).toBe(NAME);
        expect(pack.cards().length).toBe(LEN);
    });

    it('has setters', () => {
        const pack = new Pack({ id: ID, name: NAME, cards });
        const mockCards = [{ id: 0, clue: 'none', answer: 'forget it' }];

        expect(pack.id('TEST')).toBe('TEST');
        expect(pack.name('PACK TEST')).toBe('PACK TEST');
        expect(pack.cards(mockCards)).toStrictEqual(mockCards);
    });
});
