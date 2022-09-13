import React from 'react'
import './LeftPanelMenuItem.css'

export default function LeftPanelMenuItem({isActive, itemTitle, iconClassName, isVisible, index}) {
  let iconContainer = isActive ? "icon dark-icon" : "icon";
  let itemTitleContainer = isActive ? "item-title dark-title" : "item-title";
  let menuItemContainer = "lp-menu-item";
  if(isVisible) {
    menuItemContainer += " menu-items-visible";
    if(isActive) menuItemContainer += " item-active";
    menuItemContainer += ` anim-item-${index}`;
  }
  else {
    menuItemContainer += " menu-items-invisible";
    menuItemContainer += ` anim-item-${1}`;
  }
   
  return (
    <div className={menuItemContainer} onClick={(e)=>{console.log(e)}}>
      <div className="empty">

      </div>
        <div className={iconContainer}>
            <span class="material-symbols-outlined">
              {iconClassName}
            </span>
        </div>
        <div className={itemTitleContainer}>
            {itemTitle}
        </div>
    </div>
  )
}
