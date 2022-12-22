console.log('-'.repeat(10)+'Assignment',20.1);
//-------------------------Assignment 20.1
{
let Mybirth = new Date(2004, 6, 1);
let now = new Date();

console.log(Mybirth)
let MybirthInS = (now - Mybirth) / 1000;
console.log(parseInt(MybirthInS),'S')
console.log(parseInt(MybirthInS / 60),'Min')
console.log(parseInt(MybirthInS / 60 /60),'H')
console.log(parseInt(MybirthInS / 60 /60/ 24),'D')
console.log(parseInt(MybirthInS / 60 /60/ 24/ 30),'M')
console.log(parseInt(MybirthInS / 60 /60/ 24/ 30 / 12),'Y')

// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"
}
console.log('-'.repeat(10)+'Assignment',20.2);
//-------------------------Assignment 20.2
{
let newDate = new Date(0)
newDate.setUTCFullYear(newDate.getUTCFullYear() + 10)
newDate.setHours(0,0,1)
console.log(new Date(newDate))
//or
// console.log(new Date(new Date(Date.parse("1980")).setHours(0, 0, 01)))
// Needed Output

"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
}
console.log('-'.repeat(10)+'Assignment',20.3);
//-------------------------Assignment 20.3
{
function lastMonth(){
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let lastM = new Date();
    lastM.setDate(0);
    let lMonth = MONTHS[lastM.getMonth()];
    let lDay = lastM.getDate()
    console.log(lastM)
    console.log(`Previous Month's ${lMonth} And Last Day's ${lDay}-${DAYS[lastM.getDay()]}`)
}
lastMonth()
// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"
}
console.log('-'.repeat(10)+'Assignment',20.4);
//-------------------------Assignment 20.4
{
console.log('1:', new Date(2004, 5, 1))
console.log('2:', new Date("2004, 6, 1"))
let method3 = new Date();
method3.setFullYear(2004, 5, 1);
method3.setHours(0, 0, 0)
console.log('3:', method3 )

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
}
console.log('-'.repeat(10)+'Assignment',20.5);
//-------------------------Assignment 20.5
{
let start = performance.now()
let i = 0;
while(i < 10){
    console.log(i)
    i++
}
let end = performance.now()
console.log(`Loop Took ${end - start} Milliseconds.`)

// Needed Output

"Loop Took 1921 Milliseconds."
}
console.log('-'.repeat(10)+'Assignment',20.6);
//-------------------------Assignment 20.6
{
// Write Your Generator Function Here

function* gen(){
    let pattern = 140;
    let num = 14;
  
    yield num;
  
    while (true) {
      yield (num += pattern);
      pattern += 200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
}
console.log('-'.repeat(10)+'Assignment',20.7);
//-------------------------Assignment 20.7
{
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
  
  function* genAll(){
    let genNo = genNumbers();
    let genNoSet = new Set();
    for(let no of genNo){
        genNoSet.add(no)
    }
    for(let no of genNoSet){
        yield no;
    }

    let genLet = genLetters();
    let genLetSet = new Set();
    for(let no of genLet){
        genLetSet.add(no)
    }
    for(let no of genLetSet){
        yield no;
    }
  }
 
  let generator = genAll();
  
//   console.log(generator.next()); // {value: 1, done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}
}

console.log('-'.repeat(10)+'Assignment',20.8);
//-------------------------Assignment 20.8
import calc,{modOne} from './mod-two.js'
// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
