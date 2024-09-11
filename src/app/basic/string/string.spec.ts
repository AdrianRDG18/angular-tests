import { message } from "./string";

describe('String tests', () =>{
    // To evaluate if the resp is a specific string
    it('Should return a string', () => {
        const resp = message('Adrian Rojas');
        expect(typeof resp).toBe('string');
    });
    // To evaluate if the resp contain the name 'Juan'
    it('Should contain Juan name', () =>{
        const name = 'Juan';
        const resp = message(name);
        expect(resp).toContain(name);
    });
});