var fruits = ["mango","apple","banana"];
console.log(fruits);
// String 3 Values in there are on ""*/

console.log(fruits[1]);
// output 1st value index apple(it's count 0,1,2...)
fruits[1] = "Woodapple";
console.log(fruits);
// it's changed 1st value  apple to woodapple

var Rare = [1,2,3,4,5];
console.log(Rare);
// numbers are will ,to,(1,2,..,)
 
var bike = new Array("Rc","Ktm","Mt","Enfield")
console.log(bike);
// new Array Used many purposes it's helps to 

var a = [[2],[4,6,8],[10,12]];
console.log(a[1]);
// output (0,1,2.. count)

var b = [[1,2,3],[4,5,6],[7,8,9]];
console.log(b[1][2])
// output will come 1st value([4,5,6] on 1st value it's 5)

var c = []
c[99] = 45;
console.log(c);
// output 100th th value i gave 45 value and called 99th value index because counting start 0to1,2,3..

var Number  = [1,2,3,4];
var Number1 = Number.toString();
console.log(Number1)

// join method
var goats = ["Cristiano","Leo","Neymar"];
var goats1 = goats.join(" and ");
console.log(goats1);
// output will come on and ,and remember last value not came with and
// we gave multy join key words

// pop method
var garena = ["m1887","scar","mp40"];
garena.pop();
console.log(garena);
// it's remove last index of element

// shift method and unshift method
var com = ["Acc","Bs","Eco"];
 com.shift();
// com.unshift("Gk");
console.log(com);
// shift remove first element
// unshift Add first index element 

// push method
var league = ["Ucl","laliga","bundesliga"];
console.log(league);
league.push("facup","asl","isl");
console.log(league);
// push mean it's add index element something 

// length
var num = [1,2,3,4,"Dogs",true];
console.log(num.length);
// it's counting index letters

// sort method
// it's priority Uppercase letters 
var jr = ["Beckam","Ronaldo","Pele","ibrahimovic","lewandowski"];
console.log (jr.sort());

// Reverse
// it's reversing 
var leo = [1,2,3,4,5] ;
console.log();

// delete
// it's deleting index value but space irukkum athula empty nnu kaaddum
// var ani = ["Singam","puli","maan","marai"];
// ani.slice(1);

//  slice 
// it will out pease of array... 

// splice
// it's add new items
// var lang = ["Tamil","English","Sinhala","Japanese"];

// concat()method
var myboys = ["CR7","Neymar"];
var mygirls =["selena","kardasians"];
var mine = myboys.concat(mygirls);
// it's merging 

// var a = []
// var b = [1,2,3]
//       = ["abc","xyz"] 
// var c = [1,"abc",true,false]      