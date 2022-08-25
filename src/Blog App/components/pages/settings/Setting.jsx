import './setting.css';
import SideBar from '../../side bar/SideBar'

export default function Setting() {
    return (
        <div className='setting'>
            <div className="setting-wrapper">
                <div className="setting-title">
                    <span className="setting-update-title">Update Your Account</span>
                    <span className="setting-delete-title">Delete Your Account</span>
                </div>
                <form className="setting-form">
                    <label>Profile Picture</label>
                    <div className="setting-pp">
                        <img src="https://images.unsplash.com/photo-1562095241-8c6714fd4178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
                        <label htmlFor="fileInput"><i className="setting-profile-icon fa-solid fa-circle-user"></i></label>
                        <input type="file" id='finleInput' style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Akshay' />
                    <label>Email</label>
                    <input type="email" placeholder='Email' />
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                    <button className="setting-submit-upadate">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}
