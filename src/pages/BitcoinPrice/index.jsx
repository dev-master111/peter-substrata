import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubstrataButton from '../../components/SubstrataButton';
import Utils from '../../common/utils';
import { increasedPrice, decreasedPrice } from '../../actions/userActions';
import './index.scss';

const BitcoinPrice = () => {
  const userInfo = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const onIncreasePriceHandler = () => {
    dispatch(increasedPrice(1000));
  };

  const onDecreasePriceHandler = () => {
    dispatch(decreasedPrice(1000));
  };

  const { bitcoinPrice } = userInfo;

  return (
    <div className="bitcoin-price-page">
      <div className="price-notification">Bitcoin price is {Utils.numberWithCommas(bitcoinPrice)}$</div>
      <div className="buttons">
        <SubstrataButton onClick={onIncreasePriceHandler}>
          Increase Bitcoin Price (+{Utils.numberWithCommas(1000)})
        </SubstrataButton>
        <SubstrataButton onClick={onDecreasePriceHandler}>
          Decrease Bitcoin Price (-{Utils.numberWithCommas(1000)})
        </SubstrataButton>
      </div>
    </div>
  );
};

export default BitcoinPrice;
