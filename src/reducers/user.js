// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html
import { toast } from 'react-toastify';
import {
  RESET,
  DEPOSIT,
  WITHDRAWAL,
  PURCHASED,
  SOLD,
  INCREASED_PRICE,
  DECREASED_PRICE,
  CHANGE_PATH
} from '../constants/ActionTypes';
import Utils from '../common/utils';

const initialState = {
  dollars: 200,
  bitcoins: 0,
  bitcoinPrice: 1000,
  actionHistory: [],
  currentPath: window.location.pathname
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        dollars: 200,
        bitcoins: 0
      };
    case WITHDRAWAL: {
      const newHistory = [
        {
          time: Date.now(),
          content: `${action.amount}$ Withdrawal`
        },
        ...state.actionHistory
      ];

      if (state.dollars < action.amount) {
        toast.error('You do not have enough dollar to withdraw.', { position: 'top-right' });
        return state;
      }

      toast.info(`${action.amount}$ Withdraw successfully`, { position: 'top-right' });

      return {
        ...state,
        actionHistory: newHistory,
        dollars: state.dollars - action.amount
      };
    }
    case DEPOSIT: {
      const newHistory = [
        {
          time: Date.now(),
          content: `${action.amount}$ Deposit`
        },
        ...state.actionHistory
      ];

      toast.info(`${action.amount}$ desposit successfully`, { position: 'top-right' });

      return {
        ...state,
        actionHistory: newHistory,
        dollars: state.dollars + action.amount
      };
    }
    case PURCHASED: {
      const newHistory = [
        {
          time: Date.now(),
          content: `Purchased ${action.amount} Bitcoin`
        },
        ...state.actionHistory
      ];

      const newDollars = state.dollars - state.bitcoinPrice * action.amount;
      const newBitcoins = state.bitcoins + 1;

      if (newDollars < 0) {
        toast.error('You do not have enough dollar to buy a bitcoin.', { position: 'top-right' });
        return state;
      }

      toast.info(`Purchased ${action.amount} Bitcoin successfully`, { position: 'top-right' });

      return {
        ...state,
        actionHistory: newHistory,
        dollars: newDollars,
        bitcoins: newBitcoins
      };
    }
    case SOLD: {
      const newHistory = [
        {
          time: Date.now(),
          content: `Sold ${action.amount} Bitcoin`
        },
        ...state.actionHistory
      ];

      const newDollars = state.dollars + state.bitcoinPrice * action.amount;
      const newBitcoins = state.bitcoins - 1;

      if (newBitcoins < 0) {
        toast.error('You do not have bitcoin to sell.', { position: 'top-right' });
        return state;
      }

      toast.info(`Sold ${action.amount} Bitcoin successfully`, { position: 'top-right' });

      return {
        ...state,
        actionHistory: newHistory,
        dollars: newDollars,
        bitcoins: newBitcoins
      };
    }
    case INCREASED_PRICE: {
      const newHistory = [
        {
          time: Date.now(),
          content: `Increased Bitcoin price by ${Utils.numberWithCommas(action.amount)}$`
        },
        ...state.actionHistory
      ];

      const newBitcoinPrice = state.bitcoinPrice + action.amount;

      toast.info(`Increased Bitcoin price by ${Utils.numberWithCommas(action.amount)}$ successfully`, { position: 'top-right' });

      return {
        ...state,
        actionHistory: newHistory,
        bitcoinPrice: newBitcoinPrice
      };
    }
    case DECREASED_PRICE: {
      const newHistory = [
        {
          time: Date.now(),
          content: `Decreased Bitcoin price by ${Utils.numberWithCommas(action.amount)}$`
        },
        ...state.actionHistory
      ];

      const newBitcoinPrice = state.bitcoinPrice - action.amount;

      if (newBitcoinPrice < 1000) {
        toast.error('Bitcoin price cannot be below 1,000$', { position: 'top-right' });
        return state;
      }

      toast.info(`Decreased Bitcoin price by ${Utils.numberWithCommas(action.amount)}$ successfully`, { position: 'top-right' });

      return {
        ...state,
        actionHistory: newHistory,
        bitcoinPrice: newBitcoinPrice
      };
    }
    case CHANGE_PATH: {
      return {
        ...state,
        currentPath: action.path
      };
    }
    default:
      return state;
  }
};

export default reducer;
