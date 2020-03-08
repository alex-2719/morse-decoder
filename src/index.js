const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode1(expr) {
    let string = "";
    for (let i = 0; i < expr.length; i+=10){
        let letter = "";
        let character = expr.slice(i, i + 10);
        if (character === "**********"){
            string = string + " ";
        }else{
            for (let j = 0; j < character.length; j+=2){
                let cr = character.slice(j, j+2);
                if (cr === "10"){
                    letter = letter + ".";
                }else if (cr === "11"){
                    letter = letter + "-";
                }
            }
            string = string + MORSE_TABLE[letter];
        }
    }
    return string;
}

module.exports = {
    decode
}

function decode(expr) {
    let string = "";
    for (let i = 0; i < expr.length; i+=10){
        let letter = "";
        let character = expr.slice(i, i + 10);
        if (character === "**********"){
            string = string + " ";
        }else{
            for (let j = 0; j < character.length; j+=2){
                let cr = character.slice(j, j+2);
                if (cr === "10"){
                    letter = letter + ".";
                }else if (cr === "11"){
                    letter = letter + "-";
                }
            }
            string = string + MORSE_TABLE[letter];
        }
    }
    return string;

}
// "0010101010 0000000010 0010111010 0010111010 0000111111**********00001011110000111111000010111000101110100000111010"
//console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));
