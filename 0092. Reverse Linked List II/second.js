// accepted
// headを３つに分割して、最後につなぎ合わせる方法
// 1つめ：始めから反転する１つ前まで
// 2つめ:反転するリスト(mからnまで)
// 3つめ:反転した１個後から最後まで

const reverseBetween = (head, m, n) => {
  let dummy = head; // 最後にheadを返すので、dummyをポインタとする
  let headTail = null; // 1つめのリストの最後の位置を取って置く変数
  for (let i = 1; i < m; i++) {
    headTail = dummy; // headTailは1つめのリストの最後まで
    dummy = dummy.next; //２つめのリストの始めまで進める
  }

  const reverseTail = dummy; //反転すると、2つめのリスト始めが最後になるので、これも変数で取って置く
  let prev = dummy; // ２つめのリストの始めをprevとする
  let current = dummy.next; // 2つめのリストの2個目をcurrentとして反転させていく
  for (let j = 0; j < n - m; j++) {
    //n-m分の回数反転する
    // const temp = current.next;
    // current.next = prev;
    // prev = current;
    // current = temp;
    // currentの次をprevにして反転する。 例) 2->1  →  1->2
    // [次のループの準備]その後currentをcurrent.nextにして１つ進める、そしてprevをcurrentに入れる
    [current.next, prev, current] = [prev, current, current.next];
    // [current.next, current, prev] = [prev, current.next, current]
  }
  reverseTail.next = current; // 2つめの反転したリストの最後を3つ目の最初に繋げる(この時はcurrentが3つめの最初になっている)
  if (!headTail) return prev; // headTailがnulの場合、つまりmが1の場合はprev(2つめ以降のリスト)を返す
  headTail.next = prev; // 1つ目と2つ目を繋げる
  return head; //　すべて連結したリストを返して終了
};

// 分割代入の解説
// https://leetcode.com/problems/reverse-linked-list/discuss/58212/4-lines-javascript-iteratively
