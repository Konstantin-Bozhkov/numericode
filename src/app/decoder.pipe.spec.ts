import { DecoderPipe } from './decoder.pipe';

describe('DecoderPipe', () => {
  it('create an instance', () => {
    const pipe = new DecoderPipe();
    expect(pipe).toBeTruthy();
  });

  it(`should return 'Invalid coded message' when string is given`, ()=>{
    const message = 'Hello';
    const pipe = new DecoderPipe();
    expect(pipe.transform(message)).toEqual('Invalid secret message');
  });

  it(`should return true if the words array contains 'DecodingError' string `, () => {
    const pipe = new DecoderPipe();
    const errorArray = ['word', 'word', 'DecodingError', 'word'];
    expect(pipe.findErrors(errorArray)).toBe(true);
  })
  it(`should return 'Inavalid coded message' when a number % 27 != 0 | 1`, () => {
    const message = '29';
    const pipe = new DecoderPipe();
    expect(pipe.transform(message)).toEqual('Invalid secret message');
  })

});
