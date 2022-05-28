import React from 'react'
import Header from './components/Header'
import { Link } from 'react-router-dom'


export const Menu = () => {
  return (
    <>
        <Header />
        <div className='menu-container'>
            <p> Pick your category!</p>
            <Link to={{
                pathname: "/animals",
            }}>
                <button className='menu-button'>Animals</button>
            </Link>
            <Link to={{
                pathname: "/movies",
            }}>
                <button className='menu-button'>Movies</button>
            </Link>
            <Link to={{
                pathname: "/anime",
            }}>
                <button className='menu-button'>Anime</button>
            </Link>
        </div>
    </>

  )
}

export default Menu;