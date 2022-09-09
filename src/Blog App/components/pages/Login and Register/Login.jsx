import {Link} from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
      <span className='login-title'>Login</span>
      <form className="login-form">
        <label>Email</label>
        <input className='login-input' type="email" placeholder='Enter your email...' />
        <label>Password</label>
        <input className='login-input' type="password" placeholder='Enter your password...' />
        <button className="login-btn">Login</button>
      </form>
      <button className="login-register-btn">
        <Link className='link' to='/register'>REGISTER</Link>
      </button>
    </div>
  )
}
