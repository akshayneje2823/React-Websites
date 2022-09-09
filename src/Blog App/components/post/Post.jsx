import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1601588759900-6215271553cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNyb3dkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
        <div className="post-info">
            <div className="post-cats">
                <span className='post-cat'>Music</span>
                <span className='post-cat'>Life</span>
            </div>
            <span className='post-title'>Lorem ipsum dolor sit.</span>
            <hr />
            <span className='post-date'>1 hour ago </span>
        </div>
        <p className='post-discrp'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nulla ab debitis minima dolor, vitae quo iusto minus assumenda repellat. A et ea, praesentium ullam qui at eaque impedit in!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nulla ab debitis minima dolor, vitae quo iusto minus assumenda repellat. A et ea, praesentium ullam qui at eaque impedit in!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nulla ab debitis minima dolor, vitae quo iusto minus assumenda repellat. A et ea, praesentium ullam qui at eaque impedit in!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nulla ab debitis minima dolor, vitae quo iusto minus assumenda repellat. A et ea, praesentium ullam qui at eaque impedit in!
                </p>
    </div>
  )
}
