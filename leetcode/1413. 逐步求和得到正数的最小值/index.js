/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
  let len = nums.length
let befores = new Array(len + 1)
befores[0] = 0
for (let i = 0; i < len; i++) {
  befores[i + 1] = befores[i] + nums[i]
}
let subs = befores.slice(1)
subs.sort((a, b) => a - b)
if (subs[0] > 0) {
  return 1
} else {
  return 1 - subs[0]
}
};