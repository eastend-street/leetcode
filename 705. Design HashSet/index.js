// wrong but pass the test case.
// It needs to change [] to {}

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hash = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.hash.includes(key)) return null 
    if(0 <= key && key <= 1000000) this.hash.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index = this.hash.findIndex((value) => value === key);
    if (index >= 0) this.hash.splice(index,1);
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.hash.includes(key)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */