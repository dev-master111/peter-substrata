import React from 'react';
import moment from 'moment';
import './index.scss';

const HistoryItem = (props) => {
  const { data: { time, content } } = props;

  return (
    <div className="history-item">
      <div className="time">{moment(time).format('MM/DD/YYYY HH:mm')}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default HistoryItem;
