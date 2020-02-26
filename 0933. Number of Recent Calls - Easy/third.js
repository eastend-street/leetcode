// queue
// accepted
RecentCounter.prototype.ping = function(t) {
  while (t - this.queue[0] > 3000) this.queue.shift();
  this.queue.push(t);
  return this.queue.length;
};
