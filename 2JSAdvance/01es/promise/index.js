function loadImg(src, callback, fail) {
	var img = document.createElement('img');
	img.onload = function(){
		callback();
	}
	img.onerror = function(){
		fail();
	}
	img.src = src;
}
var src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580638422973&di=05d2f11208facf22839106d770457709&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F109437%2Ff%2F7334714.jpg";

loadImg(src, function(){
	console.log('success');
}, function(){
	console.log('fail');
})