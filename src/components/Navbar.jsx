import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='nav'>
      <h1>{props.pagina}</h1>
    </nav>
  )
}

export default Navbar