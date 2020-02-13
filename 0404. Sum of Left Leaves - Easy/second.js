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
    if(!root.left && !root.right) return 0
    
    const helper =(node, isLeft)=>{
        if(node == null){
            return 0
        }
        // ネストする
        // isRight → isLeft
        if(!node.left && !node.right){
            if(isLeft){
                return node.val
            }else{
                return 0
            }    
        }
        // helperSumここに書く
        let helperSum = 0

        // helper + right + left
        helperSum += helper(node.right, false)
        helperSum += helper(node.left, true)
        return helperSum
    }
    return helper(root, false)
};