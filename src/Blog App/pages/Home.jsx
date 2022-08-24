import './home.css'
import Header from '../Header/Header'
import Posts from '../Posts/Posts'
import SideBar from '../side bar/SideBar'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
      <Posts/>
      <SideBar/>
    </div>
    </>
  )
}
