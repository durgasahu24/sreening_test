let arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let count = 0;
let obj = {}
let countGet = (a) => {

    for (let i of arr) {
        if (i % a == 0) {
            count++;
        }
    }
    obj[a] = count;
    count = 0;
}

for (let i of arr2) {
    countGet(i);
}

console.log(obj)