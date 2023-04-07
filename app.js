//Question#1

 let firstNum = prompt("Enter the first number");
 let secNum = prompt("Enter the second Number");
if(firstNum > secNum ){
console.log("first Number greater is "+ +firstNum);
}
else
console.log("second number greater is "+ +secNum);

//Question#2
 
let signNum = prompt("Enter a number of a sign");
if(signNum > 0 ){
    console.log("sign is + ");
}
else
console.log("sign is - ")


//Question#3

 let a = prompt("Enter the first number");
 let b = prompt("Enter the second Number");
 let c = prompt("Enter the third number");
 let d = prompt("Enter the fourth Number");
 let e = prompt("Enter the fifth number");
 if(a>b && a>c && a>d && a>e  ){
    console.log("firstNum is greater " +a);
 }
 else if(b>a && b>c && b>d && b>e ){
    console.log("secNum is greater "+b );
 }
 else if(c>a && c>b && c>d && c>e ){
    console.log("thirdNum is greater "+c);
 }
 else if(d>a && d>b && d>c && d>e ){
    console.log("fourth Num is greater "+d);
 }
 else {
    console.log("fifth number is larger "+e);
 } 

//Question#4

for(let i=0 ; i<=15; i++){
    if(i%2===0){
        console.log(+i+ " Even");
    }
    else{
        console.log(+i+ " Odd")
    }
}

//Question5

let marks = prompt("Enter a marks");
if(marks <= 60 ){
    console.log("You are fail");
} 
else if(marks<= 70) {
    console.log("You got D grade");
} 
else if(marks<= 80) {
    console.log("You got C grade");
} 
else if(marks<= 90) {
    console.log("You got B grade");
} 
else if(marks <= 100){
    console.log("You got A grade");
} 

//Question#6

for(let i=1;i<=100;i++){
    
    if(i%3===0 && i%5===0){
        console.log(+i+ " FizzBuzz" );
    }
    else if(i%3===0){
        console.log(+i+ " Fizz");
    }
    else if(i%5===0){
        console.log(+i+ " Buzz");
        }
}


//Question#7

let n = 5;
let str= "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);