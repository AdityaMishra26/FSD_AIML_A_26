const sum=(...num)=>{
    // return num.reduce((a,b)=>(a+b))
    let sum=0;
    for(i of num){
        sum=sum+i;
    }
    return sum;
}
// const num=[1,2,3,4,5,6,7,8,9,10];
const result=sum(1,2,3,4,5,6,7,8,9,10);
console.log("result",result);