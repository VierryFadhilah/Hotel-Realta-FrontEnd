import {any, bool} from 'prop-types';
import React from 'react';
import cx from 'classnames';

const MenuIcon = ({icon, isActive}:any) => {
  const fill = isActive ? '#5600E8' : '#757575';
  const IconMenu = icon;
  return (
    <div className={cx('items-center flex justify-center')}>
      <IconMenu color={fill} />
    </div>
  );
};

MenuIcon.propTypes = {
  icon: any,
  isActive: bool,
};

export default MenuIcon;
