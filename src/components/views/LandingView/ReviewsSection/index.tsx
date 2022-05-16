import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { SpaceBlock } from '../../../common/SpaceBlock';
import { Typography } from '../../../common/Typography';
import useTranslation from 'next-translate/useTranslation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGES } from '../../../../configs/image.config';
import { SpaceMaker } from '../../../common/SpaceMaker';
import cn from 'classnames';

export const ReviewsSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);
  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    // nextArrow: <div className={styles.reviews_slide_next}>next</div>,
    // prevArrow: <div className={styles.reviews_slide_prev}>prev</div>,
  };

  const handleScroll = () => {
    const element: any = document.querySelector('#reviews');
    if (element) {
      const rect: any = element.getBoundingClientRect();
      if (rect.top) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  };

  const slideList = [
    {
      name: 'Leslie Alexander',
      image: IMAGES.face1,
      date: '12 April, 2022',
      textTitle:
        'Great experience. Would definitely work with Yurii again in the future!',
      text: 'It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.',
    },
    {
      name: 'Wade Warren',
      image: IMAGES.face2,
      date: '24 April, 2022',
      textTitle:
        'Great experience. Would definitely work with Yurii again in the future!',
      text: 'It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.',
    },
    {
      name: 'Jenny Wilson',
      image: IMAGES.face3,
      date: '10 April, 2022',
      textTitle:
        'Great experience. Would definitely work with Yurii again in the future!',
      text: 'It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.',
    },
    {
      name: 'Leslie Alexander',
      image: IMAGES.face1,
      date: '12 April, 2022',
      textTitle:
        'Great experience. Would definitely work with Yurii again in the future!',
      text: 'It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.',
    },
    {
      name: 'Wade Warren',
      image: IMAGES.face2,
      date: '24 April, 2022',
      textTitle:
        'Great experience. Would definitely work with Yurii again in the future!',
      text: 'It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.',
    },
    {
      name: 'Jenny Wilson',
      image: IMAGES.face3,
      date: '10 April, 2022',
      textTitle:
        'Great experience. Would definitely work with Yurii again in the future!',
      text: 'It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.',
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="reviews" className={styles.reviews}>
      <ContentLimiter>
        <div className={styles.reviews_wrapper}>
          <div className={styles.reviews_header}>
            <Header id="#reviews" black show={hideHeader} />
          </div>
          <div className={styles.reviews_content}>
            <div className={styles.reviews_social}>
              <a className={styles.reviews_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.reviews_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.reviews_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.reviews_middle}>
              <div className={styles.reviews_contentWrapper}>
                <SpaceBlock marginBottom="s5">
                  <Typography uppercase fontWeight="bold" variant="h3">
                    {t('reviews.title')}
                  </Typography>
                </SpaceBlock>

                <div className={styles.reviews_sliderWrapper}>
                  <Slider {...settings}>
                    {slideList.map((item: any, idx: number) => (
                      <div key={idx}>
                        <div className={cn(styles.reviews_slide, 'center')}>
                          <div className={styles.reviews_slide_content}>
                            <SpaceBlock marginBottom="s2">
                              <Typography
                                align="center"
                                fontWeight="bold"
                                variant="body-12"
                              >
                                {item.textTitle}
                              </Typography>
                            </SpaceBlock>
                            <Typography
                              color="greyText"
                              align="center"
                              variant="body-12"
                            >
                              {item.text}
                            </Typography>
                          </div>
                          <div className={styles.reviews_slide_image}>
                            <img src={item.image} alt="face" />
                          </div>
                          <Typography fontWeight="medium">
                            {item.name}
                          </Typography>
                          <SpaceBlock marginBottom="s0" />
                          <SpaceBlock positionVertical="center" width="auto">
                            <ReactSVG src={ICONS.dateIcon} />
                            <SpaceMaker width="s2" />
                            <Typography color="greyTextLight">
                              {item.date}
                            </Typography>
                          </SpaceBlock>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className={styles.reviews_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#form"
                leftButtonId="#links"
                id="#reviews"
              />
              <Typography
                className={styles.reviews_vertical}
                uppercase
                variant="body-20"
              >
                reviews Yurii Primush
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
