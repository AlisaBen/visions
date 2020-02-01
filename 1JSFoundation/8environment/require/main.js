// main.js
require(['./a.js'], function (a) {
    var date = new Date();
    a.printDate(date);
})