import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { Typography } from '../../../common/Typography';
import { IMAGES } from '../../../../configs/image.config';
import useTranslation from 'next-translate/useTranslation';

export const WhoSection: FC = () => {
  const { t } = useTranslation('common');
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
          <div className={styles.who_header}>
            <Header id="#who" black show={hideHeader} />
          </div>
          <div className={styles.who_content}>
            <div className={styles.who_social}>
              <a
                target="_blank"
                className={styles.who_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.who_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.who_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
              </a>
            </div>
            <div className={styles.who_middle}>
              <div className={styles.who_contentWrapper}>
                <div className={styles.who_image}>
                  <img src={IMAGES.who} alt="yuriy" />
                </div>
                <Typography
                  className={styles.who_space}
                  uppercase
                  variant="body-20"
                  fontWeight="bold"
                >
                  {t('who.title')}
                </Typography>
                <Typography
                  className={styles.who_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('who.text')}
                </Typography>
                <Typography
                  className={styles.who_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('who.text1')}
                </Typography>
                <Typography
                  className={styles.who_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('who.text2')}
                </Typography>
                <Typography
                  className={styles.who_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('who.text3')}
                </Typography>
                <Typography
                  className={styles.who_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('who.text4')}
                </Typography>
                <Typography
                  className={styles.who_space}
                  font="sen"
                  variant="body-14"
                  color="greyText"
                >
                  {t('who.text5')}
                </Typography>
                <div className={styles.who_socialn}>
                  <a
                    target="_blank"
                    className={styles.who_socialn_icon}
                    href={t('socialLinks.facebook')}
                    rel="noreferrer"
                  >
                    <ReactSVG src={ICONS.facebookIcon} />
                  </a>
                  <a
                    target="_blank"
                    className={styles.who_socialn_icon}
                    href={t('socialLinks.instagram')}
                    rel="noreferrer"
                  >
                    <ReactSVG src={ICONS.instagramIcon} />
                  </a>
                  <a
                    target="_blank"
                    className={styles.who_socialn_icon}
                    href={t('socialLinks.linkedin')}
                    rel="noreferrer"
                  >
                    <ReactSVG src={ICONS.linkedinIcon} />
                  </a>
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
                {t('who.title')}
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
