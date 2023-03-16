//function returning another function
const multiply = (x) => {
    return (y) => {
        return x * y;
    }
}

const multiply2 = multiply(2);
const multiply3 = multiply(3);

console.log(multiply2(10));
console.log(multiply3(10));

// function passed into another function
//1
const animals = ['Cow', 'Horse', 'Dog', 'Cat', 'Whale', 'Dolphin', 'Rabbit'];
const longerThan = (n) => {
  return (s) => {
    return s.length > n;
  }
}
console.log(animals.filter(longerThan(3)));  // ['Horse', 'Whale', 'Dolphin', 'Rabbit']
console.log(animals.filter(longerThan(5)));  // ['Dolphin', 'Rabbit']

//2
const fruits = ['apple' , 'banana' , 'orange'];
const largerthan = (n) => {
    return (str) => {
        return str.length > n;
    }
}

console.log(fruits.filter(largerthan(4)));