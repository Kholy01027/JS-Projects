console.clear()

//--------------Assignment 01----
console.log("-".repeat(5)+"Assignment"+" 01")
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
// // Needed Output
// Set(3) {10, 20, 2}
// 2

//--------------Assignment 02----
console.log("-".repeat(5)+"Assignment"+" 02");
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
myFriendsSet = new Set([...myFriends]);
myFriendsAgain = Array.from(myFriendsSet).sort();
console.log(myFriendsAgain);
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//--------------Assignment 03----
console.log("-".repeat(5)+"Assignment"+" 03");
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
//   console.log(Object.entries(myInfo));
  map = new Map(Object.entries(myInfo));
  console.log(map);
  console.log(map.size);
  console.log(map.has('role'))
//   // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
//--------------Assignment 04----
console.log("-".repeat(5)+"Assignment"+" 04");
let theNumber = 100020003000;
setNo = new Set([...theNumber.toString()])
console.log(setNo);
arrNo = Array.from(setNo);
let [one, , two, three] = arrNo;
console.log(Number(one+two+three));
Array.from(setNo);
// Needed Output
123
//--------------Assignment 05----
console.log("-".repeat(5)+"Assignment"+" 05");
let theName = "Elzero";
console.log("1:",[...theName]);
console.log("2:",Array.from(theName));
console.log("3:",Array.of(...theName));
console.log("4:",Array.from(new Set(theName)));
console.log("5:",theName.split(""));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
//--------------Assignment 06----
console.log("-".repeat(5)+"Assignment"+" 06");
/*
* So... What we want to do?
* We have array, with charactars and numbers, random number them.
* We want to remove the numbers from the Array, 
* The numbers length we'll take it and go to the first characters
  withinthe same length, and copy them to fill the whole array.
* So... How can we do that?
* We can loop through the array, and check searching for numbers.
* if we founded numbers we'll pop them out from our array
  and push them into a new array for numbers only.
* then we'll take the new array length, to know how many characters
  we'll copyWithin the output array.
* after that we'll just use copyWithIn method to do the job.
* we can use fill method but copyWithIn is more easer for the metion.
* So... Let's get started
* --Notes:-
            -I got proplem in looping through the array, and poping
            the numbers from it, so I'll try another method.
            -I'll filter the array and take the numbers from it
             then I'll but them in new arr and pop thim by using forEach.
            -I'm getting the proplem while I'm poping out the elements from
             the array, it don't take out all the numbers, just two numbers
            !- I have an Idea, maybe I can make array for numbers
             and another one for characters and push to them, sence
             we having a proplem in poping, so we'll not do it.
             And it succed! (; , So now I'm going to use copyWithIn 
             on charArr. and with help of noArr.length
* And Fainally ... I did it (-;.. 
    - I've learned that we cannot use pop to poping elements from
      array because it'll not poping all of them , 
      because it maded for poping last element not element by value
      and also split will give us the same problem, if we want to 
      filter array , we can make new arrays for every kind of elements
      and push the elements to it
*/
let chars1 = ["A", "B", "C", "D","E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

function processArr(arr){
    noArr = [];
    charArr = []
    arr.filter((ele)=>{
        !isNaN(ele) ? noArr.push(ele) : charArr.push(ele);
    })
    noLength = noArr.length;
    charArr.unshift(...noArr);
    // console.log(noArr,noLength)
    // console.log(charArr)
    console.log(charArr.copyWithin(0, noLength, noLength + noLength))
}
processArr(chars1);
processArr(chars2);
processArr(chars3);

//--------------Assignment 07----
console.log("-".repeat(5)+"Assignment"+" 07");
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log("1:", numsOne.concat(numsTwo))
console.log("2:", [...numsOne, ...numsTwo])
numsOne.push(...numsTwo)
console.log("3:", numsOne)
// Needed Output
// [1, 2, 3, 4, 5, 6]
//--------------Assignment 08----
console.log("-".repeat(5)+"Assignment"+" 08");

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(+(n2.slice(1, 2).join("").slice(0, 1) + n1.slice(0, 1).join()))

// Needed Output
210

//More Assignments-------------------------
//--------------Assignment 09----
console.log("-".repeat(5)+"Assignment"+" 09");
function unique(arr) {
    /* your code */
    set = new Set(values);
    setArr = Array.from(set)
    return setArr;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O

  //--------------Assignment 10----
console.log("-".repeat(5)+"Assignment"+" 10");

/*
* So.. What we want to do?
* We want to see every word in the array, and see it's charactars,
  if ther's another word with the same characters , we'll take it
  out , so we get just one word with and no words like it in
  characters.
* So.. what we can do to do it?
* we ca spread all the words characters like so 
  => [[e,a,r],[e,r,a],[n,a,p],[P,A,N]] and then loop on them by
  using find() method.
* and in find method we'll add condition that if the current includes
  the word letters then puth it in array, another word letters?
  then put them in another array
* then we have arrays with words with the same letters, we can now
  
*/

let arr = ["nap", "teachers", "cheaters", "PAN",
 "ear", "era", "hectares"];

 function aclean(arr){
    
 }

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
//--------------Assignment 11----
console.log("-".repeat(5)+"Assignment"+" 11");

let map2 = new Map();

map2.set("name", "John");


let keys = Array.from(map2.keys());
//Another solve
// keys = [];
// for(key of map2.keys()){
//     keys.push(key)
// }

// Error: keys.push is not a function
keys.push("more");
console.log(keys)