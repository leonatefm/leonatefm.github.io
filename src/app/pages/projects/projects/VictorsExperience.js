import * as React from 'react';
import Article from 'components/Article';
import Button from 'components/Button';
import icons from 'lib/icons';
import image_product_1 from 'images/projects/ve/1.jpg';
import image_product_2 from 'images/projects/ve/2.jpg';
import image_product_3 from 'images/projects/ve/3.jpg';
import image_product_4 from 'images/projects/ve/4.jpg';
import image_product_5 from 'images/projects/ve/5.jpg';
import Project from 'components/Project';

const classnames = {
  BASE: 'VictorsExperience',
};

function VictorsExperience() {
  return (
    <Project className={classnames.BASE} id='VictorsExperience'>
      <Project.Header
        companyName='University of Michigan'
        jobTitle='Web Designer & Developer'
        projectName='Victors Experience'
      />
      <Project.Body>
        <Article.Section>
          <h2>Victors Experience</h2>
          <p>University of Michigan, 2013</p>
        </Article.Section>

        <Article.Section>
          <h4>Introduction</h4>
          <p>
            The Michigan Engineering Victors Experience is a product started and
            managed by the Office of Communication & Marketing to help build and
            strengthen relationships between Michigan Engineering and its key
            audiences, including prospective students, peer faculty and
            institutions, alumni, donors and the media. In University of
            Michigan we have a ton of cool content we want to share with our
            audiences, so establishing an intelligent way to distribute
            interesting content to certain target audience group becomes really
            critical in the connection with them. And Victors Experience is one
            solid step we took toward this goal.
          </p>
          <p>
            This site mainly consists of three parts, a Javascript based
            client-side Single-Page Application, a PHP based server-side app and
            a custom Content Management System that it connects to. The
            client-side browser experience allows a user to view and customize
            their content based on their own preferences. The server app is
            basically an orchestra layer that handles AJAX requests from the
            client and return according contents from the CMS. Lastly, the CMS
            is internally used to manage our contents and user data. For
            example, some of our alumni are fairly high profile and we already
            know what they're interested in, so we will create special accounts
            for them using the CMS to input what types of content we anticipated
            them liking.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>My Role</h4>
          <p>
            <b>My Role:</b> Web Designer & Developer
          </p>
          <p>
            I joined the{' '}
            <Article.Link
              href='https://cm.engin.umich.edu/'
              rel='noreferrer'
              target='_blank'
            >
              Office of Communication and Marketing
            </Article.Link>{' '}
            as a part-time student-employee when I was in my second year
            pursuing the master degree of Human Computer Interaction in
            University of Michigan. During my half-year time there, I worked
            closely with{' '}
            <Article.Link
              href='https://www.linkedin.com/in/ben-c-collins'
              rel='noreferrer'
              target='_blank'
            >
              Ben Collins
            </Article.Link>{' '}
            who was the dev/design lead of the Victors Experience project. My
            primary focus was the front end web app design and development while
            I also helped in structuring the back end APIs and participated in
            some design work. Overall, it was a great in-campus opportunity for
            me to practise what I learned from the textbooks and apply that to
            an industry product that solves real-life problem.
          </p>
          <p>
            <b>Design Tools:</b> Pencil & Paper, Adobe Photoshop, Adobe
            Illustrator
          </p>
          <p>
            <b>Tech Stack:</b> HTML5, CSS3, Javascript, jQuery, AJAX, PHP,
            Facebook APIs, Git
          </p>
        </Article.Section>

        <Article.Section>
          <h4>Outcome</h4>
          <p>
            Since this is an in-campus part-time job I did as a student, so the
            outcome of the project is probably more about my personal growth as
            a Front End Developer and a UX Designer in addition to my limited
            contribution to the goal of the team to promote Michigan Engineering
            and enhance its reputation. Through this six months' project, I
            gained a better understanding about how a modern web app could be
            structured end to end and how the data architecture looks like in
            order for it to function seamlessly. I also learned a lot about what
            kind of slick animation we can achieve purely using CSS and how big
            impact that a little animation and that delightful moment can
            actually make to the end user experience. And all these little
            inspiration here and there provided me a totally different
            perspective to reflect on and rethink about what I had seen and
            heard from school.
          </p>
          <br />
          <Article.Slider type='dynamic'>
            <img src={image_product_1} alt='Victors Experience Website' />
            <img src={image_product_2} alt='Victors Experience Website' />
            <img src={image_product_3} alt='Victors Experience Website' />
            <img src={image_product_4} alt='Victors Experience Website' />
            <img src={image_product_5} alt='Victors Experience Website' />
          </Article.Slider>
          <br />
          <br />
          <p className='centered'>
            <Button
              href='http://victors.engin.umich.edu'
              icon={icons.compass}
              rel='noreferrer'
              size='large'
              target='_blank'
              type='link'
            >
              Launch website
            </Button>
          </p>
        </Article.Section>
      </Project.Body>
    </Project>
  );
}

export default VictorsExperience;
