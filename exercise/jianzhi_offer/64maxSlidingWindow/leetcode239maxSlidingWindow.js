/**执行用时124ms 击败47%，内存消耗41mb，击败72% */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) return []; 
    if (k === 1) return nums
    let start = 0;
    let end = start + k;
    const arr = [];
    const len = nums.length;
    while(end <= len) {
        let max = nums[start];
        for (let i = start;i < end;i++) {
            max = nums[i] > max ? nums[i] : max;
        }
        arr.push(max);
        start += 1;
        end += 1;
    }
    return arr;
};

//**执行用时96ms 击败91.17%，内存消耗41mb，击败83.28% */
// 特殊情况提前截断，可以减少用时
var maxSlidingWindow1 = function(nums, k) {
    if (nums.length === 0 || k === 0) return []; 
    if (k === 1) return nums
    let start = 0;
    let end = start + k;
    const arr = [];
    const len = nums.length;
    const tmp = []; // 存储窗口中的数据，根据从大到小排列
    while(end <= len) {
        if (start === 0) {
            for (let i = start;i < end;i++) {
                if (tmp.length === 0) tmp.push(nums[i]);
                else {
                    for(let j = tmp.length - 1;j >= 0;j--) {
                        if (tmp[j] < nums[i])tmp.splice(j, 1);
                        else {
                            break;
                        }
                    }
                    tmp.push(nums[i]);
                }
            }
            arr.push(tmp[0]);
            start += 1;
            end += 1;
        } else {
            if (tmp[0] === nums[start - 1]) {
                tmp.shift();
            }
            for(let j = tmp.length - 1;j >= 0;j--) {
                if (tmp[j] < nums[end - 1])tmp.pop();
                else {
                    break;
                }
            }
            tmp.push(nums[end - 1]);
            arr.push(tmp[0]);
            start += 1;
            end += 1;
        }
    }
    return arr;
};

/**用时96ms，击败91%，内存消耗41，击败60% */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow2 = function(nums, k) {
    var len = nums.length;
    if(len===0||k===0){
        return [];
    }
    if(k===1){
        return nums;
    }
    var res = [];
    var max = Math.max.apply(null,nums.slice(0,k)); // 第一个滑动窗口,用api直接获取最大值
    res.push(max);
    for(var i=k;i<len;i++){
        if( nums[i-k]===max ){ // 如果窗口滑动时，出去的数据和max相同的话，重新计算窗口内的最大值
            max = Math.max.apply(null,nums.slice(i-k+1,i+1));
        }
        max = Math.max(max,nums[i]); // 比较max和新增加的数据大小关系
        res.push(max);
    }
    return res;
};

var arr = [1,3,-1,-3,5,3,6,7];
var res = maxSlidingWindow1(arr, 2);
console.log(res);
