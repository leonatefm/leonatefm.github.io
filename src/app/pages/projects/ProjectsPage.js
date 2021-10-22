import './ProjectsPage.scss';
import * as React from 'react';
import classNames from 'classnames';
import icons from 'lib/icons';
import PageSection from 'components/PageSection';
import {
  StoredIQ,
  RetinaWallpaper,
  SweetMoments,
  FeatherDesignSystem,
  WatsonClassroom,
} from './projects';

const classnames = {
  BASE: 'ProjectsPage',
};

function ProjectsPage() {
  return (
    <PageSection className={classNames(classnames.BASE)} id='projects'>
      <PageSection.Header icon={icons.projects}>
        With my hybrid background in design and engineering along with a heart
        filled with curiosity, I've been exploring all the fun and challenging
        parts of creating a product from different perspectives. And this
        amazing journey in the past turns me into a versatile creative worker
        and a great team player speaking various kinds of languages to bridge
        the communication gap in the team among different function units, or a
        unicorn, as some people may use that metaphor :)
      </PageSection.Header>

      <PageSection.Body>
        <FeatherDesignSystem />
        <WatsonClassroom />
        <StoredIQ />
        <RetinaWallpaper />
        <SweetMoments />
      </PageSection.Body>
    </PageSection>
  );
}

export default ProjectsPage;
