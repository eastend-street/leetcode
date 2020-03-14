const reverseList = head => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

// 1週目
// currentの次の値を保存しておく (tmp = 2)
// currentの次の値を１つ前の値にする 1->null
// prev（次で使う）にcurrent(ここでは1)を代入
// currentを2にする

// 2週目
// prev = 1, current = 2
// currentの次の値を保存しておく (tmp = 3)
// currentの次の値を１つ前の値にする 1->null
// prev（次で使う）にcurrent(ここでは1)を代入
// currentを2にする



// temp = 2
// 1 -> null
// prev = 1
// current = 2

// temp = 3
// 2 ->1
// prev = 2
// current = 3
