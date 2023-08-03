import logo from './logo.svg';
import './App.css';
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import app from './Firebase/Firebase.init';
const auth =getAuth(app);
function App() {
  const provider= new GoogleAuthProvider();

  const handleSubmit=(event)=>{   // 
    event.preventDefault();
       // here event.target = form tag 
                                   // and event.target.email= email feild in form 
                                   // and event.target.email.value=jakirhossainmunir79@gmail.com
   const email=event.target.email.value;
   const password=event.target.password.value;
   console.log(email,password);
  }
  
  // onchange   = when write every word in email feild or password feild 

  const emailHandleChange=event=>{
   console.log(event.target.value);

  }

  // onblur   = when change tab then it see console.log 
  const handlePasswordBlur=event=>{
        console.log(event.target.value);
  }


  return (
    <div className="App">
   <form onSubmit={handleSubmit}>
   <input  onChange={emailHandleChange} type="email" name="email" id="" placeholder='inter your email' /> <br />
    <input onBlur={handlePasswordBlur}  type="password" name="password" id=""  placeholder='inter your password'/><br />

    <button type="submit">Registar</button>
   </form>
   
    </div>
  );
}

export default App;
