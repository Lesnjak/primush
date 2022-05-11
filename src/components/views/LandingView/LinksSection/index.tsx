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

export const LinksSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const handleScroll = () => {
    const element: any = document.querySelector('#links');
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
    <div id="links" className={styles.links}>
      <ContentLimiter>
        <div className={styles.links_wrapper}>
          <Header black show={hideHeader} />
          <div className={styles.links_content}>
            <div className={styles.links_social}>
              <a className={styles.links_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.links_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.links_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.links_middle}>
              <div className={styles.links_contentWrapper}>
                <SpaceBlock marginBottom="s3">
                  <Typography uppercase fontWeight="bold" variant="h3">
                    {t('links.title')}
                  </Typography>
                </SpaceBlock>
                <SpaceBlock marginBottom="s5">
                  <Typography
                    className={styles.links_text}
                    color="greyText"
                    variant="body-20"
                  >
                    {t('links.text')}
                  </Typography>
                </SpaceBlock>
                <div className={styles.links_linksWrapper}>
                  <div className={styles.links_linksWrapper_link}>
                    <span className={styles.links_linksWrapper_text}>
                      geotrees.org
                    </span>
                    <img src={IMAGES.video} alt="gravitate" />
                  </div>
                  <div className={styles.links_linksWrapper_link}>
                    <span className={styles.links_linksWrapper_text}>
                      rainbowfounders.org
                    </span>
                    <img src={IMAGES.video} alt="gravitate" />
                  </div>
                  <div className={styles.links_linksWrapper_link}>
                    <span className={styles.links_linksWrapper_text}>
                      unprfct.com
                    </span>
                    <img src={IMAGES.video} alt="gravitate" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.links_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#what"
                leftButtonId="#what"
                id="#links"
              />
              <Typography
                className={styles.links_vertical}
                uppercase
                variant="body-20"
              >
                links Yurii Primush
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
