function calculateAverage(event) {
  event.preventDefault(); // Prevents the form from reloading

  const input = document.getElementById("set-of-values").value;
  // Split the input by commas and trim whitespace
  const numbers = input.split(",").map((n) => parseFloat(n.trim()));

// Validation: filter NaN
  const validNumbers = numbers.filter((n) => !isNaN(n));

  if (validNumbers.length === 0) {
    document.getElementById("average-result").textContent =
      "Please enter valid numbers.";
    return;
  }
  // Calculate the sum and average
  const sum = validNumbers.reduce((acc, num) => acc + num, 0);
  // Calculate the average
  const avg = sum / validNumbers.length;

  document.getElementById(
    "average-result"
  ).textContent = `Average: ${avg.toFixed(2)}`;
}
