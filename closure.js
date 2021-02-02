function stopeWatch() {
    let count =0;
    return function() {
        count++;
        return count;
    }
}

const result1 = stopeWatch();
console.log(result1());
console.log(result1());
console.log(result1());
console.log(result1());

const result2 = stopeWatch();
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result1());
