import React from 'react'
import './LeftPanel.css';
import RituLogo from '../../Logo/Logo';
import LeftPanelMenuItem from '../../LeftPanelMenuItem/LeftPanelMenuItem';

export default function LeftPanel() {
  /*TODO: call context api to recieve which menu item is active*/
  return (
    <div className="dashboard-left-panel">
      <div className="lp-logo">
        <RituLogo />
      </div>
      <div className="lp-menu">
        <LeftPanelMenuItem isActive={true} itemTitle="Dashboard" iconClassName="grid_view" isVisible={true} />
        <LeftPanelMenuItem isActive={false} itemTitle="Map" iconClassName="travel_explore" isVisible={true}/>
        <LeftPanelMenuItem isActive={false} itemTitle="Saved Location" iconClassName="favorite" isVisible={true}/>
        <LeftPanelMenuItem isActive={false} itemTitle="Calender" iconClassName="calendar_month" isVisible={true}/>
        <LeftPanelMenuItem isActive={false} itemTitle="Settings" iconClassName="settings" isVisible={true}/>
        <LeftPanelMenuItem isActive={false} itemTitle="" iconClassName="" isVisible={true}/>
        <LeftPanelMenuItem isActive={false} itemTitle="" iconClassName="" isVisible={true}/>
      </div>
      <div className="lp-logout">
        <LeftPanelMenuItem isActive={false} itemTitle="Logout" iconClassName="logout" isVisible={true}/>
      </div>
    </div>
  )
}
