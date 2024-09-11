import { Player } from "./class";

describe('Classes test', () => {

    let player = new Player();

    // Life cycles-------------------------------------

    // This cycle just run 1 time before all tests
    // beforeAll();

    // This cycle run before each test(At the begin of each test)
    // beforeEach();

    // This cycle run after all tests
    // afterAll();

    // This cycle run after each test(At the end of each test)
    // afterEach();

    // Life cycles-------------------------------------

    beforeEach(()=>{
        player = new Player();
    })

    it('If the damage is 20, the hp should be 80', ()=>{
        // const player = new Player();
        const resp = player.recieiveDamage(20);
        expect(resp).toBe(80);;
    });

    it('If the damage is 100, the hp should be 50', ()=>{
        // const player = new Player();
        const resp = player.recieiveDamage(50);
        expect(resp).toBe(50);;
    });

    it('If the damage is 100, the hp should be 0', () =>{
        const resp = player.recieiveDamage(100);
        expect(resp).toBe(0);
    });
})