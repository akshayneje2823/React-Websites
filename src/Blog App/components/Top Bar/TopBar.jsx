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
            <img className='top-img' src="data:image/jpeg;base64,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" alt="img" />
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
