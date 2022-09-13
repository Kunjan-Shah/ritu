import React from 'react'
import RituLogo from '../../images/logo.jpg'
import './Logo.css'

export default function Logo() {
  return (
    <div className="logo">
        <img src={RituLogo} alt="ritu-logo" />
        {/*TODO: based on web or mobile view view name*/}
        <p>Ritu</p>
    </div>
  )
}
