let generateSeries = (a) => 
{
    let arr = [];
    let count = (a%2 == 0)?a-1:a;
    for(let i = 0;i<count;i++)
    {
        arr.push(i*2+1);
    }
    return arr;
}


let input = 4;
let res = generateSeries(input);
console.log(res.join(" "));