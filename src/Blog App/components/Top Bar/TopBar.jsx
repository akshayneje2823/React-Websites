import { Link } from 'react-router-dom';
import './TopBar.css'

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="top-left">
        <i className=" top-icon fa-brands fa-square-facebook"></i>
        <i className=" top-icon fa-brands fa-square-twitter"></i>
        <i className=" top-icon fa-brands fa-linkedin"></i>
        <i className=" top-icon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className='top-list'>
          <li className='top-list-item'>
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className='top-list-item'>
            <Link className='link' to='/about'>ABOUT</Link>
          </li>
          <li className='top-list-item'>
            <Link className='link' to='/contact'>CONTACT</Link>
          </li>
          <li className='top-list-item'>
            <Link className='link' to='/write'>WRITE</Link>
          </li>
          <li className='top-list-item'>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {
          user ?
            <img className='top-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIIR3NLtyV4vZnOgsP6qAd4GqiVq2xFBgHw&usqp=CAU" alt="img" />
            : (
              <ul className='top-list'>
                <li className='top-list-item'>
                  <Link className='link' to='/login'>
                    LOGIN
                  </Link>
                </li>
                <li className='top-list-item'>
                  <Link className='link' to='/register'>
                  REGISTER
                  </Link>
                </li>
              </ul>
            )

        }
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
