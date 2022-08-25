import './sideBar.css'

export default function SideBar() {
    return (
        <div className='side-bar'>
            <div className="side-bar-item">
                <img src="https://media.istockphoto.com/photos/outdoor-therapy-picture-id1350877985?b=1&k=20&m=1350877985&s=170667a&w=0&h=7XcLaBDhNg0emO5A6eSe2x6ca6M5Nl6F16tHA1EVr2I=" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quo ex sed veniam nesciunt vel?
                </p>
            </div>
            <div className="side-bar-item">
                <span className="side-bar-title">
                    CATEGORIES
                </span>
                <ul className='side-bar-list'>
                    <li className='side-bar-list-item'>Life</li>
                    <li className='side-bar-list-item'>Music</li>
                    <li className='side-bar-list-item'>Style</li>
                    <li className='side-bar-list-item'>Sport</li>
                    <li className='side-bar-list-item'>Tech</li>
                    <li className='side-bar-list-item'>Chinema</li>
                </ul>
            </div>
            <div className="side-bar-items">
                <span className='side-bar-title'>FOLLOW US</span>
                <div className="side-bar-social">
                    <i className="side-bar-icon fa-brands fa-square-facebook"></i>
                    <i className="side-bar-icon fa-brands fa-square-twitter"></i>
                    <i className="side-bar-icon fa-brands fa-linkedin"></i>
                    <i className="side-bar-icon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
