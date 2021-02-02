const student = [
    {id:"1", name1:"Rony"},
    {id:"2", name1:"Ayesha"},
    {id:"3", name1:"Jeba"},
    {id:"4", name1:"Sayma"}
] 

// const sName = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const allStudentName = element.name1;
//     sName.push(allStudentName);
    
// }
// console.log(sName);



const sName1 = student.map(x => x.name1);
const ids = student.filter( s => s.id > 2);
const ids1 = student.find( s => s.id > 2);
console.log(ids1);