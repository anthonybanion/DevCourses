/*Statement:
First Repeated Character in a String

Ask for a string and find the first repeated character.
    - Use a loop to check each character, and an inner loop to compare with the rest.
    - Break both loops as soon as the first repeat is found.
    - Output: "First repeated character: X" or "No repeats". */

function firstRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return `First repeated character: ${str[i]}`;
            }
        }
    }
    return "No repeats";
}

// Example usage:
console.log(firstRepeatedCharacter("hello")); // Output: First repeated character: l
console.log(firstRepeatedCharacter("abcdef")); // Output: No repeats
console.log(firstRepeatedCharacter("swiss")); // Output: First repeated character: s
console.log(firstRepeatedCharacter("")); // Output: No repeats
console.log(firstRepeatedCharacter("aabbcc")); // Output: First repeated character: a