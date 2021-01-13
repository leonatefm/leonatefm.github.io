import './Nav.scss';
import * as React from 'react';
import breakpoints from 'lib/breakpoints';
import Contact from 'components/Contact';
import IconButton from 'components/IconButton';
import icons from 'lib/icons';
import Logo from 'components/Logo';
import MediaQuery from 'react-responsive';
import Menu from 'components/Menu';

const classnames = {
  BASE: 'Nav',
  LINK: 'Nav-link',
  MENU: 'Nav-menu',
  MENU_NAV: 'Nav-menuNav',
};

const navItems = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Photograph',
    href: '#photograph',
  },
  {
    title: 'About',
    href: '#about',
  },
];

class Nav extends React.PureComponent {
  state = {
    isMenuOpen: false,
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className={classnames.BASE}>
        <MediaQuery minWidth={breakpoints.MEDIUM}>
          {(matches) => (matches ? this.renderNavItems() : this.renderMenu())}
        </MediaQuery>
        {isMenuOpen && (
          <Menu className={classnames.MENU} clickOff={this.dismissMenu}>
            <Logo size='large' withName />
            <div className={classnames.MENU_NAV}>{this.renderNavItems()}</div>
            <Contact />
          </Menu>
        )}
      </nav>
    );
  }

  renderNavItems() {
    return navItems.map((navItem) => (
      <a
        className={classnames.LINK}
        href={navItem.href}
        key={navItem.href}
        onClick={this._handlerClick}
      >
        {navItem.title}
      </a>
    ));
  }

  renderMenu() {
    return (
      <IconButton theme='light' onClick={this.openMenu}>
        {icons.menu}
      </IconButton>
    );
  }

  openMenu = () => {
    this.setState({
      isMenuOpen: true,
    });
  };

  dismissMenu = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  _handlerClick = (event) => {
    const target = event.currentTarget;
    const href = target.getAttribute('href');
  };
}

export default Nav;
