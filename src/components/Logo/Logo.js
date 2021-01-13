import './Logo.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as LogoSvg } from 'images/logo.svg';
import * as React from 'react';

const classnames = {
  BASE: 'Logo',
  ICON: 'Logo-icon',
  NAME: 'Logo-name',
};

class Logo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    withName: PropTypes.bool,
  };

  render() {
    const { className, size, withName } = this.props;
    const rootClassNames = classNames(
      classnames.BASE,
      size != null ? `Logo--${size}` : null,
      className
    );
    return (
      <div className={rootClassNames}>
        <LogoSvg className={classnames.ICON} />
        {withName && (
          <span className={classnames.NAME}>
            Chengqi <b>Zhu</b>
          </span>
        )}
      </div>
    );
  }
}

export default Logo;
