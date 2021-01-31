import './PageSection.scss';
import * as React from 'react';
import classNames from 'classnames';
import icons from 'lib/icons';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'PageSection-header',
  CONTENT: 'PageSection-headerContent',
  ICON: 'PageSection-headerIcon',
  QUOTE_ICON: 'PageSection-headerQuoteIcon',
};

function Header({ children, className, icon }) {
  return (
    <div className={classNames(classnames.BASE, className)}>
      <div className={classnames.ICON}>{icon}</div>
      <div className={classnames.CONTENT}>
        {icons.quote}
        {children}
      </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default Header;
