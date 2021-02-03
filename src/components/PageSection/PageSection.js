import './PageSection.scss';
import * as React from 'react';
import Body from './Body';
import classNames from 'classnames';
import Header from './Header';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'PageSection',
};

function PageSection({ children, className, id }) {
  return (
    <div className={classNames(classnames.BASE, className)} id={id}>
      {children}
    </div>
  );
}

PageSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

PageSection.Header = Header;
PageSection.Body = Body;

export default PageSection;
