import React, { useState } from 'react'



const LoginForm = () => {
    const [data, setdata] = useState(
        {
            username:'',
            password:''
        }
    )
    const {username,password} = data;
    const handleEvent = (e) =>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(data)
      console.log("Logined Successfully")
    }
  return (
    <div>
      <form onSubmit={submitHandler} autoComplete='off'>
        <input type="text" placeholder='username' name='username' value={username} onChange={handleEvent} />
        <input type="password" placeholder='password' name='password' value={password} onChange={handleEvent}/>
        <p>Name:{username}, password:{password}</p>
        <button type='submit' name='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;

