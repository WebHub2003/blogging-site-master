let firebaseConfig = {
  apiKey: "AIzaSyD4-i57Mlye6G6k32EvgtvHQJx-vqwws68",
  authDomain: "blogging-website-ef15f.firebaseapp.com",
  projectId: "blogging-website-ef15f",
  storageBucket: "blogging-website-ef15f.appspot.com",  
  messagingSenderId: "47563055284",
  appId: "1:47563055284:web:15b37c91afdd37d317b7e1"
};

firebase.initializeApp(firebaseConfig);

let db= firebase.firestore();

let auth = firebase.auth();
const logoutUser=()=>{
auth.signOut();
location.reload();
}