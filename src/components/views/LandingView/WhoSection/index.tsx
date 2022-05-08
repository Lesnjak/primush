import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
// import { SpaceBlock } from '../../../common/SpaceBlock';
import { Typography } from '../../../common/Typography';
import { IMAGES } from '../../../../configs/image.config';
import { SpaceBlock } from '../../../common/SpaceBlock';
// import useTranslation from 'next-translate/useTranslation';

export const WhoSection: FC = () => {
  // const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const handleScroll = () => {
    const element: any = document.querySelector('#who');
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
    <div id="who" className={styles.who}>
      <ContentLimiter>
        <div className={styles.who_wrapper}>
          <Header black show={hideHeader} />
          <div className={styles.who_content}>
            <div className={styles.who_social}>
              <a className={styles.who_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.who_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.who_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.who_middle}>
              <div className={styles.who_contentWrapper}>
                <div className={styles.who_image}>
                  <img src={IMAGES.who} alt="yuriy" />
                </div>
                <div className={styles.who_text}>
                  <SpaceBlock marginBottom="s3">
                    <Typography uppercase variant="body-20" fontWeight="bold">
                      Who is Yurii Primush
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      My name is Yurii Primush. I’m a human being, a man, an
                      explorer, an adventurer, an entrepreneur, an investor, a
                      coach, and a mentor. I enjoy diving deep into new
                      experiences.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      I believe that every one of us can open our potential to
                      the fullest and become happier by accepting our
                      imperfections. By doing that we have a chance to unlock
                      our full potential.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      I also believe that relationships – within teams, with
                      clients, and relationships in general between people – are
                      our most valuable asset. Working in the finance technology
                      sector for almost 10 years I have gained great experience
                      in commercial, technical and operational business skills.
                      I enjoy working with talented and creative people who are
                      good at developing technical business solutions. As a
                      partner and co-founder, I launched several successful
                      fin-tech projects over the years.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      However, since 2017 my focus has been on personal
                      development: I have 5 years of experience in psychotherapy
                      as a client. Since 2017 I have studied the life and
                      business coaching and I have been learning from the best
                      while putting this into practice with business teams and
                      as a private coach.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      My goal is to make the World a better place through
                      innovation and technology while building awareness and
                      protecting the environment. If you have the same goals,
                      let us connect and create new synergies together.
                    </Typography>
                  </SpaceBlock>
                  <SpaceBlock marginBottom="s3">
                    <Typography font="sen" variant="body-14" color="greyText">
                      Feel free to follow also my social media pages.
                    </Typography>
                  </SpaceBlock>
                </div>
              </div>
            </div>
            <div className={styles.who_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#why"
                leftButtonId="#like"
                id="#who"
              />
              <Typography
                className={styles.who_vertical}
                uppercase
                variant="body-20"
              >
                Who is Yurii Primush
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
