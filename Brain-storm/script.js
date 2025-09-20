

// let square = (n)=>console.log(n*n);

// square(5)

// function fun(a,b){
//     return a+b;
// }
// let addition = function(a,b){
//     return a+b;
// }
// let result = addition(5,5)
// console.log(result)
// let y = (a,b)=> a+b;
// console.log(y(8,6))



// let facts =function(n){
//     let f =1;
//     for(let i =n;i>=1;i--){
//         f=f*i;
//     }
//     return f;
// }
// let result = facts(5)
// console.log(result)


// function add(a,b){
//     console.log(a+b)
// }
// function sub(a,b){
//     console.log(a-b)
// }
// function cal(f1,f2){
//     f1(5,6);f2(5,2)
// }
// cal(add,sub)

function cub(value){
    value(5)
}
function red(n){
    console.log(n*n*n);
}
cub(red)