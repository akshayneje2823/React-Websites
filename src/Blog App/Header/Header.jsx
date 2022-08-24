import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="header-titles">
          <span className='header-title-sm'>React & Node</span>
          <span className='header-title-lg'>Blog</span>
        </div>
        <img className='header-img' src="https://images.unsplash.com/photo-1621336831096-0ef225705c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="img" />
    </div>
  )
}
