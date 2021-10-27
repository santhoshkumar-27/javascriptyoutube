//Rest and Spread operators for Array
const avengers = ['Captain America', 'Iron Man', 'Thor','Natacha'];
console.log(avengers);
//Spread operators
const updatedAvengers = [...avengers,'Hulk'];
console.log(updatedAvengers);
//Rest operators
let [captain, iron, thor, ...rest] = updatedAvengers;
console.log(captain); //captain is  now pointing the Captain Amercia
console.log(iron); //iron is now pointing the Iron Man
console.log(rest);
console.log(thor);


