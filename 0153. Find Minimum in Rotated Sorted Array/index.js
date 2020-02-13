// accepted

//　配列の１番目とmidを比べる
// １番目　< mid なら、midの右側を探す。 1番目 > midなら左側を探す
// mid-1がmid　より大きい場合は、midが最小値
// mid + 1がmidより小さいなら,mid +1が最小値

const findMin = nums => {
  if (nums.length === 1) return nums[0]; // 配列に１つしかない場合
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[0]; // 一番最初の要素　< 一番最後の要素の場合はただの配列なので、mid[0]を返す
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid - 1] > nums[mid]) return nums[mid]; // mid-1がmid　より大きい場合は、midが最小値

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1]; // mid + 1がmidより小さいなら,mid +1が最小値

    // どの条件にも当てはまらないので、二分探索を繰り返す
    if (nums[left] < nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
};

// Input: [3,4,5,1,2]
// Output: 1

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
