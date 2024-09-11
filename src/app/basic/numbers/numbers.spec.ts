import { increaser } from "./numbers";

describe('Numbers test', () =>{
    it('Should return 100, if the number sended is > 100', ()=>{
        const resp = increaser(300);
        expect(resp).toBe(100);
    });
    it('Should return the number sended +1 if the number sended is <100', () =>{
        const resp = increaser(98);
        expect(resp).toBe(99);
    });
});