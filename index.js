// var catMe = require('cat-me')
// console.log("is this working")
// console.dir(catMe);
// catMe('grumpy')
// commonJS module (import export)
// var color = require('colors-cli')
// console.log( color.green_bbt('hello') )

// const a = 23;

// exports.a = a;
// exports.b = 42;
// exports.c = 99;


const cat ={
    name: 'cat',
    age: 3,
}

function catMe(){
    console.log('cat me')
}

const dog={
    name: 'dog',
    age: 4,
}

const test = {
    name: 'test',
}


// default export
export default dog;
// normal export
export {cat, catMe };
export {test};