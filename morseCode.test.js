import { findMorse, findLetter } from './morseCode.js'

describe('findLetter function', (data) => {


    it('should return the Morse code for a given letter', () => {
        expect(findLetter('A', data)).toBe('.-');
        expect(findLetter('B', data)).toBe('-...');
        expect(findLetter('Z', data)).toBe('--..');
    });

    it('should return "/" for non-existent letters', () => {
        expect(findLetter('1', data)).toBe('/');
        expect(findLetter('!', data)).toBe('/');
    });


    it('should handle empty input', () => {
        expect(findLetter()).toBe('/');
    });
});

describe('findMorse function', (morseReverseKeysData) => {


    it('should return letters for a given Morse code', () => {
        expect(findMorse('.-', morseReverseKeysData)).toBe('A');
        expect(findMorse('-... ... -..', morseReverseKeysData)).toBe('BSD');
        expect(findMorse('--. . -.--', morseReverseKeysData)).toBe('GEY');
    });

    it('should handle empty input', () => {
        expect(findMorse('', morseReverseKeysData)).toBe('');
    });

});