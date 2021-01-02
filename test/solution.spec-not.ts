import {Start} from '../src/start'
import {Streams} from '@masala/parser'


test('questionParser', () => {

    const parser = Start.questionParser;
    const response = parser.parse(Streams.ofString('Q: What is the best food ?'));

    expect (response.offset).toBe(26);
    expect(response.value).toBe('Q: What is the best food ?')
});



test('badParser', () => {
    const parser = Start.badParser;
    const response = parser.parse(Streams.ofString('* Pizza'));
    expect(response.value).toEqual(({bad:'Pizza'}))
});



test('quizzParser', () => {

    const parser = Start.quizzParser as any;
    const response = parser.parse(Streams.ofString(`Q: What is the best food ?

* Pizza
* Hamburger
** Confit de Canard
* Spaghettis`));
    console.log(response.value);
    expect(response.value.size()).toBe(2)
});

