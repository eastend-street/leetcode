function RecentCounter() {
  this.arr = [];
}

/**
 * @param {number} t
 * @return {number}
 */
// accepted
// 後ろからサーチ。まだ遅い
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);
  let count = 0;
  for (let i = this.arr.length - 1; i >= 0; i--) {
    if (this.arr[this.arr.length - 1] - this.arr[i] <= 3000) count++;
    else break;
  }
  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
