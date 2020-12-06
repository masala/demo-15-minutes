import {Demo} from '../src/demo'
import {Streams} from '@masala/parser'


test('simple take', () => {

    const parser = Demo.parser;
    const response = parser.parse(Streams.ofString('Q: What is the best food ?'));
    expect (response.offset).toBe(1);
    expect(response.value).toBe('Q')
});