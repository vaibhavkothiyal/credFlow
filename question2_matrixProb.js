// Given a matrix of m x n elements, where m is the number of rows and n is the
// number of columns. Write a program to return all elements of the matrix in spiral
// order.

var N=6;
var M=5;
var matrix=[
[1,  2, 3, 4, 5],
[6,  7, 8, 9,10],
[11,12,13,14,15],
[16,17,18,19,20],
[21,22,23,24,25],
[11,12,13,14,15]];
  var left=0; var right=M-1; var top=0; var bottom=N-1; var count=0;
  var sum="";
  while(N*M>count){
    for(var i=left;i<=right && N*M>count;i++){
      sum=sum+matrix[top][i]+" ";
      count++;
    }
    top++;
    for(var i=top;i<=bottom && N*M>count;i++){
      sum=sum+matrix[i][right]+" ";
      count++;
    }
    right--;
    for(var i=right;i>=left && N*M>count;i--){
      sum=sum+matrix[bottom][i]+" ";
      count++;
    }
    bottom--;
    for(var i=bottom;i>=top && N*M>count;i--){
      sum=sum+matrix[i][left]+" ";
      count++;
    }
    left++;
  }
  console.log(sum);