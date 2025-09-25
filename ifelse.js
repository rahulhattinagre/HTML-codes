/*var x = 10;
if (x < 10) {
    document.write("the value of x is less then 10");
}
else if(x = 10){
    document.write("the value of x is equal then 10");
}
else {
    document.write("the value of x is greater then 10");
}*/

var x = 7;

if (x > 0 && x % 2 === 0) {
    document.write("Number is positive and even");
} else if (x > 0 && x % 2 !== 0) {
    document.write("Number is positive and odd");
} else if (x < 0 && x % 2 === 0) {
    document.write("Number is negative and even");
} else if (x < 0 && x % 2 !== 0) {
    document.write("Number is negative and odd");
} else {
    document.write("Number is zero");
}
