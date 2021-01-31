import './Button.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'Button',
  ICON: 'Button-icon',
};

function Button({ className, children, icon, size, type, ...otherProps }) {
  const CustomTag = type === 'link' ? 'a' : 'button';
  const rootClassNames = classNames(
    classnames.BASE,
    size && `${classnames.BASE}--${size}`,
    className
  );

  return (
    <CustomTag className={rootClassNames} {...otherProps}>
      {icon && <span className={classnames.ICON}>{icon}</span>}
      {children}
    </CustomTag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.oneOf(['large']),
  type: PropTypes.oneOf(['link']),
};

export default Button;
