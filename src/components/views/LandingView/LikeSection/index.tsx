import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { Typography } from '../../../common/Typography';
import { SpaceBlock } from '../../../common/SpaceBlock';
import useTranslation from 'next-translate/useTranslation';
import Scrollbar from 'react-scrollbars-custom';
import cn from 'classnames';
import { Iframe } from '../Iframe';
export const LikeSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const links = [
    t('like.question1'),
    t('like.question2'),
    t('like.question3'),
    t('like.question4'),
    t('like.question5'),
    t('like.question6'),
    t('like.question7'),
    t('like.question8'),
    t('like.question9'),
    t('like.question10'),
    t('like.question11'),
    t('like.question12'),
    t('like.question13'),
    t('like.question14'),
    t('like.question15'),
    t('like.question16'),
    t('like.question17'),
    t('like.question18'),
    t('like.question19'),
    t('like.question20'),
  ];

  const handleScroll = () => {
    const element: any = document.querySelector('#like');
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
    <div id="like" className={styles.like}>
      <ContentLimiter>
        <div className={styles.like_wrapper}>
          <div className={styles.like_header}>
            <Header absolute={false} black show={hideHeader} />
          </div>
          <div className={styles.like_content}>
            <div className={styles.like_social}>
              <a
                target="_blank"
                className={styles.like_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.like_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.like_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
              </a>
            </div>
            <div className={styles.like_middle}>
              <SpaceBlock position="center" marginBottom="s3">
                <Typography align="center" font="sen" variant="body-20">
                  {t('like.question')}
                </Typography>
              </SpaceBlock>
              <SpaceBlock position="center" marginBottom="s5">
                <Typography
                  uppercase
                  align="center"
                  fontWeight="bold"
                  variant="h2"
                >
                  {t('like.wouldLike')}
                </Typography>
              </SpaceBlock>
              <div className={styles.like_links}>
                <Scrollbar style={{ width: '100%', height: '100%' }}>
                  {links.map((item: string) => (
                    <div
                      onClick={handleChange('#form')}
                      key={item}
                      className={styles.like_links_link}
                    >
                      <button className={cn(styles.like_links_text, 'link')}>
                        {item}
                      </button>
                    </div>
                  ))}
                </Scrollbar>
              </div>
            </div>
            <div className={styles.like_rightBlock}>
              <span />
              <Navigation
                black
                rightButtonId="#who"
                leftButtonId="#header"
                id="#like"
              />
              <Typography
                className={styles.like_vertical}
                uppercase
                variant="body-20"
              >
                {t('like.wouldLik')}
              </Typography>
              <Iframe />
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
