import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubstrataButton from '../../components/SubstrataButton';
import Utils from '../../common/utils';
import { sold } from '../../actions/userActions';
import './index.scss';

const HIGH_PRICE_MESSAGE = 'Prices are high, sell now!';
const LOW_PRICE_MESSAGE = 'Prices are low, are you sure that you want to sell?';

const SellBitcoin = () => {
  const userInfo = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const onSellBitcoinHandler = () => {
    dispatch(sold(1));
  };

  const { bitcoinPrice } = userInfo;

  return (
    <div className="sell-bitcoin-page">
      <div className="price-notification">Bitcoin price is {Utils.numberWithCommas(bitcoinPrice)}$</div>
      <div className="question">{bitcoinPrice >= 10000 ? HIGH_PRICE_MESSAGE : LOW_PRICE_MESSAGE}</div>
      <div className="buttons">
        <SubstrataButton onClick={onSellBitcoinHandler}>Sell 1 Bitcoin</SubstrataButton>
      </div>
    </div>
  );
};

export default SellBitcoin;
