import './HomePage.scss';
import * as React from 'react';
import breakpoints from 'lib/breakpoints';
import classNames from 'classnames';
import Logo from 'components/Logo';
import Loop from 'components/Loop';
import Nav from 'components/Nav';

import { useMediaQuery } from 'react-responsive';

const classnames = {
  BASE: 'HomePage',
  CONTENT: 'HomePage-content',
  DESCRIPTION: 'HomePage-description',
  HEADER: 'HomePage-header',
  LOOP: 'HomePage-loop',
  NAV: 'HomePage-nav',
  SECTION: 'HomePage-section',
  SECTION_DEVELOP: 'HomePage-section--develop',
  SECTION_DESIGN: 'HomePage-section--design',
  SUBTITLE: 'HomePage-subtitle',
  TITLE: 'HomePage-title',
};

function HomePage() {
  const isSmallUp = useMediaQuery({
    minWidth: breakpoints.SMALL,
  });
  const isMediumUp = useMediaQuery({
    minWidth: breakpoints.MEDIUM,
  });
  const isLargeUp = useMediaQuery({
    minWidth: breakpoints.LARGE,
  });

  const loopSize = isLargeUp ? 'large' : isMediumUp ? 'medium' : 'small';

  return (
    <div className={classnames.BASE}>
      <div
        className={classNames(classnames.SECTION, classnames.SECTION_DESIGN)}
      >
        <header className={classnames.HEADER}>
          <Logo size='large' withName={isSmallUp ? true : false} />
        </header>

        <div className={classnames.CONTENT}>
          <p className={classnames.SUBTITLE}>Design with</p>
          <p className={classnames.TITLE}>empathy</p>
          <p className={classnames.DESCRIPTION}>
            I’m a designer who creates delightful user experience.
          </p>
        </div>

        <div className={classnames.LOOP}>
          <Loop size={loopSize} />
        </div>
      </div>

      <div
        className={classNames(classnames.SECTION, classnames.SECTION_DEVELOP)}
      >
        <header className={classnames.HEADER}>
          <div className={classnames.NAV}>
            <Nav />
          </div>
        </header>

        <div className={classnames.CONTENT}>
          <p className={classnames.SUBTITLE}>Develop with</p>
          <p className={classnames.TITLE}>creativity</p>
          <p className={classnames.DESCRIPTION}>
            I’m a developer who brings the design to life with code.
          </p>
        </div>

        <div className={classnames.LOOP}>
          <Loop size={loopSize} theme='light' />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
