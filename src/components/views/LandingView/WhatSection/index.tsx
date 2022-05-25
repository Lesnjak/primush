import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { IMAGES } from '../../../../configs/image.config';
import { Typography } from '../../../common/Typography';
import useTranslation from 'next-translate/useTranslation';

export const WhatSection: FC = () => {
  const { t } = useTranslation('common');
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
          <div className={styles.what_header}>
            <Header id="#what" black show={hideHeader} />
          </div>
          <div className={styles.what_content}>
            <div className={styles.what_social}>
              <a
                target="_blank"
                className={styles.what_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.what_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.what_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
              </a>
            </div>
            <div className={styles.what_middle}>
              <div className={styles.what_contentWrapper}>
                <div className={styles.what_image}>
                  <img src={IMAGES.what} alt="yuriy" />
                </div>
                <Typography
                  className={styles.what_space}
                  uppercase
                  variant="body-20"
                  fontWeight="bold"
                >
                  {t('what.title')}
                </Typography>
                <Typography
                  className={styles.what_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('what.text1')}
                </Typography>
                <Typography
                  className={styles.what_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('what.text2')}
                </Typography>
                <Typography
                  className={styles.what_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('what.text3')}
                </Typography>
                <Typography
                  className={styles.what_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('what.text4')}
                </Typography>
              </div>
            </div>
            <div className={styles.what_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#links"
                leftButtonId="#activities"
                id="#what"
              />
              <Typography
                className={styles.what_vertical}
                uppercase
                variant="body-20"
              >
                {t('what.title')}
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
