
 var A = [0,1,1,1,1]
 var B = [0,1,0,1,1]
 var C = [0,0,0,0,0,0]
 function ADD (A, B, C) {
    for (var i = C.length - 1; i >= 1; i--) {
        C[i] += A[i-1] + B[i-1] 
        if (C[i] >= 2){
            C[i-1] ++;
            C[i] -= 2;
        }
    }
 }
 ADD(A,B,C)
 console.log(A,B,C)