let arr1 = ['a','b','c'];
let arr2 = [1,2,3];
function ziplist(arr1,arr2){
  if(arr1.length !== arr2.length) return;
  let newArr = [];
  let i = 0;
  while(i < arr1.length){
    newArr.push(arr1[i],arr2[i]);
    i++
  }
  return newArr;
}
function zipListTheSimpleWay(arr1,arr2){
  return _.flatten(_.zip(arr1,arr2));
}
console.log(ziplist(arr1,arr2));
console.log(zipListTheSimpleWay(arr1,arr2));

