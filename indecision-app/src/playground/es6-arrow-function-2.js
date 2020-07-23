// arguments object - no longer bound with arrow functions


// const add = function (a, b) {
//    console.log(arguments); // 55, 1, 1000
//    return a + b;
// };

// console.log(add(55,1,1000));

const add = (a, b) => {
   //console.log(arguments); //error
   return a + b;
};

console.log(add(55,1,1000));


// this keyword - no longer bound

const user = {
   name: 'Andrew',
   cities: ['Philadelphia', 'New York', 'Dublin'],
   printPlacesLived() {
      // console.log(this.name);
      // console.log(this.cities);

      //const that = this;

      // this.cities.forEach(function (city) {
      //    console.log(that.name + ' has lived in ' + city);
      // });
      // return this.cities.map((city) => {
      //    return this.name + ' has lived in ' + city;
      // });
      return this.cities.map((city) => this.name + ' has lived in ' + city);

      // this.cities.forEach((city) => {
      //    console.log(this.name + ' has lived in ' + city);
      // });
   }
};

console.log(user.printPlacesLived());



// Challenge area

const multiplier = {
   // numbers - array of numbers
   // multiplyBy - single number
   // multiply - return a new array where the number have been multiplied
   numbers: [1, 2, 3],
   multiplyBy: 2,
   multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
   }

};

console.log(multiplier.multiply()); //[1, 2, 3] 2 [2, 4, 6]