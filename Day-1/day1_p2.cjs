

function partTwo() {
    const lines = fs.readFileSync('source.txt', 'utf-8').trim().split('\n');
    const values = lines
        .map((line) => {
            let firstNumberIndex = line
                .split('')
                .findIndex((v) => !Number.isNaN(Number(v))); 
            let firstWordMatch = line.match(firstNumberWordsRegExp);
            let firstWordNumberIndex = firstWordMatch?.index;


            let firstNumber = 
                firstNumberIndex != -1 
                ? firstWordMatch 
                    ? firstNumberIndex < firstWordNumberIndex
                        ? line[firstNumberIndex]
                        : wordMap[firstWordMatch[0]] 
                    : line[firstNumberIndex] 
                : wordMap[firstWordMatch[0]];

                
            let lastNumberIndex = line
                .split('')
                .findLastIndex((v) => !Number.isNaN(Number(v))); 

            let lastWordMatch = line
                .split('')
                .reverse()
                .join('')
                .match(lastNumberWordsRegExp);
            let lastWordNumberIndex = lastWordMatch ? line.length - 1 - lastWordMatch.index : null;

            let lastNumber = 
                lastNumberIndex != -1 
                ? lastWordMatch 
                    ? lastNumberIndex > lastWordNumberIndex                        
                        ? line[lastNumberIndex]
                        : wordMap[lastWordMatch[0].split('').reverse().join('')]
                    : line[lastNumberIndex] 
                : wordMap[lastWordMatch[0].split('').reverse().join('')]; 

            console.log(firstNumber, lastNumber);
            return Number(firstNumber + lastNumber);
    });

    return values.reduce((s, v) => s + v, ); 
}

console.log(partTwo());
