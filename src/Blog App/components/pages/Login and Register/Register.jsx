import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <span className='register-title'>Register</span>
            <form className="register-form">
                <label>Username</label>
                <input className='register-input' type="email" placeholder='Enter your Username...' />
                <label>Email</label>
                <input className='register-input' type="email" placeholder='Enter your email...' />
                <label>Password</label>
                <input className='register-input' type="password" placeholder='Enter your password...' />
                <button className="register-btn">Login</button>
            </form>
            <button className="register-login-btn">Login</button>
        </div>
    )
}
