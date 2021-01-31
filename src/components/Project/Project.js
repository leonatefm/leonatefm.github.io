import './Project.scss';
import * as React from 'react';
import Body from './Body';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import focusTrap from 'lib/focus-trap';
import Header from './Header';
import IconButton from 'components/IconButton';
import icons from 'lib/icons';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import SweetScroll from 'sweet-scroll';

const classnames = {
  BASE: 'Project',
  STICKY_NAV: 'Project-stickyNav',
};

class Project extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static Header = Header;
  static Body = Body;

  state = {
    isOpen: false,
    showStickyNav: false,
  };

  projectRef = React.createRef();

  scrollPositionBeforeOpen = window.scrollY;
  lastScrollTop = 0;

  componentDidMount() {
    this.scroller = new SweetScroll({
      duration: 400,
      easing: 'easeInOutQuad',
    });
  }

  componentWillUnmount() {
    this.scroller.destroy();
  }

  render() {
    const { children, className, id } = this.props;
    const { isOpen } = this.state;

    const output = React.Children.map(children, (child) => {
      if (child.type === Header) {
        const headerProps = {
          isProjectOpen: isOpen,
          openProject: this.openProject,
          closeProject: this.closeProject,
        };
        return React.cloneElement(child, headerProps);
      } else if (child.type === Body) {
        const bodyProps = {
          isProjectOpen: isOpen,
        };
        return React.cloneElement(child, bodyProps);
      } else {
        return null;
      }
    });

    return (
      <CSSTransition
        classNames={classnames.BASE}
        in={isOpen}
        onEntered={this._handleProjectOpened}
        onExit={this._handleProjectWillClose}
        timeout={500}
      >
        <div
          className={classNames(classnames.BASE, className)}
          id={id}
          ref={this.projectRef}
        >
          {this.renderStickyNav()}
          {output}
        </div>
      </CSSTransition>
    );
  }

  renderStickyNav() {
    const { showStickyNav } = this.state;
    return (
      <CSSTransition
        classNames={classnames.STICKY_NAV}
        in={showStickyNav}
        mountOnEnter
        timeout={300}
        unmountOnExit
      >
        <nav className={classnames.STICKY_NAV}>
          <Logo withName />
          <IconButton onClick={this.closeProject}>{icons.close}</IconButton>
        </nav>
      </CSSTransition>
    );
  }

  /* Actions */

  openProject = () => {
    // Record current body scroll position
    this.scrollPositionBeforeOpen = window.scrollY;
    // Scroll body to the project element before open it
    const projectPosition = this.projectRef.current.offsetTop;
    this.scroller.toTop(projectPosition);

    disableBodyScroll(this.projectRef.current);

    this.setState({
      isOpen: true,
    });

    focusTrap.updateContainerElements(this.projectRef.current);
    focusTrap.activate();

    document.addEventListener('keydown', this._handleKeydown);
    this.projectRef.current.addEventListener('scroll', this._handleScroll);
  };

  closeProject = () => {
    // Reset project scroll position before close
    this.projectRef.current.scrollTop = 0;
    // Scroll body back to the position before open the project
    this.scroller.toTop(this.scrollPositionBeforeOpen);

    enableBodyScroll(this.projectRef.current);

    this.setState({
      isOpen: false,
      showStickyNav: false,
    });

    focusTrap.deactivate();

    document.removeEventListener('keydown', this._handleKeydown);
    this.projectRef.current.removeEventListener('scroll', this._handleScroll);
  };

  /* Event handler */

  // Set fix position after project open animation to avoid resizing impact
  _handleProjectOpened = () => {
    this.projectRef.current.classList.add('open');
  };

  // Remove fix position before project close to enable close animation
  _handleProjectWillClose = () => {
    this.projectRef.current.classList.remove('open');
  };

  _handleKeydown = (event) => {
    if (event.key === 'Escape') {
      this.closeProject();
    } else {
      return false;
    }
  };

  _handleScroll = () => {
    window.requestAnimationFrame(() => {
      const currentScrollTop = this.projectRef.current.scrollTop;

      // Ignore scrolls when the distance is less than the minimum delta
      if (Math.abs(currentScrollTop - this.lastScrollTop) <= 80) return;

      const headerNav = document.querySelector('.Project-headerNav');
      const headerNavHeight = headerNav ? headerNav.offsetHeight : 0;

      // Show sticky nav when scrolling up and the header nav is out of viewport
      const shouldShowStickyNav =
        currentScrollTop < this.lastScrollTop &&
        currentScrollTop > headerNavHeight;

      this.setState({
        showStickyNav: shouldShowStickyNav,
      });

      // Update lastScrollTop
      this.lastScrollTop = this.projectRef.current.scrollTop;
    });
  };
}

export default Project;
