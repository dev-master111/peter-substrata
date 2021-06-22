import React from 'react';
import SideMenuItem from '../../components/SideMenuItem';
import imgBitcoin from '../../assets/bitcoin.svg';
import imgItemIcon from '../../assets/icon.svg';
import './index.scss';

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="logo-view">
      <img src={imgBitcoin} alt="logo" />
      <h1>BITCOIN FRENZY</h1>
    </div>
    <div className="items-list">
      <SideMenuItem to="/wallet" icon={imgItemIcon}>MY WALLET</SideMenuItem>
      <SideMenuItem to="/buy" icon={imgItemIcon}>BUY BITCOIN</SideMenuItem>
      <SideMenuItem to="/sell" icon={imgItemIcon}>SELL BITCOIN</SideMenuItem>
      <SideMenuItem to="/bitcoin" icon={imgItemIcon}>BITCOIN PRICE</SideMenuItem>
    </div>
  </div>
);

export default Sidebar;
