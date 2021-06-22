// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.

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

export function reset() {
  return {
    type: RESET
  };
}

export function deposit(amount) {
  return {
    type: DEPOSIT,
    amount
  };
}

export function withdrawal(amount) {
  return {
    type: WITHDRAWAL,
    amount
  };
}

export function purchased(amount) {
  return {
    type: PURCHASED,
    amount
  };
}

export function sold(amount) {
  return {
    type: SOLD,
    amount
  };
}

export function increasedPrice(amount) {
  return {
    type: INCREASED_PRICE,
    amount
  };
}

export function decreasedPrice(amount) {
  return {
    type: DECREASED_PRICE,
    amount
  };
}

export function changePath(path) {
  return {
    type: CHANGE_PATH,
    path
  };
}
