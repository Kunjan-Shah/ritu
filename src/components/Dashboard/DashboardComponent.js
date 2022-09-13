import React, {useState} from 'react'
import {LeftPanel, MainPanel, RightPanel, HeaderForMobile, MenuForMobile} from '../index';
import './Dashboard.css';


export default function DashboardComponent() {
  let isMobile = window.innerWidth > 600 ? false : true;
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="dashboard">
      {
        isMobile ? <HeaderForMobile setMenuVisible={setMenuVisible} menuVisible={menuVisible}/> : <LeftPanel />
      }
      {
        isMobile ? <MenuForMobile menuVisible={menuVisible}/> : null
      }
        <MainPanel />
        <RightPanel />
    </div>
  )
}
