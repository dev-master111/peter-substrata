import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubstrataButton from '../../components/SubstrataButton';
import Utils from '../../common/utils';
import { purchased } from '../../actions/userActions';
import './index.scss';

const HIGH_PRICE_MESSAGE = 'Prices are high, are you sure that you want to buy?';
const LOW_PRICE_MESSAGE = 'Prices are low, buy more!';

const BuyBitcoin = () => {
  const userInfo = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const onBuyBitcoinHandler = () => {
    dispatch(purchased(1));
  };

  const { bitcoinPrice } = userInfo;

  return (
    <div className="buy-bitcoin-page">
      <div className="price-notification">Bitcoin price is {Utils.numberWithCommas(bitcoinPrice)}$</div>
      <div className="question">{bitcoinPrice >= 10000 ? HIGH_PRICE_MESSAGE : LOW_PRICE_MESSAGE}</div>
      <div className="buttons">
        <SubstrataButton onClick={onBuyBitcoinHandler}>Buy 1 Bitcoin</SubstrataButton>
      </div>
    </div>
  );
};

export default BuyBitcoin;
