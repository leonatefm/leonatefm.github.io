import './Menu.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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
    clickOff: PropTypes.func,
  };

  el = document.createElement('div');
  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.getElementById('root').appendChild(this.el);
    document.body.classList.add('modal-open');
    disableBodyScroll(this.el);
    setTimeout(() => {
      this.setState({
        isOpen: true,
      });
    }, 10);
  }

  componentWillUnmount() {
    document.getElementById('root').removeChild(this.el);
    document.body.classList.remove('modal-open');
    enableBodyScroll(this.el);
  }

  dismissMenu = () => {
    this.setState({
      isOpen: false,
    });
    setTimeout(() => {
      this.props.clickOff();
    }, 300);
  };

  render() {
    const { children, className } = this.props;
    const { isOpen } = this.state;

    return ReactDOM.createPortal(
      <div className={classNames(classnames.BASE, { open: isOpen }, className)}>
        <div className={classnames.BACKDROP} onClick={this.dismissMenu}></div>
        <div className={classnames.PANEL}>
          <div className={classnames.CONTENT}>{children}</div>
        </div>
      </div>,
      this.el
    );
  }
}

export default Menu;
