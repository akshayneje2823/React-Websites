import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img className='write-img' src="https://images.unsplash.com/photo-1535159530326-d7bf54bfb24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
            <div className="write-form">
                <div className="write-form-group">
                    <label htmlFor="file-input">
                        <i className="write-icon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='file-input' style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className='write-input' autoFocus />
                </div>
                <div className="write-form-group">
                    <textarea
                        className='write-input write-text'
                        placeholder='Tell your story...'
                        type='text'
                    />
                </div>
                <button className='submit-btn'>Publish</button>
            </div>
        </div>
    )
}
