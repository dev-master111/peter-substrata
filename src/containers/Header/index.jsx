import React from 'react';
import { useSelector } from 'react-redux';
import Utils from '../../common/utils';
import './index.scss';

const Header = () => {
  const userInfo = useSelector(({ user }) => user);

  return (
    <div className="main-header">
      <div className="price-value">1 BITCOIN = {Utils.numberWithCommas(userInfo.bitcoinPrice)} $</div>
      <div className="my-points">
        <div className="point-value">{Utils.numberWithCommas(userInfo.dollars)} $</div>
        <div className="point-value">{Utils.numberWithCommas(userInfo.bitcoins)} BITCOINS</div>
      </div>
    </div>
  );
};

export default Header;
