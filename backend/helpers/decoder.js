module.exports = class Decoder{
    constructor(){
        this._key = 27;
        this._alphabet = ['A', 'B', 'C', 'D', 'E',' F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',' '];
    }
    decode(secretMessage){
        let that = this;

        let decodedMessage = secretMessage.map( (word) => {
            let secretLetter = parseInt(word);
        
            // Not string or numbers with strings ex 15a abc12
            if( isNaN(word)) return 'DecodingError';

            // 0 or numbers greater than 26 that has division larger than 0 or 1
            if( secretLetter == 0 || secretLetter > 26 && secretLetter % that._key > (0 || 1) ) return 'DecodingError';
    
            // While the number is greater than 27 devide it by the key.
            while(secretLetter > that._key){
                // 28 for space
                if(secretLetter == (28 || 27)){
                    secretLetter = 27
                }else{
                    secretLetter = Math.floor(secretLetter / that._key);
                }
            }
            //Add the coresponding letter from the alphabet;
            return that._alphabet[secretLetter - 1]
        });
        return decodedMessage;
    }
    findErrors(wordsArray){
        return wordsArray.some( word => {
            return word == 'DecodingError';
        });
    }
}
