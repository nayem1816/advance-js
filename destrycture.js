// //array destructor
// const [num1, num2, num3, num4, num5] = [10, 20, 30, 40, 50];
// console.log(num3);


// //array destructor spread operator
// const [num7, num8, ...z] = [10, 20, 30, 40, 50];
// console.log(z);


// //swap variable in destructor
// let number1 = 10;
// let number2 = 20;
// [number1, number2] = [number2, number1];
// console.log(number1);
// console.log(number2);



// //object destructor
// const student = {id:'01', fullName:'Md Nayem Hossain', age:'22'}
// const {id , fullName , age} = student;

// console.log(fullName);



// //nested object destructor
// const student1 = {
//     id:01, 
//     fullName:'Md Nayem Hossain', 
//     age:22,
//     language:{
//         native: 'Bangla',
//         secondLanguage: 'English'
//     }
// }
// const {id , fullName , age, language} = student1;

// console.log(language.native);



//destructor function parameter
const studentInfo = ({id, fullName, language}) => {
    console.log(language.secondLanguage);
}

const student = {
    id: 01,
    fullName: 'Md Nayem Hossain',
    language:{
        native:'Bangla',
        secondLanguage: 'English'
    }
}
studentInfo(student)

