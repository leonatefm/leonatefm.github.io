import './AboutPage.scss';
import * as React from 'react';
import Button from 'components/Button';
import classNames from 'classnames';
import Contact from 'components/Contact';
import icons from 'lib/icons';
import PageSection from 'components/PageSection';

const classnames = {
  BASE: 'AboutPage',
  CONTACT: 'AboutPage-contact',
  INTRODUCTION: 'AboutPage-introduction',
  PHOTO: 'AboutPage-photo',
  STORY: 'AboutPage-story',
};

function AboutPage() {
  return (
    <PageSection className={classNames(classnames.BASE)} id='about'>
      <PageSection.Header icon={icons.person}>
        To be an empathetic designer, a creative engineer, an insightful
        photographer and an inspiring storyteller.
      </PageSection.Header>

      <PageSection.Body>
        <div className={classnames.INTRODUCTION}>
          <div className={classnames.PHOTO} />
          <div className={classnames.STORY}>
            <p>
              I was born in the southeast coastal area of China, in a small,
              quite and beautiful town. But I was not a quite kid, in the
              reverse, I was always the noisy one with tons of questions and
              expressions. Fortunately, that curiosity has led me to many
              delightful advantages in my life. Delving into interaction design,
              is definitely one of them.
            </p>
            <p>
              An occasional TED talk, The Sixth Sense, opened the door of a
              brand new world for me, a field called Human Computer Interaction.
              I was so amazed and inspired by that innovative connection they
              created between the physical and digital world. And that impulse
              soon evolved into my desire to become a professional in this area,
              pushed me to set foot on the soil of US and pursue the HCI Master
              degree in University of Michigan.
            </p>
            <p>
              And now, my curiosity has brought me to Twitter, to be a part of
              the inspiring journey of sharing what's happening around the world
              and serving the public conversation. Currently, I'm a Sr Design
              Engineer working on Twitter's design systems, aiming to create a
              unified design language across the company, to deliver a cohesive
              user experience to all Twitter users and reflect one Twitter
              brand.
            </p>
            <p>
              With the goal of innovating the way human interacts with digital
              information, I'm eager to be involved with any freelance projects,
              opportunities & collaborations. Feel free to drop a message if you
              wanna talk.
            </p>
            {/* <p>
              <Button
                href={`${process.env.PUBLIC_URL}/resume.pdf`}
                icon={icons.clip}
                rel='noreferrer'
                target='_blank'
                type='link'
              >
                Resume
              </Button>
            </p> */}
          </div>
        </div>
        <div className={classnames.CONTACT}>
          <h5>{icons.chatbox}Contact</h5>
          <p>
            <a
              href='mailto:chengqizhufm@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              chengqizhufm@gmail.com
            </a>
          </p>
          <p>San Francisco, CA</p>
          <Contact />
        </div>
      </PageSection.Body>
    </PageSection>
  );
}

export default AboutPage;
