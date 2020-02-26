function RecentCounter() {
  this.arr = [];
}

/**
 * @param {number} t
 * @return {number}
 */
// accepted
// 前からサーチするので遅い
 RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);
  let count = 0;
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[this.arr.length - 1] - this.arr[i] <= 3000) count++;
    else break;
  }
  return count;
};
