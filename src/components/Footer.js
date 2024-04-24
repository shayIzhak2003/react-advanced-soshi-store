import React from 'react'

const Footer = () => {
  const name = "Shay Shalom Izhak"
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer"> &copy; {currentYear} all rights reserved to <span style={{fontFamily:"Lucida Sans", color:"orange", fontSize:"20px" }}>{name}</span></div>
  )
}

export default Footer