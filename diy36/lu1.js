let x=1
function recursion(x){
    console.log(x);
    if(x==10){
        return;
    }
    recursion(x+1);

}
recursion(x);

let a=0;
function repeat(a){
    console.log(a);
    if(a==20){
        return;
    }
    repeat(a+2);
}
repeat(a);

//towerofHanoi

function towerofHanoi(n,a,b,c)
{
    if(n==0){
        return;
    }
    towerofHanoi(n-1,a,b,c);
    console.log(`move disk ${n} from ${a}--> ${b}`);
    towerofHanoi(n-1,c,b,a);
}
var n=3;
towerofHanoi(n,'A','C','B');

function fibonacci(num){
    if(num<2){
        return num;
    }else{
        return fibonacci(num-1)+ fibonacci(num-2);
    }
}
let q=Number(prompt("enter the limit:"));
if (q<=0){
    console.log("enter postive integer");
} else if(q==1){
    console.log(1,2);
}else{
    for(let i=0;i<q;i++){
        console.log(fibonacci(i));
        document.write(`${fibonacci(i)}`);
    }
}