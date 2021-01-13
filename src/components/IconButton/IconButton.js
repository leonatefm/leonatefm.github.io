import './IconButton.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'IconButton',
  DAKR: 'IconButton--dark',
  LIGHT: 'IconButton--light',
};

function IconButton({ children, className, theme, ...otherProps }) {
  const rootClassNames = classNames(
    classnames.BASE,
    theme === 'light' ? classnames.LIGHT : classnames.DAKR,
    className
  );
  return (
    <button className={rootClassNames} {...otherProps}>
      {children}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

IconButton.defaultProps = {
  theme: 'dark',
};

export default IconButton;
