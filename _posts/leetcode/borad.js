


var generateMatrix = function(n) {

   var matrix = [];
   for (var i = 0; i < n; i++) {
      matrix.push(new Array(n))
   }
   var left = 0; right = n-1; top = 0; bottom = n-1;
   var num = 1;

   while (num <= n*n) {

      for (var i = left; i <= right; i++) matrix[top][i] = num++;
      top++;

      for (var i = top; i <= bottom; i++) matrix[i][right] = num++;
      right--;

      for (var i = right; i >= left; i--)  matrix[bottom][i] = num++;
      bottom--;

      for (var i = bottom; i >= top; i--) matrix[i][left] = num++;
      left++;
   }
   console.log(matrix);
};

generateMatrix(5)