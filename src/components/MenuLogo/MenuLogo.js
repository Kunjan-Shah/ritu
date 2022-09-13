import React from 'react'
import './MenuLogo.css'

export default function MenuLogo({setMenuVisible, menuVisible}) {
  return (
    <div className="menu-logo" onClick={() => setMenuVisible(!menuVisible)}>
        <div class="material-symbols-outlined">
          menu
        </div>
    </div>
  )
}
