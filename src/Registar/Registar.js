import React, { useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
const auth=getAuth(app);




const Registar = () => {
         
    const [passwordError,setPasswordError]=useState('');
    const [success,setSuccess]=useState(false);

    const handleRegistar=(event)=>{
        event.preventDefault();
        setSuccess(false);
        const form=event.target;
        const email=form.email.value;
             const password=form.password.value;
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
                setSuccess(true);
                form.reset();
                veryfyEmail();
             })
             .catch(error=>{
                console.log('error:',error);
                setPasswordError(error.message);
             })
    }

    const veryfyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            alert('please cheek your email and veryfy your email');
        })
    }
    return (
        <div>
            <form onSubmit={handleRegistar}>
                <input type="email"   name="email" id=""  required placeholder='enter your email'/> <br />
                <input type="password"  name="password"   required id="" placeholder='enter your password' /><br />
                <p>{passwordError} </p>
                  {success  && <p> successfully created</p> } 
                <button type="submit">Registar</button><br />
                 <p>  already Have an Account?<Link to='/login'>  log in here </Link></p>
              
            </form>
        </div>
    );
};

export default Registar;