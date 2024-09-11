import { returnRobot } from "./arrays";

describe('Arrays test', ()=>{
    it('The array should contain 3 or more elements', ()=>{
        const resp = returnRobot();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });
    it('The array should contain Megaman and Jarvis', ()=>{
        const resp = returnRobot();
        expect(resp).toContain('Megaman');
        expect(resp).toContain('Jarvis');
    });
});