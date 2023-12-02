const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

console.log(`Part 2: ${partTwo()}`)

function partTwo(){

    let total = 0;

    for(let game of input.split('\n')){ 
        let [gameId, gameData] = game.split(': ');

        let allCounts = {
            red: 0,
            green: 0,
            blue: 0,
        }

        for(let gameSet of gameData.split('; ')){
            let theCounts = {
                red: 0,
                green: 0,
                blue: 0,
            }

            for(let cube of gameSet.split(', ')){
                let [count, color] = cube.split(' ');
                theCounts[color] += parseInt(count);

                for(let key of Object.keys(theCounts)){
                    if(theCounts[key] > allCounts[key]){
                        allCounts[key] = theCounts[key];
                    }
                }
            }
        }

        total += allCounts.red * allCounts.blue * allCounts.green;
    }

    return total;

}
