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
import { IframeButton } from '../IframeButton';

type Props = {
  setIsOpen?: any;
};

export const WhySection: FC<Props> = ({ setIsOpen }) => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const handleScroll = () => {
    const element: any = document.querySelector('#why');
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
    <div id="why" className={styles.why}>
      <Navigation black rightButtonId="#what" leftButtonId="#who" id="#why" />
      <ContentLimiter>
        <div className={styles.why_wrapper}>
          <div className={styles.why_header}>
            <Header setIsOpen={setIsOpen} id="#why" black show={hideHeader} />
          </div>

          <div className={styles.why_wrapper}>
            <div className={styles.why_header}>
              <Header setIsOpen={setIsOpen} id="#why" black show={hideHeader} />
            </div>
            <div className={styles.why_content}>
              <div className={styles.why_social}>
                <a
                  target="_blank"
                  className={styles.why_social_icon}
                  href={t('socialLinks.facebook')}
                  rel="noreferrer"
                >
                  <ReactSVG src={ICONS.facebookIcon} />
                </a>
                <a
                  target="_blank"
                  className={styles.why_social_icon}
                  href={t('socialLinks.instagram')}
                  rel="noreferrer"
                >
                  <ReactSVG src={ICONS.instagramIcon} />
                </a>
                <a
                  target="_blank"
                  className={styles.why_social_icon}
                  href={t('socialLinks.linkedin')}
                  rel="noreferrer"
                >
                  <ReactSVG src={ICONS.linkedinIcon} />
                </a>
              </div>
              <div className={styles.why_middle}>
                <div className={styles.why_contentWrapper}>
                  <div className={styles.why_image}>
                    <img src={IMAGES.why} alt="yuriy" />
                  </div>
                  <Typography
                    className={styles.why_space}
                    uppercase
                    variant="body-20"
                    fontWeight="bold"
                  >
                    {t('why.title')}
                  </Typography>
                  <Typography
                    className={styles.why_space}
                    font="sen"
                    variant="body-14"
                    color="greyText"
                  >
                    {t('why.text1')}
                  </Typography>
                  <Typography
                    className={styles.why_space}
                    font="sen"
                    variant="body-14"
                    color="greyText"
                  >
                    {t('why.text2')}
                  </Typography>
                  <Typography
                    className={styles.why_space}
                    font="sen"
                    variant="body-14"
                    color="greyText"
                  >
                    {t('why.text3')}
                  </Typography>
                  <Typography
                    className={styles.why_space}
                    font="sen"
                    variant="body-14"
                    color="greyText"
                  >
                    {t('why.text4')}
                  </Typography>
                </div>
              </div>
              <div className={styles.why_rightBlock}>
                <span />
                <Typography
                  className={styles.why_vertical}
                  uppercase
                  variant="body-20"
                >
                  {t('why.title')}
                </Typography>
                <IframeButton setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
