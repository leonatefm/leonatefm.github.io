import './Menu.scss';
import * as React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import focusTrap from 'lib/focus-trap';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const classnames = {
  BACKDROP: 'Menu-backdrop',
  BASE: 'Menu',
  CONTENT: 'Menu-content',
  PANEL: 'Menu-panel',
};

class Menu extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onDismiss: PropTypes.func,
  };

  el = document.createElement('div');
  state = {
    isOpen: true,
  };

  componentDidMount() {
    document.getElementById('root').appendChild(this.el);
    disableBodyScroll(this.el);
    // Trap focus in the menu
    focusTrap.updateContainerElements(this.el);
    focusTrap.activate();
    document.addEventListener('keydown', this._handleKeydown);
  }

  componentWillUnmount() {
    document.getElementById('root').removeChild(this.el);
    enableBodyScroll(this.el);
    // Remove focus trap
    focusTrap.deactivate();
    document.removeEventListener('keydown', this._handleKeydown);
  }

  dismissMenu = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { children, className, onDismiss } = this.props;
    const { isOpen } = this.state;

    return ReactDOM.createPortal(
      <CSSTransition
        appear
        classNames={classnames.BASE}
        in={isOpen}
        onExited={onDismiss}
        timeout={300}
      >
        <div className={classNames(classnames.BASE, className)}>
          <div className={classnames.BACKDROP} onClick={this.dismissMenu}></div>
          <div className={classnames.PANEL}>
            <div className={classnames.CONTENT}>{children}</div>
          </div>
        </div>
      </CSSTransition>,
      this.el
    );
  }

  /* Event handler */

  _handleKeydown = (event) => {
    if (event.key === 'Escape') {
      this.dismissMenu();
    } else {
      return false;
    }
  };
}

export default Menu;
