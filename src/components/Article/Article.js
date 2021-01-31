import './Article.scss';
import 'slick-carousel/slick/slick.css';
import * as React from 'react';
import breakpoints from 'lib/breakpoints';
import classNames from 'classnames';
import image_imac_frame from 'images/imac-frame.png';
import image_macbook_frame from 'images/macbook-frame.png';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

const classnames = {
  BASE: 'Article',
  LINK: 'Article-link',
  MULTIMEIDA: 'Article-multimedia',
  MULTIMEIDA_CAPTION: 'Article-multimediaCaption',
  MULTIMEIDA_GROUP: 'Article-multimediaGroup',
  MULTIMEIDA_WRAPPER: 'Article-multimediaWrapper',
  QUOTE: 'Article-quote',
  QUOTE_AUTHOR: 'Article-quoteAuthor',
  QUOTE_CONTENT: 'Article-quoteContent',
  SECTION: 'Article-section',
  SECTION_CONTENT: 'Article-sectionContent',
  SLIDER: 'Article-slider',
  SLIDER_FRAME: 'Article-sliderFrame',
};

function Article({ children, className }) {
  return (
    <div className={classNames(classnames.BASE, className)}>{children}</div>
  );
}

Article.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Article.Link = Link;
Article.Multimedia = Multimedia;
Article.MultimediaGroup = MultimediaGroup;
Article.Quote = Quote;
Article.Section = Section;
Article.Slider = Slider;

function Section({ children, className }) {
  return (
    <section className={classNames(classnames.SECTION, className)}>
      <div className={classnames.SECTION_CONTENT}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function Multimedia({ caption, children, className, type, withBorder }) {
  const rootClassnames = classNames(
    classnames.MULTIMEIDA,
    type ? `${classnames.MULTIMEIDA}--${type}` : null,
    withBorder ? `${classnames.MULTIMEIDA}--withBorder` : null,
    className
  );

  return (
    <div className={rootClassnames}>
      <div className={classnames.MULTIMEIDA_WRAPPER}>{children}</div>
      {caption && (
        <span className={classnames.MULTIMEIDA_CAPTION}>{caption}</span>
      )}
    </div>
  );
}

Multimedia.propTypes = {
  caption: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['video']),
  withBorder: PropTypes.bool,
};

function MultimediaGroup({ children, className, column }) {
  const rootClassnames = classNames(
    classnames.MULTIMEIDA_GROUP,
    column ? `${classnames.MULTIMEIDA_GROUP}--column-${column}` : null,
    className
  );

  return <div className={rootClassnames}>{children}</div>;
}

MultimediaGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.number,
};

function Slider({ children, className, type }) {
  const defaultSettings = {
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
  };

  const typeSettings = {
    center: {
      centerMode: true,
      centerPadding: '12%',
    },
    dynamic: {
      adaptiveHeight: true,
    },
    mobile: {
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '10%',
      responsive: [
        {
          breakpoint: breakpoints.MEDIUM,
          settings: {
            slidesToShow: 1,
            centerPadding: '20%',
          },
        },
      ],
    },
    multiple: {
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: breakpoints.SMALL,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: breakpoints.MEDIUM,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    },
  };

  const settings = type
    ? { ...defaultSettings, ...typeSettings[type] }
    : defaultSettings;

  const rootClassnames = classNames(
    classnames.SLIDER,
    type ? `${classnames.SLIDER}--${type}` : null,
    className
  );

  let sliderFrame;

  if (type === 'macbook') {
    sliderFrame = image_macbook_frame;
  } else if (type === 'imac') {
    sliderFrame = image_imac_frame;
  }

  return (
    <div className={rootClassnames}>
      {sliderFrame && (
        <img
          className={classnames.SLIDER_FRAME}
          src={sliderFrame}
          alt={`${type} frame`}
        />
      )}
      <SlickSlider {...settings}>{children}</SlickSlider>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'center',
    'dynamic',
    'imac',
    'macbook',
    'mobile',
    'multiple',
  ]),
};

function Link({ children, className, ...otherProps }) {
  return (
    <a className={classNames(classnames.LINK, className)} {...otherProps}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function Quote({ author, children, className }) {
  return (
    <div className={classNames(classnames.QUOTE, className)}>
      <p className={classnames.QUOTE_CONTENT}>{children}</p>
      <p className={classnames.QUOTE_AUTHOR}>{author}</p>
    </div>
  );
}

Quote.propTypes = {
  author: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Article;
