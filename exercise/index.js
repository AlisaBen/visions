const test1 = () => {
	// let 不存在变量提升，并且es6中存在块级作用域
	let x = 10;
	let foo = () => {
		console.log(x);
		let x = 20;
		x++;
	}
	foo();
}


// test1();

const test2 = () => {
	var val = 'f';
	console.log('value is ' + val === 0 ? 'define' : 'undefine');
}
test2();
