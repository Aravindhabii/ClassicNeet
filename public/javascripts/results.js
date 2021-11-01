console.log('hello');

//toppers


const box = document.querySelectorAll('.refbox');
const name1 = document.querySelector('.nameStudent');
const score = document.querySelector('.scoreStudent');
const main = document.querySelector('.gridcontainer');
console.log('kok');
const arr = [];

  box.forEach((n)=> {
    // console.log(n.getAttribute('data-name'),'klk');
    // const box = document.createElement("div");
    // box.classList.add('gridbox');
    // const p = document.createElement("h3");
    // box.appendChild(p);
    // p.classList.add('nameStudent');
    // p.innerText = n.getAttribute('data-name');
    // console.log(p.innerText,"lol");
    // main.appendChild(box);
    arr.push({
      name: n.getAttribute('data-name'),
      score: n.getAttribute('data-score')
    })
    
  });
console.log(arr);
// (arr).forEach(async function(person){
//   const name1 = document.querySelector('.nameStudent');
// const score = document.querySelector('.scoreStudent');
//   console.log('outside settime');
//   await setInterval(function(){
//     console.log('inside');
//     name1.innerText = person.name;
//     console.log(name1.innerText);
//     score.innerText = person.score;
//   },2000);    

// });
// for (let i = 0; i < arr.length; i++) {
  
//   var interval = setTimeout(function(){

//     console.log('inside');
//     name1.innerText = arr[i].name;
//     console.log(name1.innerText);
//     score.innerText = arr[i].score;
//     i++;
//   },2000);
  
  
// }
var i = 0;

// while (i<arr.length) {
  
//   console.log('inside');
  
//     name1.innerText = arr[i].name;
//     console.log(name1.innerText);
//     score.innerText = arr[i].score;
//     i++;
  
  
// }

function loopCards(arr) {
  for (var i = 0; i < arr.length; i++) {
      // for each iteration console.log a name
      // and make a pause after it
      (function (i) {
          setTimeout(function () {
              name1.innerText = arr[i].name;
              console.log(arr[i]);
              console.log(name1.innerText);
          }, 3000 * i);
      })(i);
      
  };
}
loopCards(arr);