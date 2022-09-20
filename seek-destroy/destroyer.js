function destroyer(arr) {
    let newArr =[];
  
    for(let i = 0; i < arr.length; i++) {
      for(let y=1; y < arguments.length; y++){
        if(arr[i] === arguments[y]){
          arr.splice(i, 1)
        } 
      }
    }
    console.log(arr)
    return arr;
  }
  
  //destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5)

  //second attempt

  function destroyer(arr) {
    let newArr =[];
  
    newArr = arr.filter(item => {
      for(let i=1; i < arguments.length; i++) {
        if(item == arguments[i]){
          return item
        }
      }
    })
    console.log(newArr)
    return arr;
  }
  
  //destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
  //destroyer([3, 5, 1, 2, 2], 2, 3, 5)
  
  