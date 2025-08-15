/*Statement:
Alternating Loop Directions

Print numbers from 1 to N in this pattern:
    - First loop: ascending 1 → N
    - Second loop: descending N → 1
    - Repeat this up to K cycles.
    - Use nested loops where the direction changes each time. */

function alternatingLoopDirections(N, K) {
    let result = [];
    for (let cycle = 0; cycle < K; cycle++) {
        // Ascending loop
        for (let i = 1; i <= N; i++) {
            result.push(i);
        }
        // Descending loop
        for (let j = N; j >= 1; j--) {
            result.push(j);
        }
    }
    return result;
}

// Example usage:
console.log(alternatingLoopDirections(3, 2)); // Output: [1, 2, 3, 3, 2, 1, 1, 2, 3, 3, 2, 1]
console.log(alternatingLoopDirections(2, 3)); // Output: [1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1]
console.log(alternatingLoopDirections(1, 1)); // Output: [1, 1]
console.log(alternatingLoopDirections(4, 0)); // Output: []
console.log(alternatingLoopDirections(5, 1)); // Output: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]