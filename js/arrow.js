// function declaration
function add(first, second){
    const total = first + second;
    return total;
}

//function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

function add(first, second){
    const total = first + second;
    return total;
}

function add4(first, second){
    return first + second;
}    

const add5 = function(first, second){
    return first + second;
}

//arrow funtion
const add6 = (first, second) => first + second;

const result = add(10,20);
console.log(result);

// interview question : difference between function declaration and arrow function


function getSum(a, b=9){
    return a+b;
}
console.log(getSum(2, 7));

const y = x => x*x; 
const z = y(5);
console.log(z);

// const division= num1, num2 => console.log(num1 /num2)

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 

console.log(newCars);
