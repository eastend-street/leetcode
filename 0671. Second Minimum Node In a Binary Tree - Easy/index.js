// 最初は２番目に大きい値を探す処理 minと比べる
// 2番目に大きい値があれば次に大きい値が存在するかチェック。あった段階でその値を返す。


// not completed
const findSecondMinimumValue = (root) => {
    
    let min = root.val;
    const helper = (node, isSecond)=> {
        if (!node && min == node.val) return -1;
        if (node.val > min) return node.val
        min  = Math.min(min, helper(node.left));
        min  = Math.min(min, helper(node.right));
    }
    helper(root, false)
    console.log(min)
    return 
};


// [1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1]
// [2,2,5,null,null,5,7]

// -1かそうじゃないかでチェック

const findSecondMinimumValue = (root) => {
    
    let min = root.val;
    let second = -1;
    const helper = (node, isSecond)=> {
        if (!node) return;
        if(min < node.val && !isSecond){
          second = node.val
          isSecond = true
        } 
        // if(node.val < second && min < node.val){
        //   second = node.val
        //   console.log(second)
        //   return 
        // }
        if(second < node.val && isSecond){
          console.log(second, node.val)
          return  
        } 
        helper(node.left, isSecond);
        helper(node.right, isSecond);
    }
    helper(root, false)
    return second
};

// if文の条件式で混乱した時は、絶対あり得ないケース順に弾いていく。
// min === node.valが今回はまずチェックする条件なので、それを最初に弾く。
// min !== node.valの場合はそれより深い値はチェックしなくていいのでdfsは終える。