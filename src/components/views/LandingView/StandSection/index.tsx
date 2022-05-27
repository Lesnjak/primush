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
import { Iframe } from '../Iframe';

export const StandSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const handleScroll = () => {
    const element: any = document.querySelector('#stand');
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
    <div id="stand" className={styles.stand}>
      <ContentLimiter>
        <div className={styles.stand_wrapper}>
          <div className={styles.stand_header}>
            <Header id="#stand" black show={hideHeader} />
          </div>

          <div className={styles.stand_content}>
            <div className={styles.stand_social}>
              <a
                target="_blank"
                className={styles.stand_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.stand_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.stand_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
              </a>
            </div>
            <div className={styles.stand_middle}>
              <div className={styles.stand_contentWrapper}>
                <SpaceBlock marginBottom="s3">
                  <Typography uppercase fontWeight="bold" variant="h3">
                    {t('stand.title')}
                  </Typography>
                </SpaceBlock>
                <SpaceBlock marginBottom="s3">
                  <Typography
                    className={styles.stand_text}
                    color="greyText"
                    variant="body-20"
                  >
                    {t('stand.text1')}
                  </Typography>
                </SpaceBlock>
                <SpaceBlock marginBottom="s5">
                  <Typography
                    className={styles.stand_text}
                    color="greyText"
                    variant="body-20"
                  >
                    {t('stand.text2')}
                  </Typography>
                </SpaceBlock>
                <div className={styles.stand_linksWrapper}>
                  <a
                    href={t('standLinks.link1')}
                    target="_blank"
                    className={styles.stand_linksWrapper_link}
                    rel="noreferrer"
                  >
                    <div className={styles.stand_linksWrapper_link_logo}>
                      <img src={ICONS.card1Icon} alt="icon" />
                      <img
                        className={styles.stand_linksWrapper_link_hover}
                        src={ICONS.card1HIcon}
                        alt="icon"
                      />
                    </div>

                    <Typography align="center" variant="body-16">
                      {t('stand.card1')}
                    </Typography>
                  </a>
                  <a
                    href={t('standLinks.link2')}
                    target="_blank"
                    className={styles.stand_linksWrapper_link}
                    rel="noreferrer"
                  >
                    <div className={styles.stand_linksWrapper_link_logo}>
                      <img src={ICONS.card2Icon} alt="icon" />
                      <img
                        className={styles.stand_linksWrapper_link_hover}
                        src={ICONS.card2HIcon}
                        alt="icon"
                      />
                    </div>
                    <Typography align="center" variant="body-16">
                      {t('stand.card2')}
                    </Typography>
                  </a>
                  <a
                    href={t('standLinks.link3')}
                    target="_blank"
                    className={styles.stand_linksWrapper_link}
                    rel="noreferrer"
                  >
                    <div className={styles.stand_linksWrapper_link_logo}>
                      <img src={ICONS.card3Icon} alt="icon" />
                      <img
                        className={styles.stand_linksWrapper_link_hover}
                        src={ICONS.card3HIcon}
                        alt="icon"
                      />
                    </div>
                    <Typography align="center" variant="body-16">
                      {t('stand.card3')}
                    </Typography>
                  </a>
                  <a
                    href={t('standLinks.link4')}
                    target="_blank"
                    className={styles.stand_linksWrapper_link}
                    rel="noreferrer"
                  >
                    <div className={styles.stand_linksWrapper_link_logo}>
                      <img src={ICONS.card4Icon} alt="icon" />
                      <img
                        className={styles.stand_linksWrapper_link_hover}
                        src={ICONS.card4HIcon}
                        alt="icon"
                      />
                    </div>
                    <Typography align="center" variant="body-16">
                      {t('stand.card4')}
                    </Typography>
                  </a>
                  <a
                    href={t('standLinks.link5')}
                    target="_blank"
                    className={styles.stand_linksWrapper_link}
                    rel="noreferrer"
                  >
                    <div className={styles.stand_linksWrapper_link_logo}>
                      <img src={ICONS.card5Icon} alt="icon" />
                      <img
                        className={styles.stand_linksWrapper_link_hover}
                        src={ICONS.card5HIcon}
                        alt="icon"
                      />
                    </div>
                    <Typography align="center" variant="body-16">
                      {t('stand.card5')}
                    </Typography>
                  </a>
                  <a
                    href={t('standLinks.link6')}
                    target="_blank"
                    className={styles.stand_linksWrapper_link}
                    rel="noreferrer"
                  >
                    <div className={styles.stand_linksWrapper_link_logo}>
                      <img src={ICONS.card3Icon} alt="icon" />
                      <img
                        className={styles.stand_linksWrapper_link_hover}
                        src={ICONS.card3HIcon}
                        alt="icon"
                      />
                    </div>
                    <Typography align="center" variant="body-16">
                      {t('stand.card6')}
                    </Typography>
                  </a>
                </div>
                <Typography variant="body-16" fontWeight="bold">
                  {t('stand.text3')}
                </Typography>
              </div>
            </div>
            <div className={styles.stand_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#reviews"
                leftButtonId="#links"
                id="#stand"
              />
              <Typography
                className={styles.stand_vertical}
                uppercase
                variant="body-20"
              >
                {t('stand.title')}
              </Typography>
              <Iframe />
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
