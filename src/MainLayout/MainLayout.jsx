
import Home from '../Pages/Home/Home'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=' w-[425px] md:w-[750px] lg:w-full lg:px-4 md:py-3 font-genos border-2'>
      <Home />
      <Outlet />
    </div>
  )
}

export default MainLayout