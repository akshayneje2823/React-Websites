import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img src="https://media.istockphoto.com/photos/alphabet-letter-wooden-blocks-with-words-give-in-child-and-parents-picture-id1199796265?b=1&k=20&m=1199796265&s=170667a&w=0&h=Qmbcy6dxn4viEAie5O1WkEH5gG3QJWfh0uNQ7JSlkpU=" alt="img" />
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
