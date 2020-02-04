/**执行用时124ms 击败47%，内存消耗41mb，击败72% */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) return [];
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

//
var maxSlidingWindow1 = function(nums, k) {
    if (nums.length === 0) return []; 
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
                if (tmp[j] < nums[end - 1])tmp.splice(j, 1);
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
var arr = [1,3,-1,-3,5,3,6,7];
var res = maxSlidingWindow1(arr, 2);
console.log(res);
