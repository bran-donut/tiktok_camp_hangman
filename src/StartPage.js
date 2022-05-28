import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <>
        <div className='start'>
            <div className='icon'>
                <img src="./public/icon.png"></img>
            </div>
            <Link to={{
                pathname: "/menu",
            }}>
                <button className='menu-button'>Play</button>
            </Link>
        </div>
    </>

  )
}

export default Menu;