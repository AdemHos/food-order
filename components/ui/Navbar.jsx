import React from 'react'

const Navbar = () => {
  return (
    <nav>
            <ul className="flex gap-4">
                <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                    <a href="#">Home</a>
                </li>
                <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                    <a href="#">Menu</a>
                </li>
                <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                    <a href="#">About</a>
                </li>
                <li className="px-[5px] py-[20px] uppercase hover:text-primary">
                    <a href="#">Book Table</a>
                </li>
            </ul>
          </nav>
  )
}

export default Navbar
