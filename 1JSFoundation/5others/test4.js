function forEach(obj, fn) {
    var key;
    if(obj instanceof Array){
        obj.forEach(function(item, index) {
            fn(item, index);
        });
    } else {
        for (key in obj){
            if(obj.hasOwnProperty(key)){
                fn(key, obj[key]);
            }
        }
    }
}

var arr = [1,2,3];
forEach(arr, function(item, index) {
    console.log(item, index);
})
var obj = {a: 1, b: '45'};
forEach(obj, function(key, value) {
    console.log(key, value);
})