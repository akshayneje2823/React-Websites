import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="header-titles">
          <span className='header-title-sm'>React & Node</span>
          <span className='header-title-lg'>Blog</span>
        </div>
        <img className='header-img' src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="img" />
    </div>
  )
}
