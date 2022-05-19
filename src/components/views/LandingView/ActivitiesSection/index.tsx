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
import { IMAGES } from '../../../../configs/image.config';
import { SpaceMaker } from '../../../common/SpaceMaker';

export const ActivitiesSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const handleScroll = () => {
    const element: any = document.querySelector('#activities');
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
    <div id="activities" className={styles.activities}>
      <ContentLimiter>
        <div className={styles.activities_wrapper}>
          <div className={styles.activities_header}>
            <Header black show={hideHeader} />
          </div>
          <div className={styles.activities_content}>
            <div className={styles.activities_social}>
              <a className={styles.activities_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.activities_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.activities_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.activities_middle}>
              <div className={styles.activities_contentWrapper}>
                <SpaceBlock marginBottom="s3">
                  <Typography fontWeight="bold" variant="h3">
                    {t('activities.title')}
                  </Typography>
                </SpaceBlock>
                <div className={styles.activities_mentorWrapper}>
                  <SpaceBlock marginBottom="s5">
                    <div className={styles.activities_imageTop}>
                      <img src={IMAGES.mentor} alt="icon" />
                    </div>
                    <SpaceMaker width="s8" />
                    <div>
                      <SpaceBlock marginBottom="s0">
                        <Typography variant="body-16" fontWeight="bold">
                          {t('activities.mentor')}
                        </Typography>
                      </SpaceBlock>
                      <SpaceBlock marginBottom="s1">
                        <Typography variant="body-14" color="greyTextLight">
                          {t('activities.university')}
                        </Typography>
                      </SpaceBlock>
                      <SpaceBlock>
                        <Typography variant="body-12" color="greyText">
                          {t('activities.mentorText')}
                        </Typography>
                      </SpaceBlock>
                    </div>
                  </SpaceBlock>
                  <SpaceMaker width="s20" />
                  <SpaceBlock marginBottom="s5">
                    <div className={styles.activities_imageTop}>
                      <img src={IMAGES.member} alt="icon" />
                    </div>
                    <SpaceMaker width="s8" />
                    <div>
                      <SpaceBlock marginBottom="s1">
                        <Typography variant="body-16" fontWeight="bold">
                          {t('activities.member')}
                        </Typography>
                      </SpaceBlock>

                      <SpaceBlock>
                        <Typography variant="body-12" color="greyText">
                          {t('activities.memberText')}
                        </Typography>
                      </SpaceBlock>
                    </div>
                  </SpaceBlock>
                </div>
                <div className={styles.activities_projectsWrapper}>
                  <Typography uppercase fontWeight="bold" variant="body-20">
                    {t('activities.myProjects')}
                  </Typography>
                  <Typography
                    color="greyText"
                    fontWeight="medium"
                    variant="body-14"
                  >
                    {t('activities.follow')}
                  </Typography>
                </div>
                <div className={styles.activities_linksWrapper}>
                  <div className={styles.activities_linksWrapper_link}>
                    <span className={styles.activities_linksWrapper_text}>
                      geotrees.org
                    </span>
                    <img src={IMAGES.gravitate} alt="gravitate" />
                  </div>
                  <div className={styles.activities_linksWrapper_link}>
                    <span className={styles.activities_linksWrapper_text}>
                      rainbowfounders.org
                    </span>
                    <img src={IMAGES.candy} alt="gravitate" />
                  </div>
                  <div className={styles.activities_linksWrapper_link}>
                    <span className={styles.activities_linksWrapper_text}>
                      unprfct.com
                    </span>
                    <img src={IMAGES.tubes} alt="gravitate" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activities_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#what"
                leftButtonId="#why"
                id="#activities"
              />
              <Typography
                className={styles.activities_vertical}
                uppercase
                variant="body-20"
              >
                {t('activities.title')}
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
