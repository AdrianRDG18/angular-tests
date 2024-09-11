import { userLogin, userNoLogin } from "./booleans";

describe('Booleans tests', () =>{
    it('Should return true', ()=>{
        const resp = userLogin();
        expect(resp).toBeTruthy();
    });
    it('Should return false', ()=>{
        const resp = userNoLogin();
        expect(resp).not.toBeTruthy();
        // expect(resp).toBeFalsy();
    });
});