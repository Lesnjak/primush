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
// import { VideoBlock } from '../../../common/VideoBlock';
import { BsLink45Deg } from 'react-icons/bs';
import { Iframe } from '../Iframe';

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
          <div className={styles.links_header}>
            <Header id="#links" black show={hideHeader} />
          </div>

          <div className={styles.links_content}>
            <div className={styles.links_social}>
              <a
                target="_blank"
                className={styles.links_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.links_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.links_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
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
                  {/*<div className={styles.links_linksWrapper_link}>*/}
                  {/*  <VideoBlock*/}
                  {/*    src={t('links.video1.url')}*/}
                  {/*    preview={t('links.video1.preview')}*/}
                  {/*  />*/}
                  {/*  <SpaceBlock marginBottom="s2" />*/}
                  {/*  <Typography fontWeight="bold" uppercase>*/}
                  {/*    {t('links.video1.name')}*/}
                  {/*  </Typography>*/}
                  {/*</div>*/}
                  {/*<div className={styles.links_linksWrapper_link}>*/}
                  {/*  <VideoBlock*/}
                  {/*    src={t('links.video2.url')}*/}
                  {/*    preview={t('links.video2.preview')}*/}
                  {/*  />*/}
                  {/*  <SpaceBlock marginBottom="s2" />*/}
                  {/*  <Typography fontWeight="bold" uppercase>*/}
                  {/*    {t('links.video2.name')}*/}
                  {/*  </Typography>*/}
                  {/*</div>*/}
                  <div className={styles.links_linksWrapper_link}>
                    <div className={styles.links_linksWrapper_link_image}>
                      <a
                        href={t('links.link1.url')}
                        target="_blank"
                        className={styles.links_linksWrapper_link_button}
                        rel="noreferrer"
                      >
                        <BsLink45Deg />
                      </a>
                      <img src={t('links.link1.preview')} alt="gravitate" />
                    </div>
                    <SpaceBlock marginBottom="s2" />
                    <Typography fontWeight="bold" uppercase>
                      {t('links.link1.name')}
                    </Typography>
                  </div>
                  <div className={styles.links_linksWrapper_link}>
                    <div className={styles.links_linksWrapper_link_image}>
                      <a
                        href={t('links.link2.url')}
                        target="_blank"
                        className={styles.links_linksWrapper_link_button}
                        rel="noreferrer"
                      >
                        <BsLink45Deg />
                      </a>
                      <img src={t('links.link2.preview')} alt="gravitate" />
                    </div>
                    <SpaceBlock marginBottom="s2" />
                    <Typography fontWeight="bold" uppercase>
                      {t('links.link2.name')}
                    </Typography>
                  </div>
                  <div className={styles.links_linksWrapper_link}>
                    <div className={styles.links_linksWrapper_link_image}>
                      <a
                        href={t('links.link3.url')}
                        target="_blank"
                        className={styles.links_linksWrapper_link_button}
                        rel="noreferrer"
                      >
                        <BsLink45Deg />
                      </a>
                      <img src={t('links.link3.preview')} alt="gravitate" />
                    </div>
                    <SpaceBlock marginBottom="s2" />
                    <Typography fontWeight="bold" uppercase>
                      {t('links.link3.name')}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.links_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#stand"
                leftButtonId="#what"
                id="#links"
              />
              <Typography
                className={styles.links_vertical}
                uppercase
                variant="body-20"
              >
                {t('links.title')}
              </Typography>
              <Iframe />
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
