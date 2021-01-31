import './Project.scss';
import * as React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import IconButton from 'components/IconButton';
import icons from 'lib/icons';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'Project-header',
  COMPANY: 'Project-headerCompanyName',
  CONTENT: 'Project-headerContent',
  JOB: 'Project-headerJobTitle',
  NAV: 'Project-headerNav',
  PROJECT: 'Project-headerProjectName',
};

function Header(props) {
  const {
    className,
    closeProject,
    companyName,
    isProjectOpen,
    jobTitle,
    openProject,
    projectName,
  } = props;

  const rootClassNames = classNames(classnames.BASE, className);

  const _handleKeydown = (event) => {
    if (event.key === 'Enter') {
      openProject();
    } else {
      return false;
    }
  };

  return (
    <div className={rootClassNames}>
      <CSSTransition
        classNames={classnames.NAV}
        in={isProjectOpen}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <header className={classnames.NAV}>
          <Logo withName />
          <IconButton theme='light' onClick={closeProject}>
            {icons.close}
          </IconButton>
        </header>
      </CSSTransition>

      <CSSTransition
        classNames={classnames.CONTENT}
        in={!isProjectOpen}
        timeout={500}
        unmountOnExit
      >
        <div
          className={classnames.CONTENT}
          tabIndex='0'
          onClick={openProject}
          onKeyDown={_handleKeydown}
        >
          <p className={classnames.COMPANY}>{companyName}</p>
          <p className={classnames.PROJECT}>{projectName}</p>
          <p className={classnames.JOB}>{jobTitle}</p>
        </div>
      </CSSTransition>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  closeProject: PropTypes.func,
  companyName: PropTypes.string.isRequired,
  isProjectOpen: PropTypes.bool,
  jobTitle: PropTypes.string.isRequired,
  openProject: PropTypes.func,
  projectName: PropTypes.string.isRequired,
};

export default Header;
