//import React, { useState } from 'react';
//import { auth } from './firebase-init';
//import { signInAnonymously } from 'firebase/auth';
import Nav from './componetes/Nav';
let key=process.env.REACT_APP_FIREBASE_API_KEY
console.log(key)
function App() {
  return(<div>

    <h1 className='title'>Entre Rimas e Forças Invisíveis</h1>
    <Nav/>
  </div>
  )
}

export default App;
