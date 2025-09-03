let generateSeries = (a) => 
{
    let arr = [];
    for(let i = 0;i<a;i++)
    {
        arr.push(i*2+1);
    }
    return arr;
}

let input = 5;
let res = generateSeries(input);
console.log(res.join(" "))

