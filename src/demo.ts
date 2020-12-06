import {C} from '@masala/parser'


const space = C.char(' ');
const eol = C.char('\n');
const separation = eol.then(eol);


const parser = C.char('Q');


export const Demo = {
  parser
}
