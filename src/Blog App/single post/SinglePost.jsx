import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePost-wrapper">
        <img className='singlePost-img' src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" srcset="" />
        <h1 className="singlePost-title">Lorem ipsum dolor sit.
          <div className="singlePost-edit">
            <i className="singlePost-icon fa-solid fa-pen-to-square"></i>
            <i className="singlePost-icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePost-info">
          <span className='singlePost-author'>Author: <b className="singlePost-author"> Akshay </b></span>
          <span className='singlePost-date'>1 hour ago</span>
        </div>
        <p className='singlePost-decri'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsam fugiat libero dolores accusamus obcaecati ab. Soluta aperiam voluptatem accusamus quos esse necessitatibus reprehenderit, amet animi id nobis qui illo quae nulla eveniet debitis quis? Doloremque illum qui distinctio amet natus sed accusantium, iure earum fuga recusandae id dolorum est consequuntur sequi et, omnis debitis perspiciatis voluptates suscipit ipsam quisquam doloribus! Repudiandae, perferendis architecto. Voluptas aliquid, vitae praesentium qui quod temporibus sint suscipit. Molestias nesciunt magni perspiciatis voluptas perferendis recusandae ratione, sit ipsa quisquam itaque dolorum facere autem a doloremque soluta aliquid alias pariatur, laudantium vel? Natus aliquid facere velit.</p>
      </div>
    </div>
  )
}
