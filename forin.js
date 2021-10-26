let sum = {
    add: 'sum',
    sub: 'minus',
    mul: 'multiply',
    div: 'divide'
}

// for in
for( let x in sum){
    console.log(sum[x]);
}

const array = [12, 13, 14, 15];

for(let y in array){
    console.log(array[y]);  //it takes index value
}