import {NavLink} from 'react-router-dom'
import {AiOutlineDashboard, AiOutlineShoppingCart, AiOutlinePieChart} from 'react-icons/ai'
import {MdProductionQuantityLimits, MdPersonOutline} from 'react-icons/md'
import { useContext } from 'react'
import { themeContext } from '../../context/ThemeProvider'
const navData = [
    {
        id: 1,
        title: 'Dashboard',
        link: 'dashboard',
        icon: <AiOutlineDashboard className='text-2xl' />
    },
    {
        id: 2,
        title: 'Products',
        link: 'products',
        icon: <MdProductionQuantityLimits className='text-2xl' />
    },
    {
        id: 3,
        title: 'Customers',
        link: 'customers',
        icon: <MdPersonOutline className='text-2xl' />
    },
    {
        id: 4,
        title: 'Orders',
        link: 'orders',
        icon: <AiOutlineShoppingCart className='text-2xl' />
    },
    {
        id: 5,
        title: 'Sales',
        link: 'sales',
        icon: <AiOutlinePieChart className='text-2xl' />
    },
]
const NavBar = () => {
    const {mode} = useContext(themeContext)
  return (
    <div className={mode == 'dark' ? 'py-3 h-screen bg-[#121212]' : 'py-3 h-screen bg-white'}>
        <div className='font-merriweather text-xl text-green-500 underline font-semibold text-center py-8'>
            <p>King's Dashboard</p>
        </div>
        <div className='flex flex-col gap-3 py-2'>
            {
                navData.map(el => {
                    return(
                        <NavLink key={el.id} to={el.link} className='flex gap-2 items-center font-semibold py-3 my-1 px-3 hover:bg-purple-50 dark:hover:bg-stone-900'>
                            {el.icon}
                            <p className='font-merriweather text-lg'>{el.title}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NavBar