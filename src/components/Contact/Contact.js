import './Contact.scss';
import * as React from 'react';
import icons from '../../lib/icons';
// import ReactGA from 'react-ga';

class Contact extends React.PureComponent {
  _handleContactClick = (event) => {
    // const contactMethod = event.currentTarget.dataset.method;
    // ReactGA.event({
    //   category: 'Contact',
    //   action: 'Click',
    //   label: contactMethod,
    // });
  };

  render() {
    return (
      <div className='Contact'>
        <a
          className='Contact-link'
          data-method='LinkedIn'
          href='https://www.linkedin.com/in/chengqizhu'
          target='_blank'
          rel='noopener noreferrer'
          onClick={this._handleContactClick}
        >
          {icons.linkedin}
        </a>
        <a
          className='Contact-link'
          data-method='Github'
          href='https://github.com/leonatefm'
          target='_blank'
          rel='noopener noreferrer'
          onClick={this._handleContactClick}
        >
          {icons.github}
        </a>
        {/* <a
          className='Contact-link'
          data-method='Instagram'
          href='https://www.instagram.com/aprilopus/'
          target='_blank'
          rel='noopener noreferrer'
          onClick={this._handleContactClick}
        >
          {icons.instagram}
        </a> */}
        <a
          className='Contact-link'
          data-method='Twitter'
          href='https://twitter.com/aprilopus'
          target='_blank'
          rel='noopener noreferrer'
          onClick={this._handleContactClick}
        >
          {icons.twitter}
        </a>
        <a
          className='Contact-link'
          data-method='Email'
          href='mailto:chengqizhufm@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          onClick={this._handleContactClick}
        >
          {icons.email}
        </a>
      </div>
    );
  }
}

export default Contact;
