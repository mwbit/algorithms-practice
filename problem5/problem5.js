function solution(A) {
    const size = A.length;
       let sum = 0;
   
       for (i=0;i<size;i++){
           sum += A[i];
       }
       
       return (((size+ 1)*(size + 2))/2) - sum
       
   }


   console.log(solution([2,3,1,5]))