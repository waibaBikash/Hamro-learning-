import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const { isEducator } = useContext(AppContext)

  const menuItems = [
    {name: 'Dashboard', path: '/educator', icon: assets.home_icon},
    {name: 'Add Courses', path: '/educator/add-course', icon: assets.add_icon},
    {name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon},
    {name: 'Student Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon
    },
  ];
  return isEducator && (
    <div className='md:w-64 w-1/6 border-r min-h-screen text-base border-gray-500'>
      {menuItems.map((item)=>{
        <NavLink>
           <img src={item.icon} alt=""  className='w-6 h-6'/>
           <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      })}
    </div>
  )
}

export default Sidebar