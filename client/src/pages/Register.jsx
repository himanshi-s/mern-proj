import React, { useState } from 'react'

const Register = () => {

  const [user,setUser] = useState({
    username:'Johndoe',
    email:'johndoe@yahoo.com',
    password:'1234567890',
    phone:1234567899
  })

  //handling input
  const handleInput = (e) => {
    console.log(e);
    console.log('ahgdj');
    const name = e.target.name;
    const val = e.target.value;
    setUser({...user,[name]:val})

  }

  return (<>
  <main>
    <div className="section-registration">
      <div className="register-form">
        <h1>Registration form</h1>
        <form >
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" 
          required autoComplete='off' placeholder='username'
          value={user.username} onChange={handleInput}
          />
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
          <label htmlFor="phone">phone</label>  
          <input type="number" name="phone" id="phone" 
          required autoComplete='off' placeholder='phone'
          value={user.phone} onChange={handleInput}
          />
          <br />
          <button type="submit" >submit</button>
        </form>
      </div>
    </div>
  </main>
  </>
  )
}

export default Register