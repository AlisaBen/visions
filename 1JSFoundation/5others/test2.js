function formatDate(dt) {
    if(!dt){
        dt = new Date();
    }
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var date = dt.getDate();
    if(date < 10){
        date = `0${date}`;
    }
    if(month < 10){
        month = `0${month}`;
    }
    return `${year}-${month}-${date}`;
}
var date = formatDate(new Date());
console.log(date);