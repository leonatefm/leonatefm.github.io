import './PageSection.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'PageSection-body',
};

function Body({ children, className }) {
  return (
    <div className={classNames(classnames.BASE, className)}>{children}</div>
  );
}

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Body;
