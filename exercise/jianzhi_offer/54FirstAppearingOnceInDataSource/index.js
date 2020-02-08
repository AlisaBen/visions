//Init module if you need
var str = '';
var singleChar = [];
function Init()
{
    // write code here
    str = '';
    singleChar = [];
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    str += ch;
    const index = singleChar.indexOf(ch);
    if (index >= 0) {
        singleChar.splice(index, 1);
    } else {
        singleChar.push(ch);
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    return singleChar.length === 0 ? '#' : singleChar[0];
}

Insert('g');
Insert('o');
Insert('o');
Insert('g');
Insert('l');
Insert('e')
console.log(FirstAppearingOnce())
// if(-1){
//     console.log(10)
// }
// console.log(4)