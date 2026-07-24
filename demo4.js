const student={
    name:"Aditya",
    class:"CSE-AIML",
    age:21
}
const newstudent={...student,
    address:{
        street:"LAL KUAN",
        city:"Ghaziabad",
        pincode:"201009"
    }
}
console.log("student :",student);
console.log("student info:",newstudent);
