import {C, F} from '@masala/parser'

const space = C.char(' ');
const eol = C.char('\n');
const separation = eol.then(eol).drop();

let questionParser ;

let badParser;

let quizzParser;

let goodParser;



export const Start = {
  questionParser, badParser, quizzParser, goodParser
}
