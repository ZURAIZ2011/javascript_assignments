//   ques 2 

let a = 5;  //7
let b = 4;   //3
let result = ++a + b-- + a++; 
// 6 + 4 + 6
// 10 + 6
// 16

console.log(a);
console.log(b);
console.log(result);



// ques3 


let c = 2;  //3 //4
let d = 3;  //2  //3
let result1 = c++ + ++c + --d + d++;
//   2 + 4 + 2 + 2
// 6 + 2 +2
// 8 + 2
// 10

console.log(c);
console.log(d);
console.log(result1);


// ques 4 

let e = 10;   //9
let f = 5;   //6  //7
let result2 = --e + f++ - ++f;
//             9 +   5  -  7   
//        14 - 7
//            7

console.log(e);
console.log(f);
console.log(result2);



// ques5 

let g = 4;   //5   //4
let h = 2;     //3
let result3 = ++g * h++ + --g;
//             5 *   2  +   4    
//            10 + 4
//         14

console.log(g);
console.log(h);
console.log(result3);

// ques 6 

let i = 6;  //5   //6
let j = 3;    //2  //3
let result4 = i-- + --j + ++i + j++;
//             6  + 2   +  6   +  2
//                 8 +  6  + 2 
//            14 +  2
//         16

console.log(i);
console.log(j);
console.log(result4);



// ques 7 

let k = 2;    //3  // 4
let l = 4;     //3
let result5 = ++k + k++ * --l;
//              3 +     3  *   3
//               3  +  9
//           12

console.log(k);
console.log(l);
console.log(result5);



// ques 8 
let m = 5;   //6  //7   //6
let n = 2;     //1  //2
let result6 = ++m + m++ + --n * n++ - m--;
//             6  +  6   +  1 * 1  -   7
//              6  + 6    +  1  -7
//                12   +  1  -7
//              13  -  7
//               6


console.log(m);
console.log(n);
console.log(result6);
