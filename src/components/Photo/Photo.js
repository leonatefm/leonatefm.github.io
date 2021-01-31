import './Photo.scss';
import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classnames = {
  BASE: 'Photo',
  CAPTION: 'Photo-caption',
  IMAGE: 'Photo-image',
  METADATA: 'Photo-metadata',
};

function Photo({ caption, className, metadata, src }) {
  return (
    <div className={classNames(classnames.BASE, className)}>
      <img alt={caption} className={classnames.IMAGE} src={src} />
      <p className={classnames.CAPTION}>{caption}</p>
      {metadata && <p className={classnames.METADATA}>{metadata}</p>}
    </div>
  );
}

Photo.propTypes = {
  caption: PropTypes.string.isRequired,
  className: PropTypes.string,
  metadata: PropTypes.node,
  src: PropTypes.string.isRequired,
};

export default Photo;
