"use strict"
console.log('-'.repeat(10)+'Task 01');
//-----------------Task 01
{
let d1 = new Date(2012, 1, 20, 3, 12)
console.log(d1);
let d2 = new Date("2012-02-20T03:12:00")
console.log(d2)
}

console.log('-'.repeat(10)+'Task 02');
//-----------------Task 02
{
function getWeekDay(date){
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return DAYS[date.getDay()];
}
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date))
}

console.log('-'.repeat(10)+'Task 03');
//-----------------Task 03
{
function getLocalDay(date){
    const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return DAYS[date.getDay()]
}
let date = new Date(2012, 0, 0);
console.log(getLocalDay(date))
}

console.log('-'.repeat(10)+'Task 04');
//-----------------Task 04
{
function getDateAgo(date, day){
    let lasDay = new Date(date)
     lasDay.setUTCDate(date.getUTCDate() - day);
     return lasDay.getDate()
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 41, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
}

console.log('-'.repeat(10)+'Task 05');
//-----------------Task 05
{
function getSecondsToday(){return `${new Date().getHours() * 3600 } Seconds`};
console.log(getSecondsToday())
//or
function getSecondsToday2(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today ;
    return Math.round(diff / 1000) + ' Seconds'
}
console.log(getSecondsToday2());
}


console.log('-'.repeat(10)+'Task 06');
//-----------------Task 06
{
function getSecondsToTomorrow(){
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000) + ' Seconds';
}
console.log(getSecondsToTomorrow())
}
console.log('-'.repeat(10)+'Task 07');
//-----------------Task 07

function formatDate(date){
    let now = new Date();
    let diff = (now - date)/1000;
    // if(Math.ceil(diff) == 1){
    //     return 'right now'
    // }else if (Math.ceil(diff) <= 30){
    //     return '30 sec. ago'
    // }else if (Math.ceil(diff) <= (5 * 60 * 1000)){
    //     return '5 min. ago'
    // }
    console.log(new Date(new Date(new Date - 1)).getMinutes())
}
formatDate(new Date(new Date - 1))
// console.log(formatDate(new Date(new Date - 1)));
// console.log(formatDate(new Date(new Date - 30 * 1000)));
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));