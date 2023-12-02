
const fs = require ('fs');

function partOne() {
    const lines = fs.readFileSync('source.txt', 'utf-8').trim().split('\n');
    const numbers = lines.map((line) => {
        let first = line.split('').find((v) => !Number.isNaN(Number(v))); 
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v))); 
        return Number(first + last);
    });

    return numbers.reduce((z, a) => z + a, 0); 
}

console.log(partOne());

const firstNumberWordsRegExp = new RegExp( [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .join('|')
);

const lastNumberWordsRegExp = new RegExp( [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .join('|')
    .split('')
    .reverse()
    .join('')
);


const wordMap = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
};


