const emp = [
  { name: "a", sal: 300 },
  { name: "b", sal: 200 },
  { name: "b", sal: 400 },
  { name: "a", sal: 500 },
  { name: "a", sal: 300 },
  {name:'c',sal:200}
];

const total ={} ;

emp.forEach((employee) => {

   const {name,sal} = employee

   if (total[name]) {
      
       total[name] += sal
   } else {
      total[name] = sal
   }
  
});

console.log(total)

