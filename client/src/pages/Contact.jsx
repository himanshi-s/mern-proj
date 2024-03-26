import React, { useState } from 'react'

const Contact = () => {
  const [user,setUser] = useState({
    username: "hogndow",
    email:'johndoe@yahoo.com',
    password:'1234567890',
  })
  //handling input
  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setUser({...user,[name]:val})
  }
  return (<>
  <main>
    <div className="section-login">
      <div className="login-form">
        <h1>Contact Us</h1>
        <form >
        <label htmlFor="username">email</label>
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
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </main>
  </>
  )
}

export default Contact