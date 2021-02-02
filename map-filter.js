const student = [1,6,4,8,9];

// function squire(element) {
//     return element * element;
// }


// const squire = student.map(function (element) {
//     return element * element;
// });

// const result = student.map( x => x*x);

// console.log(result);


const result = student.filter( x => x>2);

const result2 = student.find(x => x>5);
console.log(result2);


