var obj = {a: 100, b: 200};
for (var item in obj) {
	console.log(item);
}
console.log(item + 'aaa');

const obj1 = {a: 100,b:200};
for (let item1 in obj1) {
	console.log(item1);
}
console.log(typeof item1);

function fn() {
	console.log(this);
}
fn.call({a:100})
