import './PhotographPage.scss';
import * as React from 'react';
import breakpoints from 'lib/breakpoints';
import Button from 'components/Button';
import classNames from 'classnames';
import icons from 'lib/icons';
import image_1 from 'images/photograph/v1.jpg';
import image_2 from 'images/photograph/h1.jpg';
import image_3 from 'images/photograph/h2.jpg';
import image_4 from 'images/photograph/v2.jpg';
import image_5 from 'images/photograph/v3.jpg';
import image_6 from 'images/photograph/h3.jpg';
import PageSection from 'components/PageSection';
import Photo from 'components/Photo';
import { useMediaQuery } from 'react-responsive';

const classnames = {
  BASE: 'PhotographPage',
  GALLERY: 'PhotographPage-gallery',
  MORE: 'PhotographPage-more',
};

function PhotographPage() {
  const isMediumUp = useMediaQuery({
    minWidth: breakpoints.MEDIUM,
  });

  const photo_1 = {
    caption: 'Mini Eiffel Tower',
    metadata: 'Las Vegas, 2016',
    src: image_1,
  };
  const photo_2 = {
    caption: 'Camp With Friends',
    metadata: 'Big Bend, 2017',
    src: image_2,
  };
  const photo_3 = {
    caption: 'Marfa Prada',
    metadata: 'Marfa, 2017',
    src: image_3,
  };
  const photo_4 = {
    caption: 'The Narrows',
    metadata: 'Zion, 2017',
    src: image_4,
  };
  const photo_5 = {
    caption: 'Jin Li',
    metadata: 'Chengdu, 2018',
    src: image_5,
  };
  const photo_6 = {
    caption: 'The Painted Ladies',
    metadata: 'San Francisco, 2019',
    src: image_6,
  };

  const photos = isMediumUp
    ? [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6]
    : [photo_1, photo_2, photo_4, photo_3, photo_5, photo_6];

  return (
    <PageSection className={classNames(classnames.BASE)} id='photograph'>
      <PageSection.Header icon={icons.camera}>
        Photograph makes up another big part of my life outside of work. As much
        as I love traveling to cities and hiking through national parks,
        bringing a camera with me wherever I go just forces myself to be a
        little bit more creative on the way I observe the world and life. Still
        in love with wide angles for landscape while trying to figure out the
        55mm on the street recently.
      </PageSection.Header>

      <PageSection.Body>
        <div className={classnames.GALLERY}>
          {photos.map((photo) => (
            <Photo
              caption={photo.caption}
              key={photo.caption}
              metadata={photo.metadata}
              src={photo.src}
            />
          ))}
        </div>

        <p className={classnames.MORE}>
          <Button
            href='https://photo.chengqizhu.com'
            icon={icons.photos}
            rel='noreferrer'
            target='_blank'
            type='link'
          >
            See more
          </Button>
        </p>
      </PageSection.Body>
    </PageSection>
  );
}

export default PhotographPage;
