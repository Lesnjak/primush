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

export const ReviewsSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

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
          <Header black show={hideHeader} />
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
                <SpaceBlock marginBottom="s3">
                  <Typography uppercase fontWeight="bold" variant="h3">
                    {t('reviews.title')}
                  </Typography>
                </SpaceBlock>
                <SpaceBlock marginBottom="s5">
                  <Typography
                    className={styles.reviews_text}
                    color="greyText"
                    variant="body-20"
                  >
                    {t('reviews.text')}
                  </Typography>
                </SpaceBlock>
                <div className={styles.reviews_sliderWrapper}>csad</div>
              </div>
            </div>
            <div className={styles.reviews_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#what"
                leftButtonId="#what"
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
