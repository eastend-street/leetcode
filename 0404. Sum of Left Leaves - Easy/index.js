/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function sumOfLeftLeaves(root) {
    if(!root) return 0
    if(root.left == null && root.right == null) return 0
    const helper =(node, isRight)=>{
        let helperSum = 0
        if(node == null){
            return 0
        }
        // ネストする
        // isRight → isLeft
        if(node.left == null && node.right == null && isRight == false){
            return node.val
        }else if(!node.left && !node.right && isRight){
            return 0
        }
        
        // helperSumここに書く
        // helper + right + left
        helperSum += helper(node.right, true)
        helperSum += helper(node.left, false)
        return helperSum
    }
    return helper(root, false)
};