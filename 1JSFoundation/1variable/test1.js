/*typeof 能得到哪些基本类型 */
const print = (str) => {
    console.log(str);
}
print(typeof 124); //number
print(typeof '23'); //string
print(typeof {});//object
print(typeof print);//function
print(typeof true);//boolean
print(typeof undefined);//undefined
print(typeof [2,3]);