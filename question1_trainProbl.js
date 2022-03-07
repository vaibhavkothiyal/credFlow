// Given arrival and departure times of all trains that reach a railway station. Find the
// minimum number of platforms required for the railway station so that no train is kept
// waiting. Consider that all the trains arrive on the same day and leave on the same
// day. Arrival and departure time can never be the same for a train but we can have
// the arrival time of one train equal to the departure time of the other. At any given
// instance of time, the same platform can not be used for both departures of a train
// and the arrival of another train. In such cases, we need different platforms

let arr= [11, 33, 34, 28, 55, 38]
let dep= [22, 35, 55, 35, 57, 45] 

arr=arr.sort((a,b)=>a-b);
dep=dep.sort((a,b)=>a-b);


let plat=1,maxp=1
let i=1,j=0;

while(i<arr.length && j< dep.length){
  if(arr[i]<=dep[j]){
    plat++;i++
  }else if(arr[i]>dep[j]){
    plat--;j++;
  }
  maxp=Math.max(maxp,plat)
}

console.log(maxp)