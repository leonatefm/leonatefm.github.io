import './Project.scss';
import * as React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Footer from 'components/Footer';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'Project-body',
};

function Body({ children, className, isProjectOpen }) {
  return (
    <CSSTransition
      classNames={classnames.BASE}
      in={isProjectOpen}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <div className={classNames(classnames.BASE, className)}>
        {children}
        <Footer />
      </div>
    </CSSTransition>
  );
}

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Body;
