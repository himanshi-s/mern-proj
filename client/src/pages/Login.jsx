import React, { useState } from 'react'
import axios  from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
    const [user,setUser] = useState({
      email:'johndoe@yahoo.com',
      password:'1234567890',
    })
    //handling input
    const handleInput = (e) => {
      console.log(e);
      console.log('ahgdj');
      const name = e.target.name;
      const val = e.target.value;
      setUser({...user,[name]:val})
    }
    const handleSubmit = async (e) =>{
      e.preventDefault();
      axios.post('http://localhost:5555/api/auth/login',user)
      .then((res)=>{
        console.log(res);
        navigate("/")
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    return (<>
    <main>
      <div className="section-login">
        <div className="login-form">
          <h1>Login form</h1>
          <form >
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" 
            required autoComplete='off' placeholder='email'
            value={user.email} onChange={handleInput}
            />
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" 
            required autoComplete='off' placeholder='password'
            value={user.password} onChange={handleInput}
            />
            <br />
            <button type="submit"onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </main>
    </>
    )

}

export default Login