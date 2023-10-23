const {MarkovMachine} = require("./markov")


describe('MarkovMachine tests', function(){

    let mm;
    beforeEach(function(){
        mm = new MarkovMachine("I am Daniel");
    });

    test('should create an array of separate words from the passed in pharse', function(){
        let arr = ['I', 'am', 'Daniel'];

        expect(mm.words).toEqual(expect.any(Array));
        expect(mm.words).toEqual(arr);
    })

    test('should create a map from the passed in phrase', function(){
        let map = new Map();
        map.set('I', ['am']);
        map.set('am', ['Daniel']);
        map.set('Daniel', [null]);

        expect(mm.chains).toEqual(expect.any(Map));
        expect(mm.chains).toEqual(map);
    })

    test('should return a random string from chains Map', function(){
        let phrase = `That Sam-I-am
                    That Sam-I-am!
                    I do not like
                    That Sam-I-am`;
        let mm = new MarkovMachine(phrase);
        let newPhrase = mm.makeText();

        expect(newPhrase).toEqual(expect.any(String));
    })
});
