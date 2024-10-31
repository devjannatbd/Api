// aray of objects

/*const objects = [{
    name: "jannat",
    profession: "student",
    address: "laxmipasha",
    phone: "6543136546"
  },
  {
    name: "ridoy",
    profession: "student",
    address: "laxmipasha",
    phone: "6543136546"
  },
  {
    name: "misu",
    profession: "student",
    address: "laxmipasha",
    phone: "6543136546"
  },
  {
    name: "robbil",
    profession: "student",
    address: "laxmipasha",
    phone: "6543136546"
  },
];
// console.log(objects);

// promise
const haveCar = false;
let promise = new Promise((resolve, reject) => {
  if (haveCar) {
    resolve([{
      name: "misu",
      profession: "student",
      address: "laxmipasha",
      phone: "6543136546"
    }, {
      name: "robbil",
      profession: "student",
      address: "laxmipasha",
      phone: "6543136546"
    }])
  } else {
    reject("can't find any data")
  }
});
promise.then(res => {
  console.log(res)
});
promise.catch(err => {
  console.log(err)
});


// Arrow function
function jannat(){
  console.log("this is a function");
}
//jannat();
const jannt =function jan(){
  console.log("this is a function2");
}
//jannt();
const ridoy =function(){
  console.log("this is a function3");
}
//ridoy()
const rakib = ()=>{
  console.log("this is a function4");
}
//rakib();
const rafa =(a,b)=>a*b;

// Higher order function

function sum(a,b){
  return a+b;
} 
function multiple(a,b,fun){
  const c = a+b; //30
  const d = a-b;//-10
  function multiply(){
    const m = fun(a,b) 
      return m*c*d
  }
  return multiply()
}
 const result = multiple(10,20,sum);
 console.log(result);

//  callback function
function simple(a,b,cb){
  const c = a+b; //30
  const d = a-b;//-10

  const result = cb(c,d);
  return result;
}

function sum(first, second){
  const sumation = first+second;
  return sumation;
} 
const resultn = simple(10,20,sum);
//console.log(resultn);
const result2 = simple(10,20,function (a,b){
  return a-b
});
//console.log(result2);
const result3 = simple(10,20,function (a,b){
  return a*b;
});
//console.log(result3);
const result4 = simple(10,20,function (a,b){
  return a/b;
});
//console.log(result4);

// desctructring 
const profile = {
  name: "jannat",
  profession: "student",
  age: "22",
  zipcode: "7510",
  address: "Narail"
}
const {
  name,
  profession,
  age,
  zipcode,
  address
} = profile
console.log(name, profession, age, zipcode, address);
const arr = [10,20,50,564,27,33,3256,21465,245,60,45,]
const [jannat,ridoy,refat,rakib,rana,sohel,alamin,sajjad,sabbir,robbil,una] =arr
console.log(sohel);*/

// fech


const randomuser = () => {
  fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => showUser(data.results))

}
const showUser = values => {
  const containerDiv = document.getElementById("container")
  // for(const value of values) {
  //   console.log(value)
  // }
  const result = values.forEach(value => {
     console.log(value)
    const div = document.createElement('div')
    div.innerHTML = `<p>${value.name.title} ${value.name.first} ${value.name.last}</p>
     <img src="${value.picture.thumbnail}" alt="">
   `
    containerDiv.appendChild(div)
  })

}
randomuser();