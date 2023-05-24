    

    var data =[20,30,45,87,78,45];

    let max= data[0] ;

    for (let i = 1; i < data.length; i++) {

       if(data[i] > max) {
      max=data[i]
    }
    
  }
  console.log(max)
