import '../assets/css/style.css';


//-----------------------Immutable vs Mutable Concepts

// let a = 'Super Burguers';
// a='Big Slurp';

// const b = a.slice(0,1);
// console.log(a,b);

// const x=Object.freeze( {id: '🍟', name: 'Jumbo Fries', price: 199});

// console.log(x);

//-----------------------Immutable Data Structures
//   const items = Object.freeze([
//         { id: '🍔', name: 'Super Burger', price: 399 },
//         { id: '🍟', name: 'Jumbo Fries', price: 199 },
//         { id: '🥤', name: 'Big Slurp', price: 299 },
//       ]);
//       console.log(items);
// //ADD
//   const newItem={id: '🌭', name: 'Posh Dog', price: 299};
//   // items.push(newItem); //this modify the original array
//     const newItems=[...items, newItem];
//     console.log(newItems);
//   console.log(newItem);
// // //REMOVE
// // const removed = items.splice(0,1); //this modify the original array
// const updatedItems= items.filter((item) => item.id !== '🍔'); //Using filter insted of splice doesnt modify the original array
// console.log(updatedItems);


// // Objects ADD

// const item={id: '🌭', name: 'Posh Dog'};
// // item.price=299;
// console.log(item);
// const itemNew={...item, price: 299};
// console.log(itemNew);

// //Object REMOVE
// const itemToRemove={id: '🌭', name: 'Posh Dog', price:299};
// console.log(itemToRemove);
// //delete itemToRemove.price;

// const {price, ...leftOverItems} = itemToRemove;

// console.log(itemToRemove);
// console.log(price);
// console.log(leftOverItems);

// //identity
// console.log({}==={});
// console.log([]===[]);
// console.log(itemToRemove=== itemToRemove);
// console.log(itemToRemove=== leftOverItems);

//-----------------------Imperative vs Declarative Programming


  const items = Object.freeze([
        { id: '🍔', name: 'Super Burger', price: 399 },
        { id: '🍟', name: 'Jumbo Fries', price: 199 },
        { id: '🥤', name: 'Big Slurp', price: 299 },
      ]);
      console.log(items);
const itemNamesImperative=[];

for(let i=0; i<items.length; i++){
  const item= items[i];
  itemNamesImperative.push(item.name);
}
console.log(itemNamesImperative);

const itemNamesDeclarative = items.map(function(item){ 
return item.name;
});

console.log(itemNamesDeclarative);

const priceChain = items.map(function(item){ 
  return item.price;
  }).reduce(function(prev, next){
    return prev + next;
  });

  console.log(priceChain);
  