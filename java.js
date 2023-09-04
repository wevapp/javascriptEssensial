const product = [
    {
        name: 'Laptop',
        price: 100,
        pcs: 25
    },{
        name: 'Desktop',
        price: 200,
        pcs: 25
    },{
        name: 'Phone',
        price: 300,
        pcs: 25
    }
]

// Map Method---------------------------------------------
product.map((item, index)=>{
    //console.log(item)
}) 
// output { name: 'Laptop', price: 100 }
// { name: 'Desktop', price: 200 }
// { name: 'Phone', price: 300 }

let sum = product.map(item => item.price * item.pcs)
//console.log(sum)


//filter method---------------------------------------------
let newProduct = product.filter(item => item.price > 100)
//console.log(newProduct) // output [ { name: 'Desktop', price: 200 }, { name: 'Phone', price: 300 } ]

// some method (like boolean - true or false)-----------------
product.some((item,index)=>{
    //console.log(item.price > 200)
})

// Find method -----------------------------------------------
product.find((item,index)=>{
    //console.log(item.price > 100)
})

// Reduce Method---------------------------------------------
let totalCost = product.reduce((total, item)=>{ // total is variable
    total = total + item.pcs // lets count all product
    return total
},0) // 0 for value of total variable
//console.log(totalCost)

// Premise Method -------------------------------------------
// just True or false
let promise = new Promise((resolve,reject)=>{
    let bool = 'true'
    
    //Ternary Operator
    bool === 'true' ? resolve() : reject()

    /*if(bool === 'true'){
        resolve('True')
    }else{
        reject('False')
    }*/
})
// for ternary operation
/*promise
.then(() => console.log('Promise was Resolved'))
.catch(() => console.log('Promise was rejected'))*/

// for if else
/*promise.then((message) => console.log('Promise was Resolved')).catch((message) => console.log('Promise was rejected'))*/

// fetch API using JSON Placeholder Online---------------
/*
    Read me goto terminal(ctrl + `) type this command
    (make sure you have installed node js)
    npm init
    Enter 5x
    yes
    npm install node-fetch

    after install open package.json then type followed by main
    this "type" : "module",
*/

import fetch from "node-fetch"
const url = 'https://jsonplaceholder.typicode.com/todos/1';

    // fetch using promise
/*const fetchPromise = fetch(url)
fetchPromise
    .then((response) => response.json())
    .then((response) => console.log(response))*/

    //fetch using Async and Await in Javascript cleaner than promise method
const fetchPromise = async () => {
    const res = await fetch(url)
    const response = await res.json()
    //console.log(response)
}
fetchPromise()

// Javascript modeules----------------------------------------------
// named
import {name, age} from "./person.js"
console.log(name,age)

// default
import message from "./person.js"
import { maxHeaderSize } from "http"
console.log(message())