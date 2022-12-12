//--------------------Assignment 01;
console.log('-'.repeat(10)+'Assignment','01');
{
    class Car {
        constructor(name, model, price){
            this.name = name;
            this.model = model;
            this.price = price
        }
        //Methods
        run(){
            return `Car's Running Now`;
        }
        stop(){
            return `Car's Stopped`;
        }
    }
    
    let carOne = new Car('Toyota', '1500', 20000);
    let carTwo = new Car('Firary', '2020', '$50000');
    let carThree = new Car('Tesla', '2022', '$80000') 

    console.log(`My first car lable's ${carOne.name} and its Model's ${carOne.model} and its Price's ${carOne.price}`);
    console.log(`and it also work, look...`)
    console.log(carOne.run());
    // Needed Output
    
    "Car One Name Is MG And Model Is 2022 And Price Is 420000"
    "Car Is Running Now"
}

//--------------------Assignment 02;
console.log('-'.repeat(10)+'Assignment','02');
{
    class Phone {
        constructor(name, serial, price) {
          this.name = name;
          this.serial = serial;
          this.price = price;
        }
      }
      
      // Write Tablet Class Here
      class Tablet extends Phone{
        constructor(name, serial, price, size){
            super(name, serial, price);
            this.size = size || 'Unkown';
        }
        fullDetails(){
            return `${this.name} Serial's ${this.serial} And Size's ${this.size}`
        }
      }

      let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
      let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
      let TabletThree = new Tablet("LG", 250450650, 650);
      
      console.log(`${TabletOne.fullDetails()}`);
      // iPad Serial is 100200300 And Size Is 12.9
      
      console.log(`${TabletTwo.fullDetails()}`);
      // Nokia Serial is 350450650 And Size Is 10.5
      
      console.log(`${TabletThree.fullDetails()}`);
      // LG Serial is 250450650 And Size Is Unknown
}

//--------------------Assignment 03;
console.log('-'.repeat(10)+'Assignment','03');
{
    // Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
      this.showData = this._showData;
    }
    get _showData(){
        let regex = /\d{4}(?!\-|\b)/g;
        let card = String(this.#c);
        return card.replace(regex,'$&\-')
    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined
}

//--------------------Assignment 04;
console.log('-'.repeat(10)+'Assignment','04');
{
    // Write Your Code Here
    String.prototype.addLove = ()=>{
        return `I Love Elzero Web School, of course I do..D:`
    }

    // Do Not Edit Below
    let myStr = "Elzero";
    console.log(myStr.addLove()); // I Love Elzero Web School
}

//--------------------Assignment 05;
console.log('-'.repeat(10)+'Assignment','05');
{
    const myObj = {
        username: "Elzero",
        id: 100,
        score: 1000,
        country: 'Egypt',
      };
      
      // Write Your Code Here
      Object.defineProperties(myObj, {
        score: {
            enumerable: true,
            writable: false,
            configurable: true,
        },
        id: {
            enumerable: false,
            writable: true,
            configurable: true,
        }
      })
      
      delete myObj.country;

      myObj.score = 500;
      
      for (let prop in myObj) {
        console.log(`${prop} => ${myObj[prop]}`);
      }
      
      Object.defineProperty(myObj, 'id', {
            enumerable: true,
            writable: true,
            configurable: true,
      })

      console.log(myObj);
      
      // Needed Output
      
      "username => Elzero"
      "score => 1000"
    //   {username: 'Elzero', score: 1000, id: 100}
}