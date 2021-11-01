console.log('hello');

//toppers


const box = document.querySelectorAll('.refbox');
const name1 = document.querySelectorAll('.nameStudent');
const score= document.querySelectorAll('.scoreStudent');
const img = document.querySelectorAll('.imgTopper')
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
      score: n.getAttribute('data-score'),
      img: n.getAttribute('data-img'),
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
  var k = -5;
  for ( k; k < arr.length; k++) {
    console.log(arr.length);
      // for each iteration console.log a name
      
      k++;
      k++;
      k++;
      k++;
      k++;
      k++;
      console.log('otside loop',k);
      (function  (k) {
          setTimeout(function () {
              
              name1[0].innerText = arr[k].name;
              score[0].innerText = arr[k].score;
              img[0].src = arr[k].img;
              k++;
              name1[1].innerText = arr[k].name;
              score[1].innerText = arr[k].score;
              img[1].src = arr[k].img;
              k++;
              name1[2].innerText = arr[k].name;
              score[2].innerText = arr[k].score;
              k++;
              name1[3].innerText = arr[k].name;
              score[3].innerText = arr[k].score;
              img[3].src = arr[k].img;
              k++;
              name1[4].innerText = arr[k].name;
              score[4].innerText = arr[k].score;
              img[4].src = arr[k].img;
              k++;
              name1[5].innerText = arr[k].name;
              score[5].innerText = arr[k].score;
              img[5].src = arr[k].img;
              k++;
              name1[6].innerText = arr[k].name;
              score[6].innerText = arr[k].score;
              img[6].src = arr[k].img;
              k++;
              name1[7].innerText = arr[k].name;
              score[7].innerText = arr[k].score;
              img[7].src = arr[k].img;
              k++;
              name1[8].innerText = arr[k].name;
              score[8].innerText = arr[k].score;
              img[8].src = arr[k].img;
              k++;
              console.log('inside loop',k);
              console.log(arr[k]);
      

          }, 1000 * k);
          

          
      })(k);
      
  };
}


loopCards(arr);





// while ( i < arr.length) {
//   console.log('inside loop',i);
 
//     (function async (i) {
//        await setTimeout(function () {
//           console.log('inside loopfunc',i);
//             name1[0].innerText = arr[i].name;
//             score[0].innerText = arr[i].score;
//             i++;
//             name1[1].innerText = arr[i].name;
//             score[1].innerText = arr[i].score;
//             var k = i;
//             console.log(arr[i]);
//             console.log(name1.innerText);


//         }, 3000 * i);
//     })(i);
    
// };