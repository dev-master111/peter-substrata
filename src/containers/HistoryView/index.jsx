import React from 'react';
import { useSelector } from 'react-redux';
import HistoryItem from '../../components/HistoryItem';
import './index.scss';

const HistoryView = () => {
  const histories = useSelector(({ user }) => user.actionHistory);

  return (
    <div className="history-container">
      {
        histories.map((historyData) => (
          <HistoryItem data={historyData} key={historyData.time} />
        ))
      }
    </div>
  );
};

export default HistoryView;
