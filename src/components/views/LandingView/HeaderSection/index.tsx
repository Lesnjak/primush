// import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { Typography } from '../../../common/Typography';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

export const HeaderSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(false);

  const handleScroll = () => {
    const element: any = document.querySelector('#header');
    if (element) {
      const rect: any = element.getBoundingClientRect();
      if (rect.top) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  };
  const handleChange = (id: string) => () => {
    const element: any = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="header" className={styles.headerSection}>
      <ContentLimiter>
        <div className={styles.headerSection_wrapper}>
          <div
            className={cn(styles.headerSection_header, {
              [styles.headerSection_header_red]: hideHeader,
            })}
          >
            <Header absolute={false} show={hideHeader} />
          </div>
          <div className={styles.headerSection_content}>
            <div className={styles.headerSection_social}>
              <a
                target="_blank"
                className={styles.headerSection_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.headerSection_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.headerSection_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
              </a>
            </div>
            <div
              className={cn(styles.headerSection_middle, {
                [styles.headerSection_middle_padding]: hideHeader,
              })}
            >
              <div className={styles.headerSection_titleWrapper}>
                <div className={styles.headerSection_title}>
                  <Typography color="redTitle" font="cabin" variant="h1">
                    {t('header.do')}
                  </Typography>
                  <Typography color="redTitle" font="cabin" variant="h1">
                    {t('header.have')}
                  </Typography>
                  <Typography color="white" font="cabin" variant="h1">
                    {t('header.question')}
                  </Typography>
                </div>
                <div className={styles.headerSection_buttons}>
                  <button
                    onClick={handleChange('#like')}
                    className={cn(styles.headerSection_button, 'link')}
                  >
                    {t('header.yes')}
                  </button>
                  <button
                    onClick={handleChange('#like')}
                    className={cn(styles.headerSection_buttonAnim, 'link')}
                  >
                    <div className={styles.headerSection_buttonAnim_text}>
                      {t('header.no')}
                    </div>
                    <div className={styles.headerSection_buttonAnim_text}>
                      {t('header.yes')}
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.headerSection_rightBlock}>
              <Navigation rightButtonId={'#like'} id="#header" />
              <Typography
                className={styles.headerSection_underline}
                color="white"
                uppercase
                variant="body-20"
              >
                {t('header.book')}
              </Typography>
            </div>
            <div className={styles.headerSection_bottomBlock}>
              <div className={styles.headerSection_socialBottom}>
                <a
                  target="_blank"
                  className={styles.headerSection_social_icon}
                  href={t('socialLinks.facebook')}
                  rel="noreferrer"
                >
                  <ReactSVG src={ICONS.facebookIcon} />
                </a>
                <a
                  target="_blank"
                  className={styles.headerSection_social_icon}
                  href={t('socialLinks.instagram')}
                  rel="noreferrer"
                >
                  <ReactSVG src={ICONS.instagramIcon} />
                </a>
                <a
                  target="_blank"
                  className={styles.headerSection_social_icon}
                  href={t('socialLinks.linkedin')}
                  rel="noreferrer"
                >
                  <ReactSVG src={ICONS.linkedinIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
