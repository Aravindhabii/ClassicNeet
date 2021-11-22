const removesection = document.querySelector('.removesection');
const alerter = document.querySelectorAll('.alert')

setTimeout(function(){
    alerter.forEach(function(item){
        item.classList.remove('show')
        removesection.parentNode.removeChild(removesection);
    })
},4000);



// window.addEventListener('DOMContentLoaded',()=>{
//    const firebaseConfig = {
//      apiKey: "AIzaSyBLUhzHBAEAqfxM24_45G44aSjp4MP8S4g",
//      authDomain: "classicneet-e8e04.firebaseapp.com",
//      databaseURL: "https://classicneet-e8e04-default-rtdb.firebaseio.com",
//      projectId: "classicneet-e8e04",
//      storageBucket: "classicneet-e8e04.appspot.com",
//      messagingSenderId: "191081661669",
//      appId: "1:191081661669:web:8ccd54d36a085d4ff3800c",
//      measurementId: "G-2H8Y7EWH2J",
//    }; 
//    firebase.auth().setPersistance(firebase.auth.Auth.persistance.None);
//    document.getElementById("login").addEventListener("submit",(event)=>{
//        event.preventDefault();
//        const login = event.target.login.value;
//        const password = event.target.password.value;

//        firebase.auth().signInWithEmailAndPassword(login,password).then(({user})=>{
//            return fetch('/sessionLogin',{
//                method:"POST",
//                headers:{
//                    Accept: "application/json"
//                }
//            })
//        })
//    })
// })


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase.auth().onauthStateChanged((user)=>{
//     if (user) {
//         location.replace("/admin")
//     }
// })
