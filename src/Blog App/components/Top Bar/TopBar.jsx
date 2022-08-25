import './TopBar.css'

export default function TopBar() {
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
                <li className='top-list-item'>HOME</li>
                <li className='top-list-item'>ABOUT</li>
                <li className='top-list-item'>CONTACT</li>
                <li className='top-list-item'>WRITE</li>
                <li className='top-list-item'>LOGOUT</li>
            </ul>
        </div>
        <div className="top-right">
            <img className='top-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIIR3NLtyV4vZnOgsP6qAd4GqiVq2xFBgHw&usqp=CAU" alt="img" />
            <i className="top-search-icon fa-solid fa-magnifying-glass-plus"></i>
        </div>
    </div>
  )
}
