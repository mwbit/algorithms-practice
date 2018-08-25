function findSingle(A){

    
    if((A.length % 2 == 1) && (A.length>0 && A.length<=1000000)) {
        
            for(let i = 0; i < A.length; i++){
                var first = A.indexOf(A[i]);

                if ((A[i]<1 || A[i]>1000000000)){
                    return false
                }

                var second =  A.lastIndexOf(A[i]);
    
                if( (first != -1)  && (first == second)){
                    return A[i];
                }
            }
       
    }else{
        return false
    }

}
console.log(findSingle([9,3,9,3,9,7,9]))


