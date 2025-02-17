import { Link, Outlet } from 'react-router-dom'

const SidebarLayout = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='w-1/6 bg-violet-600'>
        <ul>
          <li><Link>Cars</Link></li>
          <li><Link>Profile</Link></li>
        </ul>
      </div>
      <div className='w-5/6 bg-violet-500'><Outlet /> </div>
    </div>
  )
}

export default SidebarLayout