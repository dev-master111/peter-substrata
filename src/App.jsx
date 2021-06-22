import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import HistoryView from './containers/HistoryView';

import MyWallet from './pages/MyWallet';
import BitcoinPrice from './pages/BitcoinPrice';
import BuyBitcoin from './pages/BuyBitcoin';
import SellBitcoin from './pages/SellBitcoin';
import './style/app.scss';

function App() {
  return (
    <div className="app main-wrapper">
      <Sidebar />
      <div className="view-container">
        <Header />
        <div className="content-view">
          <div className="page-container">
            <Switch>
              <Route exact path="/"><Redirect to="/wallet" /></Route>
              <Route exact path="/wallet" component={MyWallet} />
              <Route exact path="/buy" component={BuyBitcoin} />
              <Route exact path="/sell" component={SellBitcoin} />
              <Route exact path="/bitcoin" component={BitcoinPrice} />
            </Switch>
          </div>
          <HistoryView />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
