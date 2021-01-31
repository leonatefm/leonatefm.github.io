import './Footer.scss';
import * as React from 'react';
import breakpoints from 'lib/breakpoints';
import classNames from 'classnames';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const classnames = {
  BASE: 'Footer',
  COPYRIGHT: 'Footer-copyright',
};

function Footer({ className }) {
  const isSmallUp = useMediaQuery({
    minWidth: breakpoints.SMALL,
  });

  return (
    <div className={classNames(classnames.BASE, className)}>
      <p className={classnames.COPYRIGHT}>
        Designed and coded by Chengqi Zhu &copy; 2021
      </p>
      {isSmallUp && <Logo size='small' />}
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
