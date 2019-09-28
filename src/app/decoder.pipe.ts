import { Pipe, PipeTransform } from '@angular/core';
import { decode } from 'punycode';

@Pipe({
  name: 'decoder'
})
export class DecoderPipe implements PipeTransform {

  transform(message: string): any {
    const key = 27;
    let alphabet = ['A', 'B', 'C', 'D', 'E',' F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',' '];
    let secretMessage = message.trim().split(" ");

    let decodedMessage = secretMessage.map( (word:any ) => {
      let secretLetter = parseInt(word);

      // Not string or numbers with strings ex 15a abc12
      if( isNaN(word)) return 'DecodingError';

      // 0 or numbers greater than 26 that has division larger than 0 or 1
      if( secretLetter == 0 || secretLetter > 26 && secretLetter % key > (0 || 1) ) return 'DecodingError';

      // While the number is greater than 27 devide it by the key.
      while(secretLetter > key){

        // 28 for space
        if(secretLetter == (28 || 27)){
          secretLetter = 27
        }else{
          secretLetter = Math.floor(secretLetter / key);
        }
      }

      //Add the coresponding letter from the alphabet;
      return alphabet[secretLetter - 1]
    });

    if( this.findErrors(decodedMessage) ) return 'Invalid secret message';

    return decodedMessage.join('');
  }

  findErrors(wordsArray : any){
    return wordsArray.some( word => {
        return word == 'DecodingError';
    });
  }
}

