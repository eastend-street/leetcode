// binary search
// not accepted
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);

  const bs = () => {
    let higher = this.arr.length - 1;
    let lower = 0;
    let mid;
    while (lower < higher) {
      let mid = Math.floor((lower + higher) / 2);
      if (t - this.arr[mid] == 3000) return mid;

      if (t - this.arr[mid] > 3000) higher = mid - 1;
      else lower = mid + 1;
    }
    return lower;
  };

  console.log(bs());
  return this.arr.length - bs();
};
