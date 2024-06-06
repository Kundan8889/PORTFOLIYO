import { useState } from 'react';
import React from 'react';
import Home from '../../pages/Home/Home';
import {SlActionUndo,SlActionRedo} from 'react-icons/sl';
import  './Layout.css';
import Manus from '../Manus/Manus';
function Layout() {
    const [toggel,setToggle]=useState(true);
    // change toggel
    // this is name conversion follow to function
    const handleToggle=()=>{
        setToggle(!toggel);
    }
  return (
    <>
    <div className='sidebar-section'>
        <div className={toggel ? ('sidebar-toggle sidebar'):('sidebar')}>
            <div className='sidebar-toggle-icons'>
                <p onClick={handleToggle}>
                    {toggel ? (
                    <SlActionUndo size={30}/> 
                    ): (
                    <SlActionRedo  size={30}/>
                    )}
                   
                </p>
            </div>
            <Manus toggel={toggel}/>
        </div>
      <div className='container'>
        <Home/>
      </div>
      </div>
    </>
  )
}

export default Layout
