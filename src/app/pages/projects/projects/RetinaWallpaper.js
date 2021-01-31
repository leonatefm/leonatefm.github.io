import * as React from 'react';
import Article from 'components/Article';
import Button from 'components/Button';
import icons from 'lib/icons';
import image_product_1 from 'images/projects/wallpaper/home.jpg';
import image_product_2 from 'images/projects/wallpaper/apps.jpg';
import image_product_3 from 'images/projects/wallpaper/wallpaper.jpg';
import image_product_4 from 'images/projects/wallpaper/contact.jpg';
import image_product_5 from 'images/projects/wallpaper/about.jpg';
import Project from 'components/Project';

const classnames = {
  BASE: 'RetinaWallpaper',
  SLIDER: 'RetinaWallpaper-slider',
};

function RetinaWallpaper() {
  return (
    <Project className={classnames.BASE} id='RetinaWallpaper'>
      <Project.Header
        companyName='Appwill'
        jobTitle='UX Designer & Web Developer'
        projectName='Retina Wallpaper'
      />
      <Project.Body>
        <Article.Section>
          <h2>Retina Wallpaper</h2>
          <p>Appwill, 2012</p>
        </Article.Section>

        <Article.Section>
          <h4>Introduction</h4>
          <p>
            Retina Wallpaper is a marketing website I designed and created to
            promote our amazing wallpaper mobile Apps when I did my internship
            with Appwill. Although it is a very young tech startup with only
            around 20 people, Appwill is a mobile App developer pioneer who saw
            the bright future of mobile internet market and the team has been
            devoted to creating products that can make people's daily life
            easier and better. With the early awareness of people's eager desire
            to customize their iPhones, giving the fact that all of them look
            and even sound exactly the same, Appwill designed and launched a
            series of wallpaper Apps that servers different user groups and most
            of them were occupying the top rank in App Store. Very soon, Appwill
            became to be one of the best wallpaper providers and gained millions
            of users around the world. By the time I was working on this
            project, we had reached <b>50,000,000</b> total downloads milestone
            from the Apple App Store. And this promotion site was born with the
            mission to extend the marketing channels to cover a much wider range
            of user population and to push that number even further.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>My Role</h4>
          <p>
            <b>My Role:</b> UX Designer, Web Developer, Learner
          </p>
          <p>
            I joined{' '}
            <Article.Link
              href='https://www.apptao.com/'
              target='_blank'
              rel='noreferrer'
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
            inspired me. And with all the help from this group of passionated
            creative workers, I then played a better and better role in the team
            as a UX designer and Web developer.
          </p>
          <p>
            <b>Design Tools:</b> Pencil & Paper, Whiteboard, Adobe Photoshop
          </p>
          <p>
            <b>Tech Stack:</b> HTML5, CSS3, Javascript, jQuery, AJAX
          </p>
        </Article.Section>

        <Article.Section>
          <h4>Outcome</h4>
          <p>
            In the first 3 months after we launched the Retina Wallpaper
            website, it introduced more than <b>30,000</b> new users directly
            from this site, which contributed around <b>20%</b> proportion of
            the total App downloads in that period of time. It was really a
            thrilling result that exceeded everyone's expectation. The success
            of the Retina Wallpaper website not only opened a new window for
            promoting our wallpaper mobile Apps to desktop users. But also, it
            proved the concept that a broadly accessible website is a very
            effective marketing channel to attract new users from all the
            different platforms because this media is much easier and cheaper to
            be broadcasted with a quick overview of the product, some exposure
            of its trending contents prior download and even a place to see and
            leave feedback. Later on, we even added sections to introduce the
            team and job openings. We also launched several other promotion
            sites for the rest of products and all of them received quite well
            market responses.
          </p>
          <br />
          <Article.Slider className={classnames.SLIDER} type='dynamic'>
            <img src={image_product_1} alt='Retina Wallpaper Website' />
            <img src={image_product_2} alt='Retina Wallpaper Website' />
            <img src={image_product_3} alt='Retina Wallpaper Website' />
            <img src={image_product_4} alt='Retina Wallpaper Website' />
            <img src={image_product_5} alt='Retina Wallpaper Website' />
          </Article.Slider>
          <br />
          <br />
          <p className='centered'>
            <Button
              href='http://www.apphope.com'
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

export default RetinaWallpaper;
