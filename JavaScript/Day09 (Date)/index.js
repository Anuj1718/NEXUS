// const d = new Date();
// originally calculates in milliseconds (from system time)
// from 1st Jan 1970, hence if you give argument 1000, it will give you 1 second after 1st Jan 1970 // const d = new Date(1000);
// console.log(d); // will give the current date and time

// console.log(d.toDateString()); // will give the date in string format without time
// console.log(d.toString()); // will give the date in string format with time
// console.log(d.toISOString()); // will give the date in ISO format i.e International Standard Organization format


// it fetches time from system clock, so if u change system time, it will reflect here also

// Copilot
//Formatting Date Outputs in JavaScript
// console.log(d.toLocaleString()); // will give the date in local format with time
// console.log(d.toLocaleDateString()); // will give the date in local format without time
// console.log(d.toLocaleTimeString()); // will give the time in local format
// console.log(d.toUTCString()); // will give the date in UTC format
// console.log(d.toUTCDateString()); // will give the date in UTC format without time
// console.log(d.toUTCString()); // will give the date in UTC format with time
// console.log(d.toTimeString()); // will give the time in string format
// console.log(d.toJSON()); // will give the date in JSON format
// console.log(d.valueOf()); // will give the date in milliseconds
// console.log(d.getTime()); // will give the date in milliseconds
// console.log(d.getFullYear()); // will give the year
// console.log(d.getMonth()); // will give the month, 0 based index
// console.log(d.getDate()); // will give the date, 1 based index
// console.log(d.getDay()); // will give the day, 0 based index,
// console.log(d.getHours()); // will give the hours, 0 based index
// console.log(d.getMinutes()); // will give the minutes, 0 based index
// console.log(d.getSeconds()); // will give the seconds, 0 based index
// console.log(d.getMilliseconds()); // will give the milliseconds, 0 based index
// console.log(d.getTimezoneOffset()); // will give the timezone offset in minutes
// console.log(d.getUTCFullYear()); // will give the UTC year
// console.log(d.getUTCMonth()); // will give the UTC month, 0 based index
// console.log(d.getUTCDate()); // will give the UTC date, 1 based index
// console.log(d.getUTCDay()); // will give the UTC day, 0 based index
// console.log(d.getUTCHours()); // will give the UTC hours, 0 based index
// console.log(d.getUTCMinutes()); // will give the UTC minutes, 0 based index
// console.log(d.getUTCSeconds()); // will give the UTC seconds, 0          
// console.log(typeof d); // object, it is an object in javascript, date is an object in javascript

// console.log(d.getDate()); 
// console.log(d.getDay()); // // 0 based index, 0 is Sunday, 1 is Monday, 2 is Tuesday, 3 is Wednesday, 4 is Thursday, 5 is Friday, 6 is Saturday
// console.log(d.getMonth());
// Jan/feb/Mar
// 0/1/2/3
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime());

// const now = Date.now();
// console.log(now); // will give the current time in milliseconds since 1st Jan 1970
// console.log(new Date(now)); // will give the current date and time


// Number: 0 based start honge
// String: 1 based start honge

//Another Date Formatting
// const d = new Date("2022-10-20"); // 10 is October, 1 is January
// // year / Month / Date / Hour / Minute / second / millisecond
// const date = new Date(2024,5,28, 10, 12,45, 231); // 5 is June, 0 is January
// console.log(date.toString());

//Setting date components

// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d.toLocaleString());

//  Date calculations

// const date1 = new Date();
// const date2 = new Date("2025-04-21");

// console.log(date2-date1); //>, <, etc can be used
//  difference between date is in millisecond

//  Countdown Timer for olympics
// Days , hour, minute , second
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2-date1;
console.log(date);
const days = Math.floor(date/(1000*60*60*24));

const hour = Math.floor((date/(1000*60*60))%24);

const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);

console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);








