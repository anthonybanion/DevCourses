/* Statement:
Infinite Input Until Keyword

Continuously ask the user to enter a word.
    - Use a while(true) loop.
    - Stop only if the word entered is "STOP" (case-insensitive).
    - Count how many words were entered before stopping.
    - Output: "You entered X words before STOP        - 
*/


import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

let counter = 0;

while (true) {
    const word = await rl.question("Enter a word: ");
    if (word.toLowerCase() === 'stop') {
        break;
    }
    counter++;
}

console.log(`You entered ${counter} words before STOP`);
rl.close();
