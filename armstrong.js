var Number=153;
var sum=0;

let temp=Number;
while(temp>0){
        var remainder=temp%10;
        sum += remainder * remainder * remainder;

        temp=parseInt(temp /10);
}
if(sum == Number){
    document.write(Number+"is an armstrong number.");

}
else {
    document.write(Number+" is an not armstrong number.");
}