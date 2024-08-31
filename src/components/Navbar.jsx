import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center">
            <img
              src="./HOME/assets/images/image.png"
              alt=""
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold">
              ACE <span className="text-blue-600">RESUME.</span>
            </span>
          </a>
          <div className="flex space-x-4">
            <a href="./ABOUTUS/aboutus.html" className="text-gray-700 hover:text-blue-600">
              ABOUT US
            </a>
            <a href="./CONTACTUS/contactus.html" className="text-gray-700 hover:text-blue-600">
              CONTACT US
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              ARTICLES
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
