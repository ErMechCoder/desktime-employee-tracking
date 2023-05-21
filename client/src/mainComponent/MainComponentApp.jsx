import React,{useState} from 'react'

import Navbar from './Navbar'
import SideNav from './NavbarAndSideBar/SideNav'


const MainComponentApp = () => {
  const [toggle, setToggle] = useState(true)
  const toggleNavbar = (x) => {
    setToggle(x)
  }
  
  return (
    <div>
        <Navbar props = {{toggle, toggleNavbar}} />
        <div style={{display:'flex'}}>
            <div  style={toggle ? {width:"218px"} : {width:'53px'}}>
              <SideNav props = {toggle}/>
            </div>
            
        </div>
    </div>
  )
}

export default MainComponentApp;