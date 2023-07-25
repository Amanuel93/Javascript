const people = [
    {id:"1",name:"aman",age:22},
    {id:"2",name:"milka",age:19},
    {id:"3",name:"deborah",age:25}];

    let result;
//to find the total no of the arrays
   // result = people.reduce((acc,person)=> acc + 1 ,0);
    //console.log(result);


    //to find the summation of ages from the arrays
    result = people.reduce((acc,person)=>acc + person.age ,0);
    //console.log(result);


    result = people.reduce((acc,person)=>[...acc,person.name],[]);
   //console.log(result);

  result = people.reduce((acc,person)=>{
    return {...acc,[person.id]:person};
},{})

  //  console.log(result["3"])

  result = people.reduce((a,b)=> a.age > b.age ? a.age : b.age);
// console.log(result);

 result = people.reduce((acc,person) => {
    return{...acc,[person.name]:person};}
    ,{});
   // console.log(result['aman']);

   result = people.reduce((acc,person)=>{
    if(!acc)return true;
    return person.age < 18;
   },false)
   console.log(result);



const orders = [
    {id:"1",status:"pending"},
    {id:"2",status:"pending"},
    {id:"3",status:"cancelled"},
    {id:"4",status:"shipped"}
];

let point;

point = orders.reduce((acc,order)=>{return {...acc,[order.status]:(acc[order.status]||0)+1};},{});

console.log(point);
 

//flatten 

let numbers = [4,5,[5,6]];

 result = numbers.reduce((acc,number)=>acc.concat(number),[]);

 console.log(result);
