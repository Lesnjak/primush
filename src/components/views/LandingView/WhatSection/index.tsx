import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { IMAGES } from '../../../../configs/image.config';
import { SpaceBlock } from '../../../common/SpaceBlock';
import { Typography } from '../../../common/Typography';
export const WhatSection: FC = () => {
  // const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const handleScroll = () => {
    const element: any = document.querySelector('#what');
    if (element) {
      const rect: any = element.getBoundingClientRect();
      if (rect.top) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="what" className={styles.what}>
      <ContentLimiter>
        <div className={styles.what_wrapper}>
          <Header black show={hideHeader} />
          <div className={styles.what_content}>
            <div className={styles.what_social}>
              <a className={styles.what_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.what_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.what_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.what_middle}>
              <div className={styles.what_contentWrapper}>
                <div className={styles.what_image}>
                  <img src={IMAGES.what} alt="yuriy" />
                </div>
                <div className={styles.what_text}>
                  <SpaceBlock marginBottom="s3">
                    <Typography uppercase variant="body-20" fontWeight="bold">
                      What Yurii Primush
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      People often say that I’m a big and ambitious dreamer that
                      always makes his dreams true. I believe they are right. By
                      the age of 27 I had achieved most of my childhood dreams.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      I started working during my university studies, at the age
                      of 19. When I turned 20, I launched my first start-up
                      which in 10 years grow into one of the most successful
                      ventures in the field, placing it in 4th place in the CEE
                      region. The success helped me to generate significant
                      personal wealth already by the age of 30. I believe that
                      this success was a result of a combination of a good
                      strategic view, creativity, proactivity, scale of
                      thinking, leadership and managerial skills. I’ve been
                      often told to be a good team player and a very empathic
                      person. At the same time, I believe that I can sometimes
                      be very straightforward in my suggestions and opinions.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      I hold an International Economics and MBA degrees. I’m
                      also a certified professional life and business coach,
                      participating regularly in various educational programs.
                      I’m proud to be a client in psychotherapy for the last 5
                      years. I love working on my personal development which
                      always helps to discover new perspectives pushing me to
                      challenge myself. Working in psychotherapy also helps me
                      not to bring my personal agenda to the sessions with my
                      clients in coaching, so there is full focus on the client
                      and client’s requests.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      If you have an idea or a challenge and you dream to change
                      something, to have a more meaningful and successful life,
                      you want to achieve new and exciting goals in your
                      business or in your personal life, I promise to do
                      everything possible to help you on this path.
                    </Typography>
                  </SpaceBlock>
                </div>
              </div>
            </div>
            <div className={styles.what_rightBlock}>
              <span />
              <Navigation
                black
                // rightButtonId="#who"
                leftButtonId="#activities"
                id="#what"
              />
              <Typography
                className={styles.what_vertical}
                uppercase
                variant="body-20"
              >
                What Yurii Primush
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
