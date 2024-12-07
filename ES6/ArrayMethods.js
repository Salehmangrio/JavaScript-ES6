const fruits=['apple', 'orange', 'mango', 'grapes'];

fruits.map((fruit)=>console.log(fruit))

a=fruits.filter((fruit)=>fruit.length>5)
console.log(a);

b=fruits.sort((a,b)=>b.localeCompare(a))
console.log(b);

c=fruits.reduce((accumulator, fruit)=>accumulator.concat(fruit.toUpperCase()), [])
console.log(c);

d=fruits.reduce((accumulator, fruit)=>accumulator+fruit.length, 0)
console.log(d);

e=fruits.find((fruit)=>fruit.startsWith('m'))
console.log(e);

f=fruits.findIndex((fruit)=>fruit.startsWith('m'))
console.log(f);


console.log(fruits.includes('grapes'));

fruits.push('banana');
console.log("Push:",fruits);

fruits.pop();
console.log("pop:",fruits);

fruits.shift();
console.log("Shift:",fruits);

fruits.unshift('kiwi:');
console.log("unshift:",fruits);

fruits.splice(1, 0, 'watermelon');
console.log("splice:",fruits);

fruits.splice(fruits.indexOf('orange'), 1);
console.log("splice:",fruits);


fruits.reverse();
console.log("reverse:",fruits);

