//ARRAY DESTRUCTURING

const names=["Saleh","Ali","Aslam","Abid","Hammad",];
const [first,second, , ,last]=names; // getting by using comma separated

console.log(first,second, last);//Saleh Ali Hammad

//Nested Array
const names2=["Saleh",["Bheesham","Chander","Herjiani"],"Ali","Aslam","Abid","Hammad",];
const [fisrt1,[,name1,name2],third3]=names2;

console.log(fisrt1,name1,name2,third3);//Saleh Chander Herjiani Ali

const [,,,fourth4]=names2;

console.log(fourth4);//Aslam


function calculation(...nums){
    const sum=nums.reduce((a,b)=>a+b,0);
    const multiply=nums.reduce((a,b)=>a*b,1);
    const avg=sum/nums.length;

    //returning ARRAY 
    return [sum,multiply,avg];
}

//returning ARRAY Destructured
const [sum,multiply,avg]=calculation(1,2,3,4)

console.log(sum,multiply,avg);

// ----------------------------------------------------------------

//OBJECTS DESTRUCTURING

const person={
    myname:"Saleh",
    city:"Karachi",
    country:"Pakistan",
}

const {myname,city,country}=person;
console.log(myname,city,country);

const {myname:firstName,city:hometown,country:homeLand}=person;

console.log(firstName,hometown,homeLand);


const person2 ={
    hobbies:["Reading","Cooking","Gardening"],
    address:{
        street:"123 Main St",
        cityname:"Karachi",
        countryname:"Pakistan",
    }
}

const {hobbies:[hobby1,hobby2,hobby3] , address:{street,cityname,countryname}}=person2;

console.log( "Hobbies :" ,hobby1,hobby2,hobby3);

console.log("Address : ",street,cityname,countryname);

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  myVehicle(vehicleOne);
  
  function myVehicle({type, color, brand, model,year}) {    
    const message = year+': My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message);
    
  }
