// Adjacent Duplicates in String https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string

// Prompt Given a string str, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on Str until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.

// Sample Inputs and Outputs Example Two: Input let input = "bookkeeper" Output let expectedOutput = "bper" Explanation "oo", "kk", and "ee" are adjacent duplicates. Removing any pair does not cause more duplicates to appear.

// Example Two: Input let input = "abbaca" Output let expectedOutput = "ca" Explanation "abbaca" -> "aaca" -> "ca"


const arr = []

'abbaca' 

function removeAdjacentDuplicates (str) {
    const uniqueArr = [];
    for(let i = 0; i < str.length; i++){
        if(uniqueArr[uniqueArr.length -1] !== str[i]){
            uniqueArr.push(str[i])
        }
        else {
            uniqueArr.pop()
        }
    }
    return uniqueArr.join('')

}
console.log(removeAdjacentDuplicates('bookkeeper'))
console.log(removeAdjacentDuplicates('abbaca'))




