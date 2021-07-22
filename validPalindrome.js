`
use mirror technique
eg: lol = lol
`

function isPalindrome(S){
    //santilizing sting
    const validString = S.toLowerCase().replace(/[\W_]/g,"")
    //Add pointer
    var left = 0
    var right = validString.length - 1
    
    while(left<right){
        if(validString[left]!==validString[right]){
            return false
        }
        left++
        right--
    }
    return true
}

module.exports = isPalindrome 