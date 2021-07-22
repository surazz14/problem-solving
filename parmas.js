
`
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
Copyright 2009–2021 by Codility Limited. Al
`


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function checkPair(left,right){
//     if (left == '(' && right == ')'){
//       return 1          
//     }
//   if (left == '[' && right == ']'){
//       return 1
//   }
//   if (left == '{' && right == '}'){
//       return 1
//   }
//   return 0
// }

// function solution(S) {
//   if(S.length<1 ) return 1
//   let stack = []
//   for (i=0;i<S.length;i++){
//       if(S[i]==='{' || S[i] === '[' || S[i]=== '('){
//           stack.push(S[i])
//       }
//       else{
//           if(stack.length<1) return 0          
//           left = stack.pop()
//           if(!checkPair(left,S[i])){
//               return 0
//           }

//       }
//   }
//   if(stack.length!==0){
//       return 0
//   }
//   return 1
// }

//refactor solution

function solution(S) {
    const hasMap ={'(':')','[':']','{':'}'}
    let stack = []
    for (i=0;i<S.length;i++){
        if(hasMap[S[i]]){
            stack.push(S[i])
        }
        else{          
            left = stack.pop()
            if( hasMap[left]!= S[i] ){
                return 0
            }
  
        }
    }
    if(stack.length!==0){
        return 0
    }
    return 1
  }
  
  solution('()')
