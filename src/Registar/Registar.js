import React from 'react';

import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
const auth=getAuth(app);




const Registar = () => {


    const handleRegistar=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
             const password=event.target.password.value;
             console.log(email,password);
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
                <input type="email"   name="email" id=""  placeholder='enter your email'/> <br />
                <input type="password"  name="password" id="" placeholder='enter your password' /><br />
                <button type="submit">Registar</button>
            </form>
        </div>
    );
};

export default Registar;