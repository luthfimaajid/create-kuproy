import React from 'react'

const Topbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-custom-gray-1">
      <div className="flex items-center">
        <img src={`${process.env.PUBLIC_URL}/assets/icon_aesthetic.svg`} alt="Icon" />
      </div>
    </nav>
  )
}

export default Topbar