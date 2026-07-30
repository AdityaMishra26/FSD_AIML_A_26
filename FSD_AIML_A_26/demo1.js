const num=[1,2,3,4,5,6,7,8,9,10];
// const b=num[0];
// const c=num[1];
//array destructuring
const [b,c]=num;
console.log("b",b);
console.log("c",c);
const student={
    name:"John",
    age:20,
    branch:"CSE"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
// for making it in one line
const {name,age,branch}=student;
console.log("name",name);
console.log("age",age);
console.log("branch",branch);