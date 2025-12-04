let a = [];

for(let i=1; i<=5; i++)
    a.push(i)

console.log(a);


let result = a.reduce((a, s)=> a*s, 1);

console.log(result)