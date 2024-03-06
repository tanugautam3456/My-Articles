import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FaMoon ,FaSun} from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';



function Header() {
  const path = useLocation().pathname
  const {currentUser}=useSelector((s)=>s.user)
  const dispatch=useDispatch()
  const {theme} = useSelector(state=>state.theme)
  
  return (
    <Navbar className='border-b-4'>
      <Link to='/' className='self-center whitespace-nowrap text-lg font-semibold dark:text-white sm:text-xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tanu's</span>Blog
      </Link>
      <form>
        <TextInput type='text' placeholder='Search Something' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
      </form>
      <Button className='lg:hidden w-12 h-10' color='=gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 sm:inline hidden' color='gray' pill onClick={()=>dispatch(toggleTheme())} >
        {theme==='light' ? <FaMoon/> :<FaSun/>}
      </Button>
      {currentUser ? 
      (
          <Dropdown arrowIcon={false} inline label ={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}>
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm front-medium truncate'>@{currentUser.email}</span>

              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider/>
                <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Header>
            
          </Dropdown>
      ):
      (
        <Link to='/register'>
      <Button gradientDuoTone="purpleToBlue">Register</Button>
      </Link>
      )
      }
      <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={'div'} active={path==='/'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link as={'div'} active={path==='/about'}>
          <Link to='/about'>ABOUT</Link>
        </Navbar.Link>
        <Navbar.Link as={'div'} active={path==='/project'}>
          <Link to='/project'>PROJECT</Link>
        </Navbar.Link>

      </Navbar.Collapse>


    </Navbar>
  )
}

export default Header
