/*
  Regular Expression
  - Challenge
*/
console.clear();
console.log('-'.repeat(10)+'Challenge')
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.2.2el2zero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'http://127.0.0.1:5500/Elzero%20Assignments/W-18/index.html';
let url7 = 'https://www.notion.so/Home-Page-6b19032b6731497b91afdc1636c44b1c';
let url8 = 'https://javascript.info/regexp-groups';
let url9 = 'https://elzero.org/javascript-2021-regular-expression-challenge/';

let re = /^(https?:\/\/)?(w{3}.)?(\w+\.)+(\w)+(.*?)?$/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));
console.log(url8.match(re));
console.log(url9.match(re));

//--------Assignment 01
console.log('-'.repeat(10)+'Assignment 01');
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reg = /\d{4}:\w{3}(:\d{4}){6}/g;
console.log(ip.match(reg))

//--------Assignment 02
console.log('-'.repeat(10)+'Assignment 02');
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/\bOs\d*?O\b/gi))
// Output
// ['Os10O', 'OsO', 'Os100O']

//--------Assignment 03
console.log('-'.repeat(10)+'Assignment 03');
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/g));

//--------Assignment 03
console.log('-'.repeat(10)+'Assignment 03');
let re1 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
console.log("the explain of each peace of this : ", re1)
console.log("`/../`:", 'The start and the end of reguler expression')
console.log(`"https?":`,"searching for http and it is requierd but (s) is not because of \"?\" at the end")
console.log(`":":`,"searching for this character after http(s)")
console.log(`"\\/\\/":`,"the \\ escapes / because it's a special character")
console.log(`"(?:[-\w]+\.)?":`,`
    (..) start and end of group.
    ?: says that this group won't save as reference.
    [-\\w]+ searching for any word character or hyphen - , one or more + .
    \\. the \\ escapes the . because it's a special character means any character.
    (..)? means this group well not be required and we can escap it, 0 or 1 . 
`)
console.log(`"([-\w]+)":`,`
    (..) start and end of group.
         the group dosen't have (?:) so it well be available as reference \\1.
    [..] the character class contains an options[ab] or ranges[a-b].
    [-\\w]+  searching fo word character (that's not containing hyphen) 
            and hyphen - . 
            The plus sign at the end meaning one or more of this thins.s
`)
console.log(`"\\.":`,"the \\ escapes dot . because it's a special char.")
console.log(`"\\w+":`,"searching for word character including the _ and numbers , + means on or more.")
console.log(`"(?:\.\w+)?":`,`
    (..) start and end of group.
    ?: means that the group well not save as reference .
    \\. the \\ escaping . because .'s special character.
    \\w+ searching for word character including _ and numbers
         but not special characters like hyphen - .
    (..)? the ? means that tis group is optional, 0 or 1.
`)
console.log(`"\\/?":`,"\\ escaping / and ? makes it optional.")
console.log(`".*":`,". searchs for any character instead the newline \\n and * optional , 0 or one or more ")
console.log(`"/../i":`,'i at the end is a flag or modifire means that the search well be case insinsetive')

//--------Assignment 04
console.log('-'.repeat(10)+'Assignment 04');
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re2 = /^\d+( - | |\/)?\d+\1\d+$/g; // Write Pattern Here2

console.log(date1.match(re2)); // "25/10/1982"
console.log(date2.match(re2)); // "25 - 10 - 1982"
console.log(date3.match(re2)); // "25 10 1982"
console.log(date4.match(re2)); // "25 10 82"

//--------More Assignments
console.log('-'.repeat(25)+'More Assignments'+'-'.repeat(25));
//--------Assignment 01
console.log('-'.repeat(10)+'Assignment 01');
{
//let regexp = /\b(?<!-)\d+/g;
//OR
let regexp = /(?<!-)(?<!\d+)\d+/g;//رقم مش مسبوق ب - ومش مسبوق برقم

let str = "0 12 -5 123 -18";

console.log( str.match(regexp) );} // 0, 12, 123

//--------Assignment 02
console.log('-'.repeat(10)+'Assignment 02');
{
    // let regexp = /\.\.\./;
let regexp = /<body.*?>/is;

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;
console.log(str.match(regexp))

str = str.replace(regexp, `$&<h1>Hello</h1>`);
console.log(str)
}

//--------Assignment 03
console.log('-'.repeat(10)+'Assignment 03');
{
let regexp = /^\d{2}(:[\da-f]{2}){5}$/ig;

console.log( regexp.test('01:32:54:67:89:AB') ); // true

console.log( regexp.test('0132546789AB') ); // false (no colons)

console.log( regexp.test('01:32:54:67:89') ); // false (5 numbers, must be 6)

console.log( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)
}

//--------Assignment 04
console.log('-'.repeat(10)+'Assignment 04');
{
    // let regexp = /#([a-f0-9]{3}|[a-f0-9]{6})\b/ig;
//OR
let regexp = /#([0-9a-f]{3}){1,2}\b/ig;


let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log( str.match(regexp) ); // #3f3 #AA00ef
}
//--------Assignment 04
console.log('-'.repeat(10)+'Assignment 04');
{
// let regexp = /-?\d+(\.)?(\d+)?\b/g;
//OR // but all the optional things together if there well be in sequence!!
let regexp = /-?\d+(\.\d+)?/g;


let str = "-1.5 0 2 -123.4. 1.";

console.log( str.match(regexp) ); // -1.5, 0, 2, -123.4
}
//--------Assignment 05
console.log('-'.repeat(10)+'Assignment 05');
{
function parse(str){
//     // regexp = /(?<spaces>\s*)?-?(?<fNo>\d+(\.\d+)?)\k<spaces>?(?<operator>\-|*|+|\/)\k<spaces>(?<sNo>\k<fNo>)\k<spaces>/g
    
//     str.match(regexp)
    regexp = /(\s*)(?<a>-?\d+(\.\d+)?)\s*(?<op>\-|\*|\+|\/)\s*(?<b>-?\d+(\.\d+)?)\s*/g;
    // console.log("1.2 * 3.4".match(regexp));
    strArr = Array.from(str.matchAll(regexp));
    strObj = strArr[0].groups;
    arr = [];
    for (values of Object.values(strObj)){
         arr.push(values);
    }
    return arr;
    // return strArr[0].groups;
}
console.log(parse("-2 - 2"))
let [a, op, b] = parse("-2 - 2");

console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4


}
{
//--------Assignment 06
console.log('-'.repeat(10)+'Assignment 06');
// let regexp = /java java(script)? php c(\+\+)? c/ig;
let regexp = /java(script)?|c(\+\+)?|php/ig;

console.log("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C
}
{
//--------Assignment 07
console.log('-'.repeat(10)+'Assignment 07');
let regexp = /\[(b|url|quote)\].*?\[\/\1]/gs;

let str = "..[url][b]http://google.com[/b][/url]..";
console.log( str.match(regexp) ); // [url][b]http://google.com[/b][/url]
}
{
//--------Assignment 08
console.log('-'.repeat(10)+'Assignment 08');

let str1 = 'Just like \"here\".'
let str2 = '"test me"'
let str3 = '"\\"'
let str4 = '"\\ \""'
let str5 = '"Say \"Hello\"!"'

let regexp = /"(\\.|[^"\\])*"/g

console.log(str1.match(regexp))
console.log(str2.match(regexp))
console.log(str3.match(regexp))
console.log(str4.match(regexp))
console.log(str5.match(regexp))
}
{
//--------Assignment 09
console.log('-'.repeat(10)+'Assignment 09');
let regexp = /<style(\s.*?>|>)/g;

console.log( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">
}