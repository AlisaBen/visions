console.log(1);
setTimeout(function(){
    console.log(2);
});
console.log(3);
setTimeout(function(){
    console.log(4)
},100);
console.log(5);
// 1
// 3
// 5
// 2
// 4