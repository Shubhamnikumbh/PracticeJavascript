

//  let arr =[1,2,3,4,5]

//  let n=3;

//  function rotate (arrValue,num){
//     for (let index = 0; index < num; index++) {
//         let lastitem = arrValue.pop()
//         arrValue.unshift(lastitem)
//         console.log("result",arrValue)
//     }
//  }

//  rotate(arr,n)

//   let arr =['aaa','bbb','ccc','aaa','bbb'];

//   let obj ={};

//   for (let index = 0; index < arr.length; index++) {
    
//    let item = arr[index] ;

//    if (obj[item]) {
//     obj[item]= obj[item] + 1 ;
//    } else {
//     obj[item]= 1 ;
//    }
    
//   }

//   console.log("result" ,obj)


    let data = [10,12,4,,58,35,27,94,58];
     
     let max= data[0];

    for (let index = 1; index < data.length; index++) {
        
       
        if (data[index] > max) {
          max = data[index];
        }

      
    }
     console.log(max)