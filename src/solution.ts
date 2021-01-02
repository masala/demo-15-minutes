import {C, F} from '@masala/parser'

const space = C.char(' ');
const eol = C.char('\n');
const separation = eol.then(eol);

let questionParser = C.char('Q')
    .then(C.char(':'))
    .then(space)
    .then(F.not(eol).rep())
    .map(t => t.join(''))
;

let badParser = C.string('* ').drop()
    .then(F.not(eol).rep())
    .then(eol.opt().drop())
    .map(t => t.join(''))
    .map(s => ({bad:s}))


let goodParser = C.string('** ').drop()
    .then(F.not(eol).rep())
    .then(eol.opt().drop())
    .map(t => t.join(''))
    .map(s => ({good:s}));

const responseParser = F.try(badParser).or(goodParser);

let quizzParser = questionParser.then(separation.drop()).then(responseParser.rep());


export const Start = {
    questionParser, badParser, quizzParser, goodParser
}
