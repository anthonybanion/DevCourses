/**
* Converts decimal hours to minutes and seconds
* and returns an object with values ​​in HH:MM:SS format
 * @param {number} hours - Number of hours (can be decimal)
 * @returns {Object} - Contains minutes, seconds and format
 */
function convertHoursToMinutesAndSeconds(hours) {
    if (isNaN(hours) || hours < 0) {
        throw new Error("Invalid input: must be a positive number.");
    }

    const totalSeconds = Math.floor(hours * 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    // Use Date to create a HH:MM:SS format
    const date = new Date(0); // base epoch
    date.setSeconds(totalSeconds);
    const timeString = date.toISOString().substr(11, 8); // "HH:MM:SS"

    return {
        totalSeconds,
        minutes,
        seconds,
        formatted: timeString
    };
}

// Example of use:
const inputHours = 2.75; // 2 hours and 45 minutes
const result = convertHoursToMinutesAndSeconds(inputHours);

console.log(`Horas: ${inputHours}`);
console.log(`Minutos totales: ${result.minutes}`);
console.log(`Segundos restantes: ${result.seconds}`);
console.log(`Formato HH:MM:SS: ${result.formatted}`);
