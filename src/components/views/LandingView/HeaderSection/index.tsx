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
          <Header show={hideHeader} />
          <div className={styles.headerSection_content}>
            <div className={styles.headerSection_social}>
              <a className={styles.headerSection_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.headerSection_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.headerSection_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
            </div>
            <div className={styles.headerSection_middle}>
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
                  <button className={cn(styles.headerSection_button, 'link')}>
                    <Typography
                      uppercase
                      align="center"
                      font="cabin"
                      variant="body-32"
                    >
                      {t('header.yes')}
                    </Typography>
                  </button>
                  <button
                    title={t('header.yes')}
                    className={cn(
                      styles.headerSection_button,
                      styles.headerSection_button_transparent,
                      'link'
                    )}
                  >
                    <Typography
                      uppercase
                      align="center"
                      font="cabin"
                      variant="body-32"
                    >
                      {t('header.no')}
                    </Typography>
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
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
