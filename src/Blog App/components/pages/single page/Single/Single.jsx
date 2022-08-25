import './single.css'
import SideBar from '../../../side bar/SideBar'
import SinglePost from '../../../../single post/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        {/* {post} */}
        <SinglePost/>
        <SideBar/>
    </div>
  )
}
