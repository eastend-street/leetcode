/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    let result = []
    
    for(let x = 1; x < 1000; x++){
        for(let y = 1; y < 1000; y++){            
            const funcResult = customfunction.f(x,y)
            if(funcResult === z){
                result.push([x,y])
                break;
            }
            if(funcResult > z){
                break;
            }
        }
    }
    return result
};

// 全くわからない場合は、総当たりのコードを書いて、条件を追加していく
// 内側のforループは1-1000の総当たりなので、binary searchで書いたほうが早い