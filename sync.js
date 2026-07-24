function register(cb){
    setTimeout(()=>{
        console.log("Registering...");
        cb();
    },6000);
}
function login(cb){
    setTimeout(()=>{
        console.log("login here...");
        cb();
    },8000);
}
function getData(cb){
    setTimeout(()=>{
        console.log("Getting data...");
        cb();
    },4000);
}
function displayData(){
    setTimeout(()=>{
        console.log("Displaying data...");
    
    },1000);}
// function waitforinput(){
//    const ct=Date.now();
//    const ms=ct+delay;
//    while(Date.now()<ms){

//    }

// }
// register();
// login();
// getData();
// displayData();
//callback hell
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
    
    })
})
});
console.log("End of the program");