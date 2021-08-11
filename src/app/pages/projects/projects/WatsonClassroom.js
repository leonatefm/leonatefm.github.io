import * as React from 'react';
import Article from 'components/Article';
import Button from 'components/Button';
import icons from 'lib/icons';
import image_element_teacher from 'images/projects/iwc/element_teacher.jpg';
import image_enlight_teacher from 'images/projects/iwc/enlight_teacher.jpg';
import image_design_process_1 from 'images/projects/iwc/design/process_1.jpg';
import image_design_process_2 from 'images/projects/iwc/design/process_2.jpg';
import image_design_process_3 from 'images/projects/iwc/design/process_3.jpg';
import image_design_process_4 from 'images/projects/iwc/design/process_4.jpg';
import image_design_process_5 from 'images/projects/iwc/design/process_5.jpg';
import image_design_process_6 from 'images/projects/iwc/design/process_6.jpg';
import image_design_process_7 from 'images/projects/iwc/design/process_7.jpg';
import image_design_process_8 from 'images/projects/iwc/design/process_8.jpg';
import image_git_1 from 'images/projects/iwc/git_1.jpg';
import image_git_2 from 'images/projects/iwc/git_2.jpg';
import image_git_3 from 'images/projects/iwc/git_3.jpg';
import image_git_4 from 'images/projects/iwc/git_4.jpg';
import image_iwc_product_1 from 'images/projects/iwc/product/iwc_product_1.jpg';
import image_iwc_product_2 from 'images/projects/iwc/product/iwc_product_2.jpg';
import image_iwc_product_3 from 'images/projects/iwc/product/iwc_product_3.jpg';
import image_iwc_product_4 from 'images/projects/iwc/product/iwc_product_4.jpg';
import image_iwc_product_5 from 'images/projects/iwc/product/iwc_product_5.jpg';
import image_iwc_product_6 from 'images/projects/iwc/product/iwc_product_6.jpg';
import image_iwc_product_7 from 'images/projects/iwc/product/iwc_product_7.jpg';
import image_iwc_product_8 from 'images/projects/iwc/product/iwc_product_8.jpg';
import image_iwc_product_9 from 'images/projects/iwc/product/iwc_product_9.jpg';
import image_iwc_product_10 from 'images/projects/iwc/product/iwc_product_10.jpg';
import image_persona_jamie from 'images/projects/iwc/persona_jamie.jpg';
import image_styleguide_1 from 'images/projects/iwc/styleguide_1.jpg';
import image_styleguide_2 from 'images/projects/iwc/styleguide_2.jpg';
import Project from 'components/Project';
import youtubeUtils from 'lib/youtubeUtils';

const classnames = {
  BASE: 'WatsonClassroom',
  RELEASE_LIST: 'WatsonClassroom-releaseList',
};

const videoSources = {
  youtube: 'https://www.youtube.com/embed/nJr9j0yXEik?rel=0&enablejsapi=1',
  cuplayer:
    'https://go.plvideo.cn/front/video/preview?vid=adb1a48b183b917ad5c9daa24e95a0a2_a',
};

function WatsonClassroom() {
  const coreTeam = [
    {
      name: 'Jeffrey Douglas',
      title: 'Offering Development Director',
      link: 'https://www.linkedin.com/in/jdouglas25',
    },
    {
      name: 'Daniel Swango',
      title: 'Global Development Leader',
      link: 'https://www.linkedin.com/in/danswango',
    },
    {
      name: 'Lori Zwilling',
      title: 'Release Manager',
      link: 'https://www.linkedin.com/in/lorizwilling',
    },
    {
      name: 'Mikaela Moore',
      title: 'Offering Manager',
      link: 'https://www.linkedin.com/in/mikaelarmoore',
    },
    {
      name: 'Katie Parsons',
      title: 'Design Manager',
      link: 'https://www.linkedin.com/in/katiemparsons',
    },
    {
      name: 'Claire Kohler',
      title: 'Design Lead',
      link: 'https://clairekohler.format.com',
    },
    {
      name: 'Jennifer Wright',
      title: 'UX Designer',
      link: 'https://www.designiswright.com',
    },
    {
      name: 'Chase Kettl',
      title: 'Visual Designer',
      link: 'https://www.behance.net/chaseSkettl',
    },
    {
      name: 'Caitlin MacRae',
      title: 'Design Researcher',
      link: 'https://www.linkedin.com/in/caitlinmacrae',
    },
    {
      name: 'David Tu',
      title: 'Application System Architect',
      link: 'https://www.linkedin.com/in/david-tu-15b35bb3',
    },
    {
      name: 'Shali Sasidharan',
      title: 'Front End Developer',
      link: 'https://www.linkedin.com/in/shalisasidharan',
    },
    {
      name: 'James Line',
      title: 'Front End Developer',
      link: 'https://www.linkedin.com/in/james-line-2a15b79b',
    },
    {
      name: 'Robert Pangborn',
      title: 'Data Architect',
      link: 'https://www.linkedin.com/in/robert-pangborn-870393',
    },
    {
      name: 'Prashanth Kayampady',
      title: 'Back End Developer Lead',
      link: 'https://www.linkedin.com/in/prashanth-kayampady-b3248843',
    },
  ];

  return (
    <Project className={classnames.BASE} id='WatsonClassroom'>
      <Project.Header
        companyName='IBM Watson Education'
        jobTitle='Front End Developer Lead'
        projectName='Watson Classroom'
      />
      <Project.Body>
        <Article.Section>
          <h2>IBM Watson Classroom</h2>
          <p>IBM, 2016 - 2019</p>
        </Article.Section>

        <Article.Section>
          <h4>Introduction</h4>
          <p>
            IBM Watson Classroom is a K-12 offering that helps teachers deliver
            truly personalized learning to improve student outcomes, powered by
            the industry-leading cognitive computing technology IBM Watson
            provides. With IBM Watson Classroom, teachers can gain insights to
            understand the needs, strengths, weaknesses, interests, learning
            styles and aptitude of every student and craft personalized learning
            activities based on that 360-degree student view. It is a
            revolutionary education solution with an intuitive, teacher-focused
            interface that we designed with teachers and for teachers.
          </p>
          <Article.MultimediaGroup column={1}>
            <Article.Multimedia
              caption='IBM Watson Education : Personalizing the teaching and learning experience'
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
                title='Introduction video for IBM Watson Classroom'
              ></iframe>
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <p>
            Watson Classroom is comprised of an iOS App Element and a web App
            Enlight. Element is exclusively designed for iPad, which provides
            teachers a single 360-degree view of students by consolidating
            various academic, social and behavioral data sources. These insights
            generate suggestions on how best to help each student so they
            receive targeted support in the classroom more quickly. Meanwhile
            Enlight offers a unique browser-based experience for teachers to
            access not only deeper and more comprehensive insights of their
            classes and students, but also curated, personalized learning
            content and activities to align with each student’s needs.
          </p>
          <Article.MultimediaGroup column={2}>
            <Article.Multimedia
              caption={
                <span>
                  Element{' '}
                  <i>
                    - Image by{' '}
                    <Article.Link
                      href='https://www.ibm.com/watson/education'
                      rel='noreferrer'
                      target='_blank'
                    >
                      IBM Watson Education
                    </Article.Link>
                  </i>
                </span>
              }
            >
              <img
                src={image_element_teacher}
                alt='Teacher using Element App'
              />
            </Article.Multimedia>
            <Article.Multimedia
              caption={
                <span>
                  Enlight{' '}
                  <i>
                    - Image by{' '}
                    <Article.Link
                      href='https://www.ibm.com/watson/education'
                      rel='noreferrer'
                      target='_blank'
                    >
                      IBM Watson Education
                    </Article.Link>
                  </i>
                </span>
              }
            >
              <img
                src={image_enlight_teacher}
                alt='Teacher using Enlight App'
              />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <p>
            Element, as a mobile solution, focuses on teachers' engagement
            experience with students while walking around in the classroom.
            Enlight, as a desktop solution, focuses on the tracking and planning
            experience when teachers sitting down in the office. Leveraging the
            respective advantages for each type of the devices, Element and
            Enlight solve different problems in different context and user
            scenarios. Behind the scene, Element and Enlight grow in a common
            platform running with the same data and services, and together they
            constitute the complete Watson Classroom solution that brings
            education into the cognitive era.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>My Role</h4>
          <p>
            <b>My Role:</b> Front End Developer Lead
          </p>
          <p>
            After a two-years journey as a UX designer in my previous team, I
            decided to move on as a Front End Developer in the{' '}
            <Article.Link
              href='https://www.ibm.com/watson/education'
              rel='noreferrer'
              target='_blank'
            >
              Watson Education
            </Article.Link>{' '}
            team to explore more on the other side of my career interest. Since
            then I have been focusing more on bringing design to life with code
            and promoting the adoption of cutting edge technologies and
            processes in the production and dev workflow. Later on, I have also
            expanded my responsibility to help with the product roadmap, release
            and sprint planning, agile practice improvement, new dev onboarding
            and mentoring, from which I gained more leadership experience and
            skills. Started from April 2018, I officially step up as the Front
            End Developer Lead to continually work with leadership team,
            offering managers, designers and the rest of the engineer team to
            deliver products that aligned with organization value proposition,
            business strategy, customer priorities and user-centered design
            intent.
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
          <h4>Research & Design</h4>
          <p>
            As what I described about my role above, this time I'm wearing more
            an engineer hat rather than a designer hat in this project. But
            before we dive into the technology world, let's first take a quick
            glance at some of the research and design work the team put together
            so that we can understand the story better. Since the first day it
            was born, Watson Education have been a team that persistently learn,
            practice and adopt the IBM Design Thinking framework to solve our
            users’ problems at speed and scale. So first question to ask, who
            are our users and what problems they are facing?
          </p>
          <h5>Meet Jamie</h5>
          <p>
            Jamie is a 7th grade math teacher at a medium-sized public school in
            San Francisco. Jamie is married and has a 4-year old son. She loves
            her students, but struggles to balance her dedication to teaching
            with finding time for her family. She has a wide range of students
            each year and works to ensure all their needs are met. She wishes
            she knew more about her students going into the new year and had a
            better way to keep track of their progress throughout the year. She
            thrives on helping her students succeed. While we also have created
            personas for elementary teacher as well as principal/superintendent,
            so far we've been focusing on helping Jamie as the primary persona
            that represents the main user group from our client schools and
            districts.
          </p>
          <Article.MultimediaGroup column={1}>
            <Article.Multimedia withBorder>
              <img src={image_persona_jamie} alt='Teacher Persona - Jamie' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <h5>Jamie's Challenges</h5>
          <p>
            In high-level summary, Jamie, just like other teachers in the K-12
            education industry, is under enormous pressure to assess her
            students, ensure their mastery and meet state standards. However,
            there’s very little time for her to develop plans that keep students
            engaged, and personalize learning experiences based on a deeper
            knowledge of students’ interests, strengths and weaknesses. The
            causes of these challenges are a complex mix, including but not
            limited to the disparate sources of student information, lack timely
            awareness of student performance and difficulty to find related,
            targeted and trusted learning contents.
          </p>
          <h5>Restless Reinvention</h5>
          <p>
            Watson Classroom is a product we designed for teachers, and more
            importantly we designed it with teachers. With the help from all the
            teachers participated in the sponsor user program, we not only gain
            insights about themselves: their goals, daily tasks, challenges,
            frustrations and desires, but also collect their feedback about our
            ideas, explorations, prototypes and product releases in a regular
            basis. The design team has been taking the problems and solutions as
            an ongoing conversation with our users, and restlessly iterate the
            design in a continuous cycle of observing, reflecting, and making.
            Given the non-disclosure agreement, I can't elaborate the details
            here about how our design solves Jamie's pain points and the
            rationale behind it, but the essential is that we closely
            collaborate with teachers and strive for a revolutionary education
            experience to make teachers' lives easier and help them success.
          </p>
          <Article.Slider type='multiple'>
            <img
              src={image_design_process_1}
              alt='Design Exercise - Stakeholder Mapping'
            />
            <img
              src={image_design_process_2}
              alt='Design Exercise - Questions & Assumptions'
            />
            <img
              src={image_design_process_3}
              alt='Design Exercise - Personas'
            />
            <img
              src={image_design_process_4}
              alt='Design Exercise - As-Is Scenarios'
            />
            <img
              src={image_design_process_5}
              alt='Design Exercise - Big Ideas'
            />
            <img src={image_design_process_6} alt='Design Exercise - Hills' />
            <img
              src={image_design_process_7}
              alt='Design Exercise - Storyboarding'
            />
            <img
              src={image_design_process_8}
              alt='Design Exercise - Teacher Shadowing'
            />
          </Article.Slider>
        </Article.Section>

        <Article.Section>
          <h4>Bring It To Life</h4>
          <p>
            Much as I'd like to deep dive into the tech stack behind the glass
            of Watson Classroom and how we leverage Watson's cognitive
            capabilities to solve teachers' problems, I can't disclosure much
            details in this article. Even though, I think it still makes sense
            for me to go through some of the contribution I made in the
            production workflow improvement and team development in general.
            Watson Education was like a unfledged startup organization within
            the Big Blue IBM, and the front end team was also very young and
            still inexperienced at the intersection of artificial intelligence,
            cloud computing and human-centered design. Since the first day I
            joined, I've been observing and learning the challenges and
            inhibitors of the team and dedicating myself to the adoption of
            modern technology and methods to optimize product performance and
            scalability, improve code quality and dev workflow, foster a culture
            of embracing agile development and continuous delivery.
          </p>
          <h5>Design Guideline & UI Toolkit</h5>
          <p>
            Benefiting from being geographical co-located with the design team
            in the Austin studio, I was able to work closely with my designers
            on defining the design guideline and lead the work to "translate"
            the design language into a UI toolkit that the front end team can
            leverage in daily development tasks. This UI toolkit is a
            modularized components library implemented in AngularJS and SCSS. As
            the design style guide grows and evolves in a living Sketch file,
            the front end team also actively maintain this components library to
            be aligned with the design doc in parallel with other release work.
            All the time and effort we invested is totally worthwhile with the
            return in lots of ways: significant reduction in design specs work
            and communication cost, confidence of accessibility and consistency
            of the experience we delivered across the product, ease of
            implementation and maintenance with high quality reusable code.
          </p>
          <Article.MultimediaGroup column={2}>
            <Article.Multimedia withBorder>
              <img src={image_styleguide_1} alt='Design Guideline Essentials' />
            </Article.Multimedia>
            <Article.Multimedia withBorder>
              <img src={image_styleguide_2} alt='Design Guideline Components' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <h5>Git Workflow & Branching Model</h5>
          <p>
            Back to the time I got onboard, the dev team just completed the big
            migration from IBM RTC to Github Enterprise. While most of the
            engineers felt comfortable using basic git features to commit and
            push codes, there was neither standardized git workflow nor clear
            branching model for a long time to guide the team organize their
            codebase and manage releases. In the meantime, the leadership team
            was visioning a transition to a continuous delivery release
            strategy, but I knew it's hardly feasible without improving the
            development process. With that in my mind, I spent around three
            months doing research, putting together a proposal for Git workflow
            and branching model, getting buy-ins from the leadership and
            management team, and finally educating the broader dev team to get
            everyone onboard.
          </p>
          <Article.MultimediaGroup column={2}>
            <Article.Multimedia withBorder>
              <img src={image_git_1} alt='Git Workflow Goals' />
            </Article.Multimedia>
            <Article.Multimedia withBorder>
              <img src={image_git_2} alt='Git Workflow As-Is Scenario' />
            </Article.Multimedia>
            <Article.Multimedia withBorder>
              <img src={image_git_3} alt='Feature Branch Model' />
            </Article.Multimedia>
            <Article.Multimedia withBorder>
              <img src={image_git_4} alt='Release Branch Model' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <p>
            The outcome of this activity is highly recognized and well
            appreciated by the entire production team. Here are some nice words
            from one of the dev leads:
          </p>
          <Article.Quote author='David Tu, Application System Architect, IBM Watson Education'>
            Chengqi was instrumental in reinventing our development process
            toward feature branching, enabling a much cleaner and always
            releasable mainline codebase, which results in greater team agility.
            On a broader level, this was a key step toward continuous delivery,
            which will definitely drive business results. On a more detailed
            level, Chengqi not only came up with the proposal, he provided
            detailed Git instructions for the development team on how to
            implement feature branching to get buy-ins from developers, and also
            a nicely designed presentation deck to get buy-ins from development
            leaders. Overall, it was a tremendous contribution to the team.
          </Article.Quote>
          <br />
          <h5>Task Automation With Gulp</h5>
          <p>
            Modern web app development has front loaded a lot of
            responsibilities from the server end to the client end. Watson
            Classroom Enlight is no exception, in addition to creating and
            rendering the interfaces, our front end application needs to take
            care of many more things like Ajax data loading, data manipulating,
            page routing and so on so forth. While the app continuously grows,
            we find out the team doing tons of repetitive tasks to work with and
            maintain the more and more bulky codebase. Thus, I introduced Gulp
            to the team to automate those painful and time-consuming tasks and
            streamline front end development workflow. Here is a rough list of
            the tasks I built up with Gulp and its ecosystem:
          </p>
          <ul>
            <li>Sass to CSS compilation</li>
            <li>Automated CSS vendor prefixes processing</li>
            <li>Embedding HTML templates into AngularJS</li>
            <li>Bundling and minifying libraries and stylesheets</li>
            <li>Automated SVG icon cleanup and sprite generation</li>
            <li>Automated browser refresh and sync</li>
            <li>Automated unit tests</li>
            <li>One step app build process for deployment</li>
          </ul>
          <h5>Squads & Scrums</h5>
          <p>
            Applying agile development practices is especially challenging in a
            team that is distributed across multiple time zones and regions of
            the world. Our global leadership and management team has never
            stopped learning, exploring, pushing and reflecting to seek for the
            most proper and practical agile methods and practices that work for
            this team. As part of that, I work effectively with them to propose,
            implement and standardize the squads and scrums approach with the
            goal of facilitating collaboration and achieving alignments across
            function units and production teams. During each release and sprint,
            I actively participate in leading squads to do daily virtual
            stand-ups through Slack, weekly scrums through online meetings and
            sprint showcase and retrospection with the broad production team.
            Through all the ups and downs, we together foster a team culture
            with a passion to be more agile, more productive, and more
            responsive to the market, customers and partners.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>Outcome & Impact</h4>
          <p>
            Education is an exciting and relatable industry that needs a
            considerable amount of help and our incredible users are what
            excites us and keeps us moving forward every day. As we learn more
            about teachers and administrators, it's clear to see just how much
            of an impact we could make in their lives as well as the students
            they influence by giving them a software that meets their needs. By
            the time I'm writing this article, Watson Education team has
            delivered four major releases and countless granular updates,
            refinements and fix-packs of Watson Classroom to a growing number of
            districts and schools.
          </p>
          <ul className={classnames.RELEASE_LIST}>
            <li>
              <b>Aristotle</b>: foundation release from the ground up.
            </li>
            <li>
              <b>Benjamin</b>: extension, refinement and scalability.
            </li>
            <li>
              <b>Copernicus</b>: visual refresh and rebrand.
            </li>
            <li>
              <b>Darwin</b>: student mastery model enhancement.
            </li>
            <li>
              <b>Einstein</b>: upcoming release for performance and
              customization.
            </li>
            <li>... more to come.</li>
          </ul>
          <p>
            We name each of our release after a great educator in the history as
            a reminder to stay focused with our target users and be inspired by
            their spirit of devotion. Each milestone we achieved together is a
            step toward the better tomorrow for every educator and learner. We
            have always pursued world-changing progress. We believe that the
            application of cognitive capabilities in education can truly
            transform the learning experience by delivering personalized
            education throughout the entire lifelong learning journey.
          </p>
          <Article.Slider type='macbook'>
            <img
              src={image_iwc_product_1}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_2}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_3}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_4}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_5}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_6}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_7}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_8}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_9}
              alt='IBM Watson Classroom Enlight App'
            />
            <img
              src={image_iwc_product_10}
              alt='IBM Watson Classroom Enlight App'
            />
          </Article.Slider>
          <br />
          <Article.Quote author='Samira Khan, Richard J. Lee Elementary, Coppell ISD'>
            As an educator, I love the fact that IBM Watson Classroom paints a
            picture of the whole child. The learner is more than a number or a
            grade. I can add information about the child’s interests and
            learning style, or add other notes that will not only help me, but
            their future educators.
          </Article.Quote>
          <br />
          <br />
          <p className='centered'>
            <Button
              href='https://www.ibm.com/watson/education'
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

export default WatsonClassroom;
