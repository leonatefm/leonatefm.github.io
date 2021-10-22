import * as React from 'react';
import Article from 'components/Article';
import breakpoints from 'lib/breakpoints';
import icons from 'lib/icons';
import image_creation_process from 'images/projects/fds/creation_process.png';
import image_docs_1 from 'images/projects/fds/docs/1.jpg';
import image_docs_2 from 'images/projects/fds/docs/2.jpg';
import image_docs_3 from 'images/projects/fds/docs/3.jpg';
import image_docs_4 from 'images/projects/fds/docs/4.jpg';
import image_docs_5 from 'images/projects/fds/docs/5.jpg';
import image_docs_6 from 'images/projects/fds/docs/6.jpg';
import image_docs_7 from 'images/projects/fds/docs/7.jpg';
import image_docs_8 from 'images/projects/fds/docs/8.jpg';
import image_figma_1 from 'images/projects/fds/figma/1.png';
import image_figma_2 from 'images/projects/fds/figma/2.png';
import image_figma_3 from 'images/projects/fds/figma/3.png';
import image_figma_4 from 'images/projects/fds/figma/4.png';
import image_figma_5 from 'images/projects/fds/figma/5.png';
import image_figma_6 from 'images/projects/fds/figma/6.png';
import image_systems_legend from 'images/projects/fds/systems/legend.jpg';
import image_systems_a from 'images/projects/fds/systems/a.jpg';
import image_systems_b from 'images/projects/fds/systems/b.jpg';
import image_vdl_1 from 'images/projects/fds/vdl/1.jpg';
import image_vdl_2 from 'images/projects/fds/vdl/2.jpg';
import image_vdl_3 from 'images/projects/fds/vdl/3.jpg';
import image_vdl_4 from 'images/projects/fds/vdl/4.jpg';
import image_vdl_5 from 'images/projects/fds/vdl/5.jpg';
import image_vdl_6 from 'images/projects/fds/vdl/6.jpg';
import image_introduction from 'images/projects/fds/introduction.jpg';
import Project from 'components/Project';
import { useMediaQuery } from 'react-responsive';

const classnames = {
  BASE: 'FeatherDesignSystem',
  PROCESS_DIAGRAM: 'FeatherDesignSystem-processDiagram',
};

function FeatherDesignSystem() {
  const isMediumUp = useMediaQuery({
    minWidth: breakpoints.MEDIUM,
  });
  const coreTeam = [
    {
      name: 'Theresa Merthon',
      title: 'Senior Director, Design Systems',
      link: 'https://www.linkedin.com/in/theresa-mershon-11264b4',
    },
    {
      name: 'Keith Miller',
      title: 'Design Manager',
      link: 'https://www.linkedin.com/in/kdrift78',
    },
    {
      name: 'Ashley Seto',
      title: 'Product Designer',
      link: 'https://www.linkedin.com/in/ashleyseto',
    },
    {
      name: 'Joey Banks',
      title: 'Product Designer',
      link: 'https://www.linkedin.com/in/joeyabanks',
    },
    {
      name: 'Hugo Broche',
      title: 'Product Designer',
      link: 'https://www.linkedin.com/in/hugobroche',
    },
    {
      name: 'Ashlie Ford',
      title: 'Product Designer',
      link: 'https://www.linkedin.com/in/ashlieford',
    },
    {
      name: 'Artem Artemov',
      title: 'Product Designer',
      link: 'https://www.linkedin.com/in/artemartemov',
    },
    {
      name: 'Kyungmin Yang',
      title: 'Design Engineer',
      link: 'https://www.linkedin.com/in/yangbomb2',
    },
    {
      name: 'Edward Wang',
      title: 'Design Engineer',
      link: 'https://www.linkedin.com/in/eddaword',
    },
    {
      name: 'Ivy Blaine',
      title: 'Content Strategist',
      link: 'https://www.linkedin.com/in/ivyblaine',
    },
    {
      name: 'Ron DeVera',
      title: 'Front End Engineer',
      link: 'https://rondevera.com',
    },
    {
      name: 'Jesse Smith',
      title: 'Front End Engineer',
      link: 'https://twitter.com/jessesmith',
    },
    {
      name: 'Zhihao Jia',
      title: 'Front End Engineer',
      link: 'https://www.linkedin.com/in/zhihaojia',
    },
  ];

  return (
    <Project className={classnames.BASE} id='FeatherDesignSystem'>
      <Project.Header
        companyName='Twitter'
        jobTitle='Sr. Design Engineer'
        projectName='Feather Design System'
      />
      <Project.Body>
        <Article.Section>
          <h2>Feather Design System</h2>
          <p>Twitter, 2019 - 2021</p>
        </Article.Section>

        <Article.Section>
          <h4>Introduction</h4>
          <p>
            Twitter has a long history in exploring and creating design systems,
            even before this concept was widely introduced in the design
            industry. Like any company that is invested in design system, the
            motivation at Twitter is to ship consistent and thoughtful
            experiences at scale and at speed , as the company grows rapidly.
            Feather is one of them,{' '}
            <b>
              a Twitter design system for building products that mean business
            </b>
            . It comes with reusable design assets in Figma library, reusable
            code via web components, and cross-discipline docs including design
            guidelines, content strategy, live examples and more. And it is also
            the place where I started my wonderful journey at Twitter.
          </p>
          <Article.MultimediaGroup column={1}>
            <Article.Multimedia>
              <img
                src={image_introduction}
                alt='Feather - Twitter’s design system for building products that mean business.'
              />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <p>
            Feather started as a HackWeek passion project by a small group of
            designers and engineers, focusing on business products and internal
            tools. After 7 years’ evolution, it has became to the most
            sophisticated design system at Twitter, playing a significant role
            at all the Twitter services the world see and use everyday. By the
            time I left Twitter, I recorded these inspiring numbers:
          </p>
          <Article.CardGroup>
            <Article.Card
              icon={icons.shapes}
              label='Design Tokens'
              number={150}
              numberSuffix='+'
            />
            <Article.Card
              icon={icons.component}
              label='Component'
              number={130}
              numberSuffix='+'
            />
            <Article.Card
              icon={icons.people}
              label='Designer Users'
              number={100}
              numberSuffix='+'
            />
            <Article.Card
              icon={icons.rocket}
              label='Products'
              number={230}
              numberSuffix='+'
            />
          </Article.CardGroup>
        </Article.Section>

        <Article.Section>
          <h4>My Role</h4>
          <p>
            <b>My Role:</b> Sr. Design Engineer
          </p>
          <p>
            I joined Twitter at 2019 with a special title called Design
            Technologist, which was turned into Design Engineer later. Although
            the words in this title seemed to be more straightforward after the
            refinement, there were still many questions around what I did, like
            designing or engineering? Well, I actually did both, and that's
            exactly one of the reasons why I was so obsessed with this hybrid
            role. As a Design Engineer at Twitter, I primarily worked on Feather
            design system and its extended toolings & processes to streamline
            design workflow and cross-functional collaboration. My main
            responsibilities are summarized in these several areas:
          </p>
          <ul>
            <li>
              <b>Leadership:</b> design system strategy and roadmap, creation
              process, contribution model, etc.
            </li>
            <li>
              <b>Design system:</b> Figma library, design language and
              guidelines, React and CSS component library, documentation, etc.
            </li>
            <li>
              <b>Prototype & toolings:</b> rapid product prototyping, prototype
              templates & tools, Figma plugins, Slack bots, etc.
            </li>
            <li>
              <b>Training & education:</b> design system onboarding, design
              crits, office hour, brownbag sharing, etc.
            </li>
          </ul>
          <p>
            <b>Core Team:</b>{' '}
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
          <h4>Core Features</h4>
          <p>
            We believe a good design system should have three key features:{' '}
            <b>managed design assets</b>, <b>reusable code</b> and{' '}
            <b>clear documentation</b>. All these three areas are where the
            Feather team spend most of our time and effort working on. With
            these features Feather provides, cross functional product teams can
            collaborate efficiently to make high-quality Twitter products that
            feel like one family.
          </p>
          <h5>Managed Design Assets</h5>
          <p>
            Feather provides managed design assets through a shared Figma
            library, which contains core styles for all design tokens, like
            colors and typography, reusable Figma components built with variants
            and auto-layout which also match our code implementation, common
            design patterns and guidelines, page templates with different layout
            serving as boilerplate, and more. Feather’s Figma library helps
            designers create mockups and prototypes efficiently.
          </p>
          <Article.MultimediaGroup column={isMediumUp ? 3 : 2}>
            <Article.Multimedia caption='Library structure' withShadow>
              <img src={image_figma_1} alt='Library structure' />
            </Article.Multimedia>
            <Article.Multimedia caption='Get started' withShadow>
              <img src={image_figma_2} alt='Get started' />
            </Article.Multimedia>
            <Article.Multimedia caption='Design tokens' withShadow>
              <img src={image_figma_3} alt='Design tokens' />
            </Article.Multimedia>
            <Article.Multimedia caption='Component - General' withShadow>
              <img src={image_figma_4} alt='Component - General' />
            </Article.Multimedia>
            <Article.Multimedia caption='Component sticker sheet' withShadow>
              <img src={image_figma_5} alt='Component sticker sheet' />
            </Article.Multimedia>
            <Article.Multimedia caption='Component gallery' withShadow>
              <img src={image_figma_6} alt='Component gallery' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <p>
            Feather provides managed design assets through a shared Figma
            library, which contains core styles for all design tokens, like
            colors and typography, reusable Figma components built with variants
            and auto-layout which also match our code implementation, common
            design patterns and guidelines, page templates with different layout
            serving as boilerplate, and more. Feather’s Figma library helps
            designers create mockups and prototypes efficiently.
          </p>
          <ul>
            <li>
              Name conventions are important and should be defined early in the
              stage.
            </li>
            <li>
              Aligning Figma components with code can help bridge the
              communication gap between design and engineering.
            </li>
            <li>
              Breaking down the component library into meaningful categories
              help both delivering and receiving small and manageable library
              updates in an agile cadence.{' '}
            </li>
            <li>
              It's good to separate the private component source files from the
              public component gallery to support the different access and usage
              for customers and creators.
            </li>
            <li>
              Always encourage the broader team to participate in the creation
              process and evangelize that the ownership of a design system
              belongs to the entire team.
            </li>
          </ul>
          <Article.Quote author='Phillip Lee, Sr. Product Designer'>
            Shoutout to the Feather team for walking some of us through the new
            Feather Figma Library last week. Sooo thorough and organized - the
            level of detail in this is insane. I’ve worked at a handful of large
            tech companies and I’ll tell you what, having this resource is not
            normal. First class type stuff 🌟
          </Article.Quote>
          <br />

          <h5>Reusable Code</h5>
          <p>
            In Feather we created over <b>130 web components</b> for use in apps
            built with <b>React</b> or plain <b>HTML/CSS</b>, from essential
            building blocks like buttons to advanced React components like date
            pickers, typeaheads, and charts. They all have Twitter’s visual
            design language built in, and are designed with accessibility and
            internationalization in mind. By using these Feather components,
            engineers can avoid tons of repetitive work, focus on solving the
            real problems and ultimately bring products to market quickly. Take
            typography as an example, in the years we've been working on
            Feather, Twitter's design team has changed its core typography at
            least three times. And this affects every web app at Twitter.
            Normally this takes weeks to roll out across every team. Through
            Feather, we can update everyone's typography in a day.
          </p>

          <h5>Cross-discipline Docs</h5>
          <p>
            Docs are essential to how we help our customers and Feather provides
            cross-discipline documentation through an internal website at
            go/feather. In the Feather docs, we work closely with designers,
            content strategists and engineers to create and share:
          </p>
          <ol>
            <li>
              design guidelines and best practices about using components
              individually or together with each other in order to achieve a
              good, consistent user experience
            </li>
            <li>
              content strategy recommendations about how to craft content in a
              component or a product, to effectively communicate with our users
              in consistent tones and voice
            </li>
            <li>
              thorough API documentation along with interactive examples for
              quickly prototyping ideas right in the docs
            </li>
          </ol>
          <Article.Slider type='macbook'>
            <img src={image_docs_1} alt='Feather docs screenshot 1' />
            <img src={image_docs_2} alt='Feather docs screenshot 2' />
            <img src={image_docs_3} alt='Feather docs screenshot 3' />
            <img src={image_docs_4} alt='Feather docs screenshot 4' />
            <img src={image_docs_5} alt='Feather docs screenshot 5' />
            <img src={image_docs_6} alt='Feather docs screenshot 6' />
            <img src={image_docs_7} alt='Feather docs screenshot 7' />
            <img src={image_docs_8} alt='Feather docs screenshot 8' />
          </Article.Slider>
        </Article.Section>

        <Article.Section>
          <h4>Creation Process</h4>
          <p>
            During my time at Twitter, I also helped define and formalize the
            creation process for our design system. As Feather is widely used
            across Twitter, any little change we make in the system can
            introduce a lot of impact to our customers. Thus, it's very
            important to have a clear and transparent process to guide ourselves
            as well as for everyone else to see and understand how we plan and
            implement the roadmap.
          </p>
          <Article.MultimediaGroup className={classnames.PROCESS_DIAGRAM}>
            <Article.Multimedia>
              <img src={image_creation_process} alt='Creation process' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <h5>1. Collect and Evaluate Ideas</h5>
          <p>
            Our creation process starts with ideating. The team receive a lot of
            inquiries, requests and feedback from our customers everyday. And
            all this input contributes to ideas about what should we work on
            next. Before we line up any project in the Feather roadmap, we
            evaluate those ideas by asking several questions:
          </p>
          <ul>
            <li>
              Does this component solve a problem in a way that another
              component could not?
            </li>
            <li>Will this component unblock large products?</li>
            <li>Who will be the customers using this component?</li>
          </ul>
          <p>
            Feather already comes with a pretty robust component library, so
            we’ll first evaluate if we can solve the problem by adopting or
            extending existing components, before we create a new one. In
            general, a component or pattern is more useful when there is a need
            across multiple products, and we also tend to prioritize those ideas
            so we can help more people.
          </p>
          <h5>2. Design Exploration</h5>
          <p>
            Once we decide on a project, a lead designer will dive deep and
            explore the design solution. Usually this designer is a member from
            the core team, but it can be any designer who wants to contribute,
            paired with a design system shepherd from our team. And it is a very
            collaborative process. Together, we define the scope of the
            component by identifying use cases that this component will support
            and rule out those that should be solved in other ways. We explore
            all the details of a component early in the stage, like what
            variants needed, how and when they should be used. These questions
            guide us to create components in a more thoughtful way.
          </p>
          <h5>3. Build and Document</h5>
          <p>
            After we gain a clear understanding of what we want to add into
            Feather, we’ll start building and documenting. We build components
            in both our Figma library for designers and web components for
            engineers, so that we have a synchronized design system to make
            communication easier. We create design guidelines about using
            components individually or together with each other. We work closely
            with our content strategists to provide recommendations about how to
            craft content in a component or a product, to effectively
            communicate with our users in consistent tones and voice.
          </p>
          <h5>4. Experiment</h5>
          <p>
            Once we created the experimental component or changes along with the
            draft docs, we want to test them before we actually make it stable
            for everyone to use. We partner with designers and engineers to test
            these new features in real life so that we can learn more about the
            new design, the technical APIs, guidelines, or documentation,
            starting with a smaller group.
          </p>
          <h5>5. Get Feedback</h5>
          <p>
            The feedback we collect from those experiments will either be fed
            into the next round of polish or generate new ideas for future
            projects.
          </p>
          <h5>Iteration Makes Perfect</h5>
          <p>
            I went through this entire creation process in these linear steps,
            but really it is very agile and iterative in practice. Just like the
            experiment and feedback loop, a few rounds of iterations could
            totally happen within a single day, similarly for the rest of the
            process. The Feather team has been working in this agile and
            collaborative way together with our 110+ contributors, and we all
            believe that iteration makes perfect.
          </p>
        </Article.Section>

        <Article.Section>
          <h4>Beyond Feather</h4>
          <p>
            When I joined Twitter, Feather was an autonomous team under the
            revenue design team, and similarly for other design system teams
            like Horizon or Atmosphere. As much as we talk and work with each
            other, and even sharing design assets like colors and icons, we
            still feel like working in silos because we are organizationally
            distributed in different corners. Thus, to unify and accelerate
            product delivery across teams and disciplines, we formed a
            centralized Design Systems team in 2020 and started to imagine the
            future of design systems at Twitter as one team. Since then, I got
            more opportunities to work with other design system colleagues to
            overcome new challenges beyond Feather.
          </p>
          <h5>Unified Design Language</h5>
          <p>
            When Feather was started 7 years ago, it focused on business
            products and internal tools, where it helped solve some of the more
            complex design problems like presenting a large amount of data in
            tables and charts. Since then, more Twitter design systems have
            emerged to support specific needs for other audiences, like consumer
            and marketing products. Collectively, one of our largest challenges
            is to deliver a cohesive user experience across these systems and
            present one Twitter brand in our products. So, we're working with
            our design system friends, the brand and marketing team, and our
            customers to define and build a unified Twitter visual design
            language. By sharing this design language, we hope to align the
            design and engineering practices across all our teams. We also aim
            to create a strong foundation so we can continue building trust and
            awareness of evolving Twitter's brand through all our products.
          </p>
          <Article.MultimediaGroup column={isMediumUp ? 3 : 2}>
            <Article.Multimedia>
              <img
                src={image_vdl_1}
                alt='Unified design language - brand refresh'
              />
            </Article.Multimedia>
            <Article.Multimedia>
              <img
                src={image_vdl_2}
                alt='Unified design language - visual principles'
              />
            </Article.Multimedia>
            <Article.Multimedia>
              <img
                src={image_vdl_3}
                alt='Unified design language - design techniques'
              />
            </Article.Multimedia>
            <Article.Multimedia>
              <img
                src={image_vdl_4}
                alt='Unified design language - core styles'
              />
            </Article.Multimedia>
            <Article.Multimedia>
              <img
                src={image_vdl_5}
                alt='Unified design language - mobile examples'
              />
            </Article.Multimedia>
            <Article.Multimedia>
              <img
                src={image_vdl_6}
                alt='Unified design language - desktop examples'
              />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <h5>System of Systems</h5>
          <p>
            We consider the unified design language is the primary approach to
            unify all the experiences we serve to our customers in different
            products and platforms. However, having a unified design language is
            only the first step to make the systems work together better in
            terms of the outcome. It doesn't really help us define a clear view
            of the eco-system for all our design systems and answer all the
            internal questions we heard, like when should I use which design
            system. This is an inevitable problem the team needs to figure out
            when we gather all the systems and try to make them work together
            seamlessly. We should now start thinking at a higher level rather
            than a single system level.
          </p>
          <p>
            To draw a better picture of design systems future at Twitter, we
            gained some external help from{' '}
            <Article.Link
              href='https://eightshapes.com/nathan-curtis'
              rel='noreferrer'
              target='_blank'
            >
              Nathan Curtis
            </Article.Link>
            , a design system master who founded{' '}
            <Article.Link
              href='https://eightshapes.com'
              rel='noreferrer'
              target='_blank'
            >
              EightShapes
            </Article.Link>
            , and worked with him to find answers through a series of workshops.
            Among all those exercises, the system of systems diagram is what I
            found the most interesting to think through and actually draw out.
            It gave the team a clear visual way to see every design system and
            its constitution organically, and potentially how they can fit
            together. These diagrams triggers a lot of brainstorming and
            conversation around possible approaches.
          </p>
          <Article.MultimediaGroup>
            <Article.Multimedia caption='System of systems diagram legend'>
              <img
                src={image_systems_legend}
                alt='System of systems diagram legend'
              />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <Article.MultimediaGroup column={2}>
            <Article.Multimedia caption='Proposal A'>
              <img src={image_systems_a} alt='System of systems proposal A' />
            </Article.Multimedia>
            <Article.Multimedia caption='Proposal B'>
              <img src={image_systems_b} alt='System of systems proposal B' />
            </Article.Multimedia>
          </Article.MultimediaGroup>
          <p>
            You can also read more about those symbols, diagrams and the
            thinking behind the visual representation in Nathan's article -{' '}
            <Article.Link
              href='https://medium.com/eightshapes-llc/design-systems-architecture-diagrams-3fc13ec979e3'
              rel='noreferrer'
              target='_blank'
            >
              Design Systems Architecture Diagrams
            </Article.Link>
            .
          </p>
        </Article.Section>

        <Article.Section>
          <h4>To Wrap Up</h4>
          <p>
            There are many more design system things I learned, practiced, and
            achieved at Twitter, and also many more things I wish I could
            continue doing. And I'm very happy to share more if you're
            interested. But for now, I'm gonna wrap up this project using a
            quote from Alex Schleifer, in which I found a great interpretation
            of why we are doing design systems.
          </p>
          <Article.Quote author='Alex Schleifer, VP of Design at Airbnb'>
            Here's the simple truth, you can’t innovate on products without
            first innovating the way you build them.
          </Article.Quote>
          <p>
            So Feather is one way we established at Twitter to help the company
            and people innovate, and innovate faster.{' '}
          </p>
        </Article.Section>
      </Project.Body>
    </Project>
  );
}

export default FeatherDesignSystem;
