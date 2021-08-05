`
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
`

//n** 2 solution
function solution(A) {
    const data = A.sort()
     while(data.length>=1){
         if(data[0]===data[1]){
             data.splice(0,2)
         }
         else{
             break;
         }
     }
     return data[0]
 }


 function solution(A) {
  const newData = new Set()
   for(i =0;i<A.length;i++){
       if(newData.has(A[i])){
           newData.delete(A[i])
       }
       else{
           newData.add(A[i])
       }
   }
   return [...newData][0]

}

function solution(A) {
  let currentNumber = null
  let count = 0

  A.sort().forEach((a) => {
      if (a != currentNumber) {
          if (count % 2 !== 0) {
              return currentNumber
          }

          count = 0
          currentNumber = a
      }
      count += 1
  })

  return currentNumber

  
  // write your code in JavaScript (Node.js 8.9.4)
}