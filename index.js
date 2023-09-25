const { Cron } = require("croner");

// Basic scheduling: Run a function every fifth second
const job = Cron("*/5 * * * * *", () => {
    console.log("This will run every fifth second");
});

// Get dates for the next 100 Sundays
const nextSundays = Cron("0 0 0 * * 7").nextRuns(100);
console.log(nextSundays);

// Days left to the next Christmas Eve
const msLeft = Cron("59 59 23 24 DEC *").nextRun() - new Date();
console.log(
    Math.floor(msLeft / 1000 / 3600 / 24) + " days left to next christmas eve",
);

// Schedule a function at a specific date/time in a different timezone
Cron("2024-01-23T00:00:00", { timezone: "Asia/Kolkata" }, () => {
    console.log("Yay!");
});