import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changePath } from '../../actions/userActions';
import './index.scss';

const SideMenuItem = (props) => {
  const dispath = useDispatch();
  const currentPath = useSelector(({ user }) => user.currentPath);

  const onClickPath = () => {
    dispath(changePath(props.to));
  };

  const { to: toPath, icon, children } = props;

  return (
    <Link to={toPath} onClick={onClickPath} className={`side-menu-item${currentPath === toPath ? ' active' : ''}`}>
      <img src={icon} alt="menu" />
      {children}
    </Link>
  );
};

export default SideMenuItem;
