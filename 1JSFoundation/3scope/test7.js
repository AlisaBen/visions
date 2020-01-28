function isFirstLoad(){
    var _list = [];
    return function(id){
        if(_list.indexOf(id) >= 0){
            return false;
        }else{
            _list.push(id);
            return true;
        }
    }
}
var firstLoad = isFirstLoad();
console.log(firstLoad(10)); // true
console.log(firstLoad(10)); // false
console.log(firstLoad(30)); // true