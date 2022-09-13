import React from 'react'
import './MenuForMobile.css'
import LeftPanelMenuItem from '../LeftPanelMenuItem/LeftPanelMenuItem';

export default function MenuForMobile({menuVisible}) {
  let menuClass = menuVisible ? "menu-for-mobile menu-visible" : "menu-for-mobile menu-hidden"
  return (
    <div className={menuClass}>
      <LeftPanelMenuItem isActive={false} itemTitle="Dashboard" iconClassName="grid_view" isVisible={menuVisible} index={1}/>
      <LeftPanelMenuItem isActive={true} itemTitle="Map" iconClassName="travel_explore" isVisible={menuVisible} index={2}/>
      <LeftPanelMenuItem isActive={false} itemTitle="Saved Location" iconClassName="favorite" isVisible={menuVisible} index={3}/>
      <LeftPanelMenuItem isActive={false} itemTitle="Calender" iconClassName="calendar_month" isVisible={menuVisible} index={4}/>
      <LeftPanelMenuItem isActive={false} itemTitle="Settings" iconClassName="settings" isVisible={menuVisible} index={5}/>
      <LeftPanelMenuItem isActive={false} itemTitle="Logout" iconClassName="logout" isVisible={menuVisible} index={6}/>
    </div>
  )
}
