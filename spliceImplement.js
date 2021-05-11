function spliceImlement(arr, index, count = arr.length - index, ...args) { 
//   let firstPart = newArr.slice(0, index);
//   let thirdPart = newArr.slice(index + count)
  return newArr.slice(index , index + count);
}
list = [1,2,3,4]
spliceImlement(list,2,1,"ha")

console.log(list)