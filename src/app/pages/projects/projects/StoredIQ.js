import * as React from 'react';
import Article from 'components/Article';
import Button from 'components/Button';
import icons from 'lib/icons';
import image_as_is_1 from 'images/projects/siq4l/siq4l-as-is-1.jpg';
import image_as_is_2 from 'images/projects/siq4l/siq4l-as-is-2.jpg';
import image_as_is_3 from 'images/projects/siq4l/siq4l-as-is-3.jpg';
import image_as_is_4 from 'images/projects/siq4l/siq4l-as-is-4.jpg';
import image_as_is_5 from 'images/projects/siq4l/siq4l-as-is-5.jpg';
import image_before_product_1 from 'images/projects/siq4l/Before_Atlas_SIQ_Page_1.jpg';
import image_before_product_2 from 'images/projects/siq4l/Before_Atlas_SIQ_Page_2.jpg';
import image_midfi_prototype from 'images/projects/siq4l/midfi.jpg';
import image_paper_prototype_1 from 'images/projects/siq4l/paperprototype_1.jpg';
import image_paper_prototype_2 from 'images/projects/siq4l/paperprototype_2.jpg';
import image_persona_dave from 'images/projects/siq4l/siq4l-persona-dave.jpg';
import image_persona_paige from 'images/projects/siq4l/siq4l-persona-paige.jpg';
import image_persona_stewart from 'images/projects/siq4l/siq4l-persona-stewart.jpg';
import image_product_1 from 'images/projects/siq4l/product/1.jpg';
// import image_product_2 from 'images/projects/siq4l/product/2.jpg';
import image_product_3 from 'images/projects/siq4l/product/3.jpg';
import image_product_4 from 'images/projects/siq4l/product/4.jpg';
// import image_product_5 from 'images/projects/siq4l/product/5.jpg';
import image_product_6 from 'images/projects/siq4l/product/6.jpg';
import image_product_7 from 'images/projects/siq4l/product/7.jpg';
// import image_product_8 from 'images/projects/siq4l/product/8.jpg';
import image_product_9 from 'images/projects/siq4l/product/9.jpg';
import image_product_10 from 'images/projects/siq4l/product/10.jpg';
import image_product_11 from 'images/projects/siq4l/product/11.jpg';
// import image_product_12 from 'images/projects/siq4l/product/12.jpg';
import image_product_13 from 'images/projects/siq4l/product/13.jpg';
import image_product_14 from 'images/projects/siq4l/product/14.jpg';
import image_sponsor_user_program from 'images/projects/siq4l/siq4l-sponsor-user-program.jpg';
import image_user_ecosystem from 'images/projects/siq4l/siq4l-user-ecosystem.jpg';
import Project from 'components/Project';
import youtubeUtils from 'lib/youtubeUtils';

const classnames = {
  BASE: 'StoredIQ',
};

const videoSources = {
  youtube: 'https://www.youtube.com/embed/f-P4d4WlSyk?rel=0&enablejsapi=1',
  cuplayer:
    'http://go.plvideo.cn/front/video/preview?vid=adb1a48b180ed26aa74492851ff569a4_a',
};

function StoredIq() {
  const coreTeam = [
    {
      name: 'Rose Newton',
      title: 'Design Manager',
      link: 'http://www.rosenewton.com',
    },
    {
      name: 'Vickie Culbertson',
      title: 'Design Lead',
      link: 'http://vickieculbertson.com',
    },
    {
      name: 'Nick Pausback',
      title: 'Design Lead',
      link: 'https://www.linkedin.com/in/nickpausback',
    },
    {
      name: 'Shelby Aranyi',
      title: 'UX & Visual Designer',
      link: 'https://saranyi.com',
    },
    {
      name: 'McKenzie Carlile',
      title: 'UX Designer',
      link: 'http://www.mckenziecarlile.com',
    },
    {
      name: 'Derrick Ligon',
      title: 'Visual Designer',
      link: 'http://www.derrickligon.com',
    },
    {
      name: 'Noelle Hoffman',
      title: 'Visual Designer',
      link: 'https://noellehoffman.com',
    },
    {
      name: 'Amanda McMicken',
      title: 'Visual Designer',
      link: 'http://amandamcmicken.com',
    },
    {
      name: 'Hal Wuertz',
      title: 'UX Designer & Researcher',
      link: 'http://halwuertz.com',
    },
    {
      name: 'Meghan Corbett',
      title: 'Design Researcher',
      link: 'https://www.linkedin.com/in/meghancorbett',
    },
    {
      name: 'Brent Benton',
      title: 'Engineer Lead',
      link: 'https://www.linkedin.com/in/brentbenton',
    },
    {
      name: 'Masato Nuguchi',
      title: 'Senior Technical Staff',
      link: 'https://www.linkedin.com/in/masato-noguchi-2a14062',
    },
    {
      name: 'Thomas Hampp',
      title: 'Software Architect',
      link: 'https://www.linkedin.com/in/thomas-hampp-0602092',
    },
    {
      name: 'Irina Simpson',
      title: 'Senior Product Manager',
      link: 'https://www.linkedin.com/in/irinasimpson',
    },
  ];

  return (
    <Project className={classnames.BASE} id='StoredIQ'>
      <Project.Header
        companyName='IBM Design'
        jobTitle='UX Designer & Prototyper'
        projectName='StoredIQ For Legal'
      />
      <Project.Body>
        <Article.Section>
          <h2>StoredIQ For Legal</h2>
          <p>IBM, 2014 - 2016</p>
        </Article.Section>

        <Article.Section>
          <h4>Introduction</h4>
          <p>
            Enterprise organizations today are at a critical intersection of
            increasing data growth and declining data value, creating a ripple
            effect across the business and exposing the organization to
            increasing expense, as well as legal and compliance risk. From daily
            emails, HR records to private client documents, companys are
            producing unfathomable amount of data every single day. Not only it
            costs exorbitant expense to retain all of those data accumulated day
            by day, it also becomes a black hole when comes to corporate
            lawsuits. Companys involved in legal cases are required to identify,
            preserve, collect and export case-related evidence to the court,
            thus lack of insights into their data usually leads to the extreme
            risk and cost when going through the litigation process.
          </p>
          <p>
            StoredIQ for Legal is an IBM product designed to optimize enterprise
            e-discovery workflow and legal processes as an indispensable
            component of the information lifecycle governance offering suite. We
            incorporated muitlple exsiting disparate IBM products and transform
            them into one coherent platform for the legal departments and IT
            team to streamline their legal hold notification process, enable the
            in-place early data assessment and facilitate data identification,
            collection and legal review. Our ultimate goal is to help
            enterprises improve their information economics strategy, lower
            information cost and risk, and maximize data value.
          </p>

          <Article.MultimediaGroup column={1}>
            <Article.Multimedia
              caption='Reduce Cost, Risk and Time in the eDiscovery Process with IBM StoredIQ for Legal'
              type='video'
            >
              <iframe
                allow='encrypted-media'
                allowFullScreen
                frameBorder='0'
                src={
                  youtubeUtils.canAccess() === true
                    ? videoSources.youtube
                    : videoSources.cuplayer
                }
                title='Introduction video for StoredIQ for Legal'
              ></iframe>
            </Article.Multimedia>
          </Article.MultimediaGroup>
        </Article.Section>

        <Article.Section>
          <h4>My Role</h4>
          <p>
            <b>My Role:</b> UX Designer & Prototyper
          </p>
          <p>
            I joined the Enterprise Contents Management team after the first 3
            months design bootcamp hosted by the recently founded IBM Design
            Studio. With a hybrid background in UX design and front end
            development, I took part in daily design activities like user
            research, concept development, iterative wireframing, usablity
            evaluation and I was also responsible for implementing interactive
            prototypes for research and demontration purpose, creating and
            maintaining a front-end toolkit based on our design guide to ensure
            the unified experience across the product.
          </p>
          <p>
            In the meanwhile, user experience design was still a very new
            concept in this 100-year-old technology company. So as a design
            pioneer deployed to an existing matured product team, I was not
            there only to help create one single good product, but also I share
            the responsibility to evangelize the{' '}
            <Article.Link
              href='https://www.ibm.com/design/thinking/'
              rel='noreferrer'
              target='_blank'
            >
              IBM Design Thinking
            </Article.Link>
            , contribute in developing strategy for rebuilding the design
            oriented offering portfolio and transform the business outcomes
            eventually.
          </p>
          <p>
            <b>Core Production Team:</b>{' '}
            {coreTeam.map((member, index) => {
              return (
                <span key={member.name}>
                  <Article.Link
                    href={member.link}
                    rel='noreferrer'
                    target='_blank'
                  >
                    {member.name}
                  </Article.Link>{' '}
                  <i>({member.title})</i>
                  {index !== coreTeam.length - 1 ? ', ' : '.'}
                </span>
              );
            })}
          </p>
        </Article.Section>

        <Article.Section>
          <h4>Context</h4>
          <p>
            The StoredIQ for Legal project was first born in an experimental
            pilot program during the designcamp in which IBM Design Studio
            connects the new hired designers with product teams to practice and
            advocate IBM Design Thinking in the field while proving the postive
            business impact design can make to the organization. So the project
            I was assigned to during the designcamp was called "ILG-Next" -
            which later turned out to be the code name of the beta release of
            StoredIQ for Legal.
          </p>
          <p>
            In that pilot project, two other designers and I were asked to
            rethink IBM's existing portfolio in the e-discovery market and see
            how we could consolidate existing isolated clunky products to
            deliver a single, unified e-discovery experience. After six weeks'
            questioning, learning, collabrating and thinking, the small design
            team consists of three new graduates presented a playback to
            demonstrate the problems we found and some early exploration on the
            solutions. And that playback won the inital trust and confidence
            from business unit executives as well as the rest of product team,
            which also turns this six weeks pilot project into an innovative
            offering that IBM wants to invest, earn and success.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>To Understand</h4>
          <p>
            Lack of domain knowledge in the world of e-discovery and legal
            lawsuits in general was the first challenge we encountered. In the
            first couple weeks, all the commmon terminologies or roles in the
            field introduced a very steep learning curve for us to wrap our
            minds around what we are doing for this project. But understanding
            our users and their story is still the first thing we need to do
            before really doing any design. Benefit from the{' '}
            <Article.Link
              href='https://www.ibm.com/design/thinking/page/framework/keys/sponsor-users'
              rel='noreferrer'
              target='_blank'
            >
              Sponsor User Program
            </Article.Link>{' '}
            IBM Design started to help establish the connection between the
            design team and real target users, we were able to find and work
            closely with several teams of sponsor users from different
            industries all around the world. It was that good relationship with
            our end users that helped us set the first step in the domain and go
            beyond.
          </p>
          <Article.MultimediaGroup column={1}>
            <Article.Multimedia>
              <img
                src={image_sponsor_user_program}
                alt='Sponsor User Program Introduction'
              />
            </Article.Multimedia>
          </Article.MultimediaGroup>

          <h5>Who are we designing for?</h5>
          <p>
            So the first question, who are the major personas in the story? To
            answer this question, the design team visited some of our sponsor
            users who can each represents a specific industry. We met them in
            person at their working sites, shadowed and observed their day to
            day business and interviewed all the different roles they interact
            with. Synthesized all the facts we learned from the users with the
            domain knowledghe we gain from the subject matter experts in the
            team, we developed a general user ecosystem model to present the
            e-discovery teams which usually have many players occupying
            different roles at different times.
          </p>

          <Article.MultimediaGroup column={2}>
            <Article.Multimedia>
              <img src={image_user_ecosystem} alt='User Ecosystem' />
            </Article.Multimedia>
            <Article.Multimedia>
              <img src={image_persona_paige} alt='Persona Paige' />
            </Article.Multimedia>
            <Article.Multimedia>
              <img src={image_persona_dave} alt='Persona Dave' />
            </Article.Multimedia>
            <Article.Multimedia>
              <img src={image_persona_stewart} alt='Persona Stewart' />
            </Article.Multimedia>
          </Article.MultimediaGroup>

          <h5>What problems they are facing?</h5>
          <p>
            With a better understanding about the goals and tasks our key
            personas have, we then put together an As-Is journary map to
            demonstrate how they currently collaborate with each other in
            different phases of the entire e-disocvery workflow, how they think
            and feel during those activities and in the meantime to identify
            what are the pain ponts.
          </p>

          <Article.Slider type='center'>
            <img src={image_as_is_1} alt='As Is Scenario 1' />
            <img src={image_as_is_2} alt='As Is Scenario 2' />
            <img src={image_as_is_3} alt='As Is Scenario 3' />
            <img src={image_as_is_4} alt='As Is Scenario 4' />
            <img src={image_as_is_5} alt='As Is Scenario 5' />
          </Article.Slider>

          <h5>Where do we stand?</h5>
          <p>
            In addition to the user researches I mentioned above, we also spent
            some time learning and evaluating the exisiting IBM products we had
            in the market. As you may quickly feel dizzy looking at the
            screenshots, these "legacy" products are not delightful to use for 8
            hours a day and 5 days a week. Although they do techinically solve a
            lot problems behind the scene, these products are more led by
            technology and only doing what we can do instead of being driven by
            our users and doing what they need. Unitl now, we finally achieved
            the alignment with executives and product manager about the business
            goal for this project: to consolidate existing offerings with a
            human-centered redesign.
          </p>

          <Article.MultimediaGroup column={2}>
            <Article.Multimedia>
              <img src={image_before_product_1} alt='IBM Atlas Product' />
            </Article.Multimedia>
            <Article.Multimedia>
              <img src={image_before_product_2} alt='IBM DiscoveryIQ Product' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
        </Article.Section>

        <Article.Section>
          <h4>Explore & Prototype</h4>
          <h5>Fail Fast</h5>
          <p>
            "Fail fast." This is a sentence I heard a lot during the designcamp
            when the educators talking about applying design thinking in a giant
            company like IBM. It is not only about the philosophy to do
            busniess, to be more responsive to the market, or to be more agile
            in development, it also makes perfect sense when designing products,
            especially designing enterprise level ones. The cost of fixing a
            problem after the product release can easily be a million dollar
            difference, compared with fixing it during the very early design
            period. Thus, paper prototype was the cheap way we constantly took
            to do our exploration, test concepts and verify assumptions with
            users.
          </p>

          <Article.MultimediaGroup column={2}>
            <Article.Multimedia>
              <img src={image_paper_prototype_1} alt='Paper Prototype' />
            </Article.Multimedia>
            <Article.Multimedia>
              <img src={image_paper_prototype_2} alt='User Test' />
            </Article.Multimedia>
          </Article.MultimediaGroup>

          <h5>Be More Agile</h5>
          <p>
            After validating our ideas on paper with users, we usually started
            building our Mid-fi wireframes either using Sketch and InVision
            combination or quickly mocking them up using HTML/CSS/JS if they had
            more complicated interactions or animations that couldn't be
            realized in a prototype tool. There were two purposes of creating
            these Mid-fi wireframes: 1. they were used in our second round
            testing with a focus more about interaction and usability; 2. they
            were used as the medium to facilitate internal discussion with
            Devs/PMs to exchange feedback, estimate rough story size or even get
            the Dev team started on technical foundation work if the design had
            been groomed.
          </p>

          <Article.MultimediaGroup column={1}>
            <Article.Multimedia withBorder>
              <img
                src={image_midfi_prototype}
                alt='Medium Fidelity Prototype'
              />
            </Article.Multimedia>
          </Article.MultimediaGroup>

          <h5>Push The Pixels</h5>
          <p>
            The last but not least stage was of course to deliver the final
            Hi-fi mockups to the Dev team and push them to bring the design into
            life pixel perfectly. There was no doubt a lot fightings in the
            beginning with a traditional IBM Dev team for which it was the very
            first time to work with real designers in production. But with the
            continuous education about IBM Design Thinking, along with all the
            positive voices we heard from our users and stakeholders, the Dev
            team soon realized the value these new designers brought to the
            team. As we gradually won their trust, confidence and respect, the
            collaboration between devs and designers becomes more and more tacit
            and enjoyable.
          </p>

          <Article.MultimediaGroup column={1}>
            <Article.Multimedia withBorder>
              <img src={image_product_4} alt='High Fidelity Prototype' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
        </Article.Section>

        <Article.Section>
          <h4>Outcome & Impact</h4>
          <p>
            In the 2 years I worked with this super talented and dedicated team,
            we had successfully delivered 3 solid major releases to the market
            with the great help we received from our sponsor users. For each of
            the releases, we created three hills to define our goals, manage
            scope, align the team and help everyone stay focused. And in the end
            those hills were also used as guideline when measuring the business
            and user outcomes we created. Below is a very breif list summarizing
            the outcomes of each milestone we made towards the goal of creating
            a coherent platform that streamlines various enterprise e-discovery
            processes, a new solution that is capable to deal with new
            challenges in the age of big data and a delightful tool that can
            help legal and IT team members success while making their lives
            easier.
          </p>
          <h5>Release 1: “Newcastle” - June, 2015</h5>
          <ul>
            <li>
              One of first offerings to market from IBM Design’s Hallmark
              program, which pushes for innovative, design-first strategy to
              consolidate existing product portfolios.
            </li>
            <li>Extended team began to practice Design Thinking.</li>
            <li>
              Delivered a full matter management experience. IBM now has a
              competitive solution on the market in the eDiscovery space.
            </li>
            <li>Customers begin to purchase licenses to the product.</li>
          </ul>
          <h5>Release 2: “Nextcastle” - Dec, 2015</h5>
          <ul>
            <li>
              Delivered robust data collection and workflow management
              experience to compliment matter management portion.
            </li>
            <li>More customers purchasing product.</li>
            <li>
              Delivered base experience to satisfy $5 mil SOW for large
              financial company.
            </li>
          </ul>
          <h5>Release 3: “Whitecastle” - July 2016</h5>
          <ul>
            <li>
              Transformation of three disparate products into one single
              user-driven experience.
            </li>
            <li>
              Enhancement on the transparency of workflows, structured
              communication and tasks management.
            </li>
            <li>
              Design evangelism to global team – continuous adopt and practice a
              user-centric approach using design thinking in delivery.
            </li>
          </ul>
          <br />
          <Article.Slider type='imac'>
            <img src={image_product_1} alt='StoredIQ for Legal Product' />
            <img src={image_product_3} alt='StoredIQ for Legal Product' />
            <img src={image_product_4} alt='StoredIQ for Legal Product' />
            <img src={image_product_6} alt='StoredIQ for Legal Product' />
            <img src={image_product_7} alt='StoredIQ for Legal Product' />
            <img src={image_product_11} alt='StoredIQ for Legal Product' />
            <img src={image_product_9} alt='StoredIQ for Legal Product' />
            <img src={image_product_10} alt='StoredIQ for Legal Product' />
            <img src={image_product_13} alt='StoredIQ for Legal Product' />
            <img src={image_product_14} alt='StoredIQ for Legal Product' />
          </Article.Slider>
          <br />
          <p>
            Designing for enterprise level product/service is not easy, and it
            becomes even more complicated when it gets involved with legal
            process. We feel very hard to build the empathy with our target
            users in the beginning cause they all live in a very specific domain
            that not a lot people are aware and understand. As a young designer,
            I feel lucky to be working on such a challenging but realistic
            problem as my career start point. It has been such an inspiring
            journey and hopefully also helped me become a more empathetic and
            reliable designer.{' '}
          </p>
          <p>
            When I saw those shining eyes of our users looking at the product
            they can't wait to get hands on, I knew I was using design to solve
            real life problems and make people's life better. And that feels
            great. Among all the nice words we heard from our users, here is my
            personal favorite which always makes us very happy and proud about
            what we've conquered in the past two years:
          </p>
          <Article.Quote author='Anonymous sponsor user'>
            This is amazing. It's like a rainbow-farting unicorn compared to
            [old product].
          </Article.Quote>
          <br />
          <br />
          <p className='centered'>
            <Button
              href='http://www.ibm.com/us-en/marketplace/ibm-storediq-for-legal'
              icon={icons.compass}
              rel='noreferrer'
              size='large'
              target='_blank'
              type='link'
            >
              Learn more
            </Button>
          </p>
        </Article.Section>
      </Project.Body>
    </Project>
  );
}

export default StoredIq;
