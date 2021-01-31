import * as React from 'react';
import Article from 'components/Article';
import Button from 'components/Button';
import icons from 'lib/icons';
import image_product_1 from 'images/projects/sm/1.jpg';
import image_product_2 from 'images/projects/sm/2.jpg';
import image_product_3 from 'images/projects/sm/3.jpg';
import image_product_4 from 'images/projects/sm/4.jpg';
import image_product_5 from 'images/projects/sm/5.jpg';
import Project from 'components/Project';

const classnames = {
  BASE: 'SweetMoments',
};

function SweetMoments() {
  return (
    <Project className={classnames.BASE} id='SweetMoments'>
      <Project.Header
        companyName='Appwill'
        jobTitle='UX Designer & iOS Developer'
        projectName='Sweet Moments'
      />
      <Project.Body>
        <Article.Section>
          <h2>Sweet Moments</h2>
          <p>Appwill, 2011</p>
        </Article.Section>

        <Article.Section>
          <h4>Introduction</h4>
          <p>
            Sweet Moments is one of the star products that Appwill created as
            the first generation of mobile social network service. Just like the
            App name, it is a community for people to share their beautiful and
            sweet memories with others, either with friends you are close to or
            strangers who are willing to listen. Human is a natural social
            animal and always has social demand. And back to 2011, the explosive
            growth of smart phone and mobile internet revolutionized the way
            people used to do social interactions for thousands of years.
            Sharing has never been that easy with the small device you have in
            your hand or pocket. Wherever you are, whenever you want, you can
            take out your smart phone, take a photo or even video, write a
            couple of words that pop out from your mind, and within 10 seconds,
            you can share what you are seeing, hearing, feeling or thinking with
            the rest of the world. It is a new era. And Appwill, as a mobile App
            developer pioneer, saw the bright future of mobile internet market
            and since then the team has devoted all the time and effort to
            create products that can make people's daily life easier and better.
            Sweet Moments is one of them.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>My Role</h4>
          <p>
            <b>My Role:</b> UX Designer, iOS Developer Intern, Learner
          </p>
          <p>
            I joined{' '}
            <Article.Link
              href='https://www.apptao.com/'
              rel='noreferrer'
              target='_blank'
            >
              Appwill
            </Article.Link>{' '}
            as an intern when I was a junior college student in Beijing. Back in
            2011, I had just found my interest in the field of human-computer
            interaction, it was very much a fortune meeting this young team who
            centralized user experience design and offered me the best
            opportunity to get involved in every single stage of creating a
            product. Thus, I'd say my primary role during this amazing
            internship experience was a learner, learning from designers, deves,
            product managers, and whoever once stopped by my desk, talked to me,
            inspired me. And with all the help from my friendly co-workers, I
            was then able to get my foot in the door of user experience design
            as well as iOS development.
          </p>
          <p>
            <b>Design Tools:</b> Pencil & Paper, Whiteboard, Adobe Photoshop,
            Adobe Illustrator
          </p>
          <p>
            <b>Tech Stack:</b> Objective-C, Cocoa framework
          </p>
        </Article.Section>

        <Article.Section>
          <h4>Outcome</h4>
          <p>
            Sweet Moments rocketed up to the <b>Top 100</b> Apps in the Social
            networking category in the Chinese App Store very soon after it's
            first launch. After hit the 3 months milestone, we've reached a user
            population of <b>50,000</b> with an extremely high <b>90%</b>{' '}
            retention rate. And around <b>70%</b> of the them turned into daily
            active users and started to generate more and more contents. One of
            our adorable engineers even created a really cool live-time data
            visualization to demonstrate the community activation, so every time
            a new memory was posted we can see a little memory bubble popping up
            in the monitor. It was such an exciting and inspiring moment when we
            saw so many memory bubbles floating around everyday.
          </p>
          <p>
            As you may know, the cold start is usually the most challenging
            stage for any new social network service, and the key of the way
            Appwill overcame this difficulty was a smart user diversion mode
            that introduced a group of elite users from the existing user group
            of our other Apps. And that first bunch of elite users contributed
            the majority of the high quality contents to the community which
            then brought in a lot more new users who were attracted by the
            interesting contents and the vigorous atmosphere. We also worked
            closely with that group of elite users to gain direct feedback about
            our product and selectively took that input into the rapid product
            iterations. With this healthy and sustaining user feedback loop, we
            were able to respond to our users and market in a very agile pace.
            Although we hadn't really figured out the future business model to
            bring in revenues, we started something small but solid that people
            love and enjoy using everyday. It's a fascinating experience for me
            to witness and contribute to the birth of Sweet Moments.
          </p>
          <br />
          <Article.Slider type='mobile'>
            <img src={image_product_1} alt='Sweet Moments App' />
            <img src={image_product_2} alt='Sweet Moments App' />
            <img src={image_product_3} alt='Sweet Moments App' />
            <img src={image_product_4} alt='Sweet Moments App' />
            <img src={image_product_5} alt='Sweet Moments App' />
          </Article.Slider>
          <br />
          <br />
          <p className='centered'>
            <Button
              href='https://itunes.apple.com/cn/app/mei-hao-shi-guang/id467423410?l=en&mt=8'
              icon={icons.appstore}
              rel='noreferrer'
              size='large'
              target='_blank'
              type='link'
            >
              App Store
            </Button>
          </p>
        </Article.Section>
      </Project.Body>
    </Project>
  );
}

export default SweetMoments;
