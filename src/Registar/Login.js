import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/Firebase.init';
const auth=getAuth(app);

const Login = () => {

    const [success,setSuccess]=useState(false);
    const [userEmail,setUserEmail]=useState('');
    const handleLogin=event=>{
        setSuccess(false);
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
        })
        .catch(error=>{
            console.log('error:',error);
        })
        
    }
    const handleResetEmailBlur=event=>{
        const email=event.target.value;
        setUserEmail(email);
    }

    const handleResetPassword=()=>{
        sendPasswordResetEmail(auth,userEmail)
        .then(()=>{
            alert('cheek your email and reset your password');
        })
        .catch(error=>{
            console.log('error:',error);
        })
    }
    return (
        <div>
            <h1> Log in Here </h1>
            

            <form onSubmit={handleLogin}>
                <input  onBlur={handleResetEmailBlur} type="email" name="email" id="" placeholder='enter your email' /><br />
                <input type="password" name="password" id="" placeholder='enter your password' /><br />
                 {success && <p>sucessfully Log in </p>}
                <button type="submit">Login  </button> <br />
              <p>new this website<Link to='/registar' > Registar Now </Link> </p> <br />
              <p> forget Password ? <Link onClick={handleResetPassword} > Reset Password</Link></p>
            </form>
        </div>
    );
};

export default Login;