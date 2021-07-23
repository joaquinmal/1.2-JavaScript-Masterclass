import '../assets/css/style.css';

// <--------------------------------------------------- Procedural Programming
// const cart =[];

// const addToCart =(item)=> cart.push(item);



// const removeFromCart = (id) =>  {
//   const index = cart.findIndex((x) => x.id===id);
//   cart.splice(index, 1);
// }; 

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// addToCart(hotDog);
// console.log(cart);


// setTimeout(()=>{
//   removeFromCart('🌭');
//   console.log(cart);
// }, 2500);

// <--------------------------------------------------- Object Literals and Encapsulation
// const cart ={
//   items:[],
//   add(item){
//     this.#items.push(item);
//     },
//   remove(id){
//       const index = this.#items.findIndex((x) => x.id===id);
//       this.#items.splice(index, 1);
//     },
  
// };

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);


// setTimeout(()=>{
//   cart.remove('🌭');
//   console.log(cart);
// }, 2500);

// <--------------------------------------------------- Object Literals and Factory Functions

// const createCart=(items=[])=>({
  
//     items,
//   add(item){
//     this.#items.push(item);
//     },
//   remove(id){
//       const index = this.#items.findIndex((x) => x.id===id);
//       this.#items.splice(index, 1);
//     }
// });

// const cart= createCart([]);

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);


// setTimeout(()=>{
//   cart.remove('🌭');
//   console.log(cart);
// }, 2500);



// <--------------------------------------------------- Frozen State and Immutable Patterns

// const createCart=(items=[])=>({
  
//     items:Object.freeze(items),
//   add(item){
//     const state= [...this.#items, item];
//     this.#items = Object.freeze(state);
//     },
//   remove(id){
//       const state = this.#items.filter((item)=> item.id!== id);
//       this.#items = Object.freeze(state);
//     }
// });

// const cart= createCart([]);

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);

// cart.remove('🌭');
// console.log(cart);

// console.log(Object.isFrozen(cart.items));


// <--------------------------------------------------- Prototypes and .__proto__

// console.log({}.constructor);
// console.log({}.__proto__);
// console.log({} instanceof Object);

// console.log([].constructor);
// console.log([].__proto__);
// console.log([] instanceof Array, [] instanceof Object);
// console.log(Array.isArray([]));

// const createCart=(items=[])=>({
  
//   items:Object.freeze(items),
// add(item){
//   const state= [...this.#items, item];
//   this.#items = Object.freeze(state);
//   },
// remove(id){
//     const state = this.#items.filter((item)=> item.id!== id);
//     this.#items = Object.freeze(state);
//   }
// });

// const cart= createCart([]);

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);

// cart.remove('🌭');
// console.log(cart);

// console.log(Object.isFrozen(cart.items));


// <--------------------------------------------------- Constructor Functions and ‘new’

// function Cart(items=[]){
//  this.#items = Object.freeze(items)
// }
// //Si lo haciamos de la manera anterior  cada que se creaba un objeto se creaban los metodos dentro de Cart, 
// // al hacerlo con .prototype se crean solo una vez, es decir, si tenemos n objetos se van a crear solo una vez los metodos add y remove

// Cart.prototype.add=function (item){
//   const state= [...this.#items, item];
//   this.#items = Object.freeze(state);
//   };
// Cart.prototype.remove=function (id){
//     const state = this.#items.filter((item)=> item.id!== id);
//     this.#items = Object.freeze(state);
//   };

// const cart= new Cart();

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);
// console.log(cart instanceof Cart);

// <--------------------------------------------------- Classes and Members

//   class Cart{
//     items;
//     constructor(items=[]){
//       this.#items = Object.freeze(items);
//     }
//     add(item){
//       const state= [...this.#items, item];
//       this.#items = Object.freeze(state);
//       }
//     remove(id){
//         const state = this.#items.filter((item)=> item.id!== id);
//         this.#items = Object.freeze(state);
//       }
//  }

//  const cart= new Cart();
 
//  const hotDog = {id:'🌭', name:'Posh Dog', price: 399};
 
//  cart.add(hotDog);
//  console.log(cart);
//  console.log(cart instanceof Cart);

 // <--------------------------------------------------- Private and Static Class Members

//  class Cart{
//   static name= 'My Cart';
//   //this hash make the items private, so you cant access from the dev tools, or some like that
//   #items;
//   constructor(items=[]){
//     this.#items = Object.freeze(items);
//   }
//   add(item){
//     const state= [...this.#items, item];
//     this.#items = Object.freeze(state);
//     }
//   remove(id){
//       const state = this.#items.filter((item)=> item.id!== id);
//       this.#items = Object.freeze(state);
//     }
// }

// const cart= new Cart();

// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart);
// console.log(cart instanceof Cart);
// console.log(Cart.name);

 // <--------------------------------------------------- Setters and Getters

//  class Cart{
//   static name= 'My Cart';
//   #items;
//   constructor(items=[]){
//     this.#items = Object.freeze(items);
//   }
//   set value(items){
//     this.#items = Object.freeze(items);
//   }
//   get value(){
//     return Object.freeze(this.#items);
//   }
//   get count(){
//     return this.value.length;
//   }
//   add(item){
//     this.value = [...this.value, item];
//     }
//   remove(id){
//       this.value = this.value.filter((item)=> item.id!== id);
//     }
// }
// const cart= new Cart();
// const hotDog = {id:'🌭', name:'Posh Dog', price: 399};

// cart.add(hotDog);
// console.log(cart.count);
// console.log(cart.value);
// console.log(cart instanceof Cart);
// console.log(Cart.name);
// cart.remove('🌭');
// console.log(cart.value);


 // <--------------------------------------------------- Class Inheritance via ‘extends’

 class Cart{
  static name= 'My Cart';
  #items;
  constructor(items=[]){
    this.#items = Object.freeze(items);
  }
  set value(items){
    this.#items = Object.freeze(items);
  }
  get value(){
    return Object.freeze(this.#items);
  }
  get count(){
    return this.value.length;
  }
  add(item){
    this.value = [...this.value, item];
    }
  remove(id){
      this.value = this.value.filter((item)=> item.id!== id);
    }
}
const cart= new Cart();

class Product{
  id;
  name;
  price;
  constructor(id, name, price){
    this.id=id;
    this.name= name;
    this.price = price;
  }

  get displayName(){
    return `${this.id} ${this.name}`;
  }

}


class Food extends Product{
  extras;
  constructor(id, name, price,extras=[]){
    //la instruccion super invoca la clase a la que se hace el extends
    super(id, name, price);
    this.extras= extras;
  }
}

class Drink extends Product{
  size;
  constructor(id, name, price,size){
    super(id, name, price);
    this.size= size;
  }
}
const hotDog = new Food('🌭', 'Posh Dog' , 399, ['mustard']);
const burrito = new Food('🌯', 'Super burrito' , 449, ['cheese', 'onion']);

const smallDrink = new Drink('🥤' , 'Big Slurp' , 199, 'small');
const mediumDrink = new Drink('🥤' , 'Big Slurp' , 199, 'medium');
const largeDrink = new Drink('🥤' , 'Big Slurp' , 199, 'large');

cart.add(hotDog);
cart.add(burrito);
cart.add(smallDrink);
cart.add(mediumDrink);
cart.add(largeDrink);
console.log(cart.value);
console.log(hotDog.displayName);

