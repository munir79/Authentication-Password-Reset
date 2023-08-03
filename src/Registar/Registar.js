import React, { useState } from 'react';

import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
const auth=getAuth(app);




const Registar = () => {
         
    const [passwordError,setPasswordError]=useState('');

    const handleRegistar=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
             const password=event.target.password.value;
             console.log(email,password);

             if ( !/(?=.*[A-Z])/.test(password) ){
                setPasswordError('Provide at least one Uppercse Character');
                return;
             }
             if(password.length<6){
                setPasswordError('please provide at lest 6 character');
                return;
             }

             if(!/(?=.*[!#$%&? "])/.test(password)){
                setPasswordError('please provide at least one special character');
                return;
             }

             setPasswordError('');




             createUserWithEmailAndPassword(auth ,email,password)
             .then(result=>{
                const user=result.user;
                console.log(user);
             })
             .catch(error=>{
                console.log('error:',error);
             })
    }
    return (
        <div>
            <form onSubmit={handleRegistar}>
                <input type="email"   name="email" id=""  required placeholder='enter your email'/> <br />
                <input type="password"  name="password"   required id="" placeholder='enter your password' /><br />
                <p>{passwordError} </p>
                <button type="submit">Registar</button>
            </form>
        </div>
    );
};

export default Registar;