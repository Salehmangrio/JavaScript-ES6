function Hello(){
    console.log("Hello Dear");
    
}

Hello();
const hello = ()=>{
    console.log("Hello from Arrow");
}
hello();

const greet = (name) => {
    console.log(`Hello, ${name}!`);
}

greet("Saleh");



// Immediately Invoked Function Expression Called here
(function (a){
    console.log("Anonymous Function : Also Immediately Invoked Function"); 
})
();

(function (a,b){ 
    console.log("Anonumous Function of Parameter:", a,b);
})
("Saleh","Mangrio");






