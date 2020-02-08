/**leetcode295 hard */
/**击败94% */
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    var len = this.data.length;
    if (len === 0) {
        this.data.push(num);
    } else {
        // var i = len - 1;
        // for (; i >= 0; i--) {
        //     if (this.data[i] > num) {
        //         this.data[i + 1] = this.data[i];
        //     } else break
        // }
        // this.data[i + 1] = num;
        var start = 0;
        var end = len; // 保证end一定比start大
        var middle = Math.floor((end - start) >> 1) + start;
        while (start < end) { // 因为end初始值是越界的，所以这里不比较相等的情况
            middle = Math.floor((end - start) >> 1) + start;
            this.data[middle] > num ? end = middle : start = middle + 1;
            // if (this.data[middle] > num) {
            //     end = middle;
            // } else {
            //     start = middle + 1;
            // }
        }
        this.data.splice(start, 0, num)

    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // console.log(this.data)
    var len = this.data.length;
    // var index = Math.floor(len / 2);
    // if (len % 2 === 0) {
    //     return (this.data[index] + this.data[index - 1]) / 2
    // } else {
    //     return this.data[index]
    // }
    const mid = Math.floor(len / 2);
	return (len % 2 === 0) ? (this.data[mid - 1] + this.data[mid]) / 2 : this.data[mid];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder()
// obj.addNum(1)
// obj.addNum(2)
// console.log(obj.findMedian())
// obj.addNum(3)
// console.log(obj.findMedian())
for (let i = 1; i < 11;i++){
    obj.addNum(i)
}
console.log(obj.findMedian())