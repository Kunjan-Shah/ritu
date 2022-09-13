import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar';
import MenuLogo from '../MenuLogo/MenuLogo'
import './HeaderForMobile.css';

export default function HeaderForMobile({setMenuVisible, menuVisible}) {
  return (
    <div className="header-for-mobile">
        <Logo />
        <SearchBar />
        <MenuLogo setMenuVisible={setMenuVisible} menuVisible={menuVisible}/>
    </div>
  )
}
