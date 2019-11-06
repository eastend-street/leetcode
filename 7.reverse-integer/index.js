/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let strNum = String(x);
    let result;
    if(x < 0){
        strNum = strNum.slice(1);
        result = -parseInt(strNum.split("").reverse().join(""));
    }else{
        result = parseInt(strNum.split("").reverse().join(""));
    }
    
    if(result < 2147483647 && result > -2147483647){
        return result
    }
    return 0;
};