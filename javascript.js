//1.შექმენით 5 ელემენტიანი მასივი,რომლის თითოეული 
//ელემენტი არის რიცხვი,console.log გამოიტანეთ ამ მასივის
//ყველა ელემენტის ჯამი//

let number = [1, 2, 3, 4, 5];
let sum = number[0]+ number[1] + number[2] + number[3] + number[4];
console.log(sum);


//2. შექმენით 3 ელემენტიანი მასივი,რომლის თითოეული
//ელემენტი არის ობიექტი,რომელსაც აქვს შემდეგი ველები
//(properties): name,age,address.//

let object = [
    {
    name: "Nini",
    age: 20,
    address: "Chavchavadze str",
    },
    {
     name: "Giorgi",
     age: 18,
     adress: "rustaveli str",
    },
    {
    name: "Mariami",
    age: 25,
    address: "abashidze str",
    }

];

//3.console.log ში გამოიტანეთ 3 სტრინგი "My name is 
//(#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name 
//ის მნიშვნელობა)",My age is (#2 დავალების 0 ინდექსზე
//მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is 
//(#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"

let name = (object[0].name);
let age = (object[0].age);
let address = (object[0].address);

console.log("my name is" + name);
console.log("my age is" + age);
console.log("my address is" + address);



//4.დაწერეთ if/else statement სადაც შეამოწმებთ #2 
//დავალებაშ 1 ინდექსზე მყოფი ობიექტში არსებულ age 
//ველის მნიშვნელობას თუ ნაკლებია 19ზე console.log 
//ში დაბეჭდეთ "i am a teenager" დანარჩენ შეთხვევაში
//დაბეჭდეთ "i am an adult"//

if (object[0]. age < 19) {
    console.log("I am a teenager");
} else{
    console.log("I am an adult");
}


//5. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული 
//ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში 
//გამოიტანოთ ამ მასივის ყველა ელემენტი.

let el = [100, 150, 200, 250, 300];
for (let i = 0; i < el; i++){
    console.log(el);
}
