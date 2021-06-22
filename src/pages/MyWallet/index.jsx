import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deposit,
  withdrawal
} from '../../actions/userActions';
import SubstrataButton from '../../components/SubstrataButton';
import './index.scss';

const MyWallet = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(({ user }) => user);

  const onDepositHandler = () => {
    dispatch(deposit(100));
  };

  const onWithdrawHandler = () => {
    dispatch(withdrawal(100));
  };

  return (
    <div className="my-wallet-page">
      <div className="price-notification">Your Bitcoin wallet</div>
      <div className="question">
        You now own {userInfo.bitcoins} {userInfo.bitcoins > 1 ? 'Bitcoins' : 'Bitcoin'}
      </div>
      <div className="buttons">
        <SubstrataButton onClick={onDepositHandler}>Deposit 100$</SubstrataButton>
        <SubstrataButton onClick={onWithdrawHandler}>Withdraw 100$</SubstrataButton>
      </div>
    </div>
  );
};

export default MyWallet;
