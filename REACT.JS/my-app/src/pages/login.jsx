import React from 'react'


const Login = () => {
  return (
    <div className='auth'>
        <h1> Login</h1>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password'/>
            <button>Login</button>
            <p>This is an error!</p>
            <span>Don't you have an account??<a href="/register">Register</a></span>
        </form>
     </div>
  )
}

export default Login
