var request = require('request');
var Decoder = require('../helpers/decoder');

describe('Decoding messages', ()=>{
    it('should return 200 OK',(done)=>{
        request.get('http://localhost:3000/api/decode', (err,res)=>{
            expect(res.statusCode).toBe(200);
            done();
        });
    });

    it('should containe a message property inside the response', (done)=>{
        request.get(`http://localhost:3000/api/decode`, (err,res,body)=>{
            const responseData = JSON.parse(body);
            const objectKeys = Object.keys(responseData);
            const expectedKeys = ["message"]

            for(var i=0; i< expectedKeys.length;i++) {
                expect(objectKeys).toContain(expectedKeys[i])
            }
            done();
        });
    });

    it(`should return 'Invalid coded message' when string is given`, (done)=>{
        const message = 'Hello';
        request.get(`http://localhost:3000/api/decode?message="${message}"`, (err,res,body)=>{
            let responseData = JSON.parse(body);
            expect(responseData.message).toEqual('Invalid secret message');
            done();
        });
    });

    it(`should return 'Inavalid coded message' when a number % 27 != 0 | 1`, (done) => {
        const message = '8 5 12 12 15a';
        request.get(`http://localhost:3000/api/decode?message="${message}"`, (err,res,body)=>{
            let responseData = JSON.parse(body);
            expect(responseData.message).toEqual('Invalid secret message');
            done();
        });
    });

    it(`should return true if the words array contains 'DecodingError' string `, () => {
        const decoder = new Decoder();
        const errorArray = ['word', 'word', 'DecodingError', 'word'];
        expect(decoder.findErrors(errorArray)).toBe(true);
    });
    
})