/*什么时候使用== */
const obj = { a: 1, c: null };
/*这里相当于obj.a === null || obj.a === undefined */
if(obj.a == null){
    console.log('fff');
}else if(obj.b == null){
    console.log(obj.b); //undefined
}