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
import { IframeButton } from '../IframeButton';

type Props = {
  setIsOpen?: any;
  setSubject: any;
};
export const LikeSection: FC<Props> = ({ setIsOpen, setSubject }) => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const links = [
    'like.question1',
    'like.question2',
    'like.question3',
    'like.question4',
    'like.question5',
    'like.question6',
    'like.question7',
    'like.question8',
    'like.question9',
    'like.question10',
    'like.question11',
    'like.question12',
    'like.question13',
    'like.question14',
    'like.question15',
    'like.question16',
    'like.question17',
    'like.question18',
    'like.question19',
    'like.question20',
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

  const handleChange = (id: string, item: any) => () => {
    const element: any = document.querySelector(id);
    setSubject(item);
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
      <Navigation
        black
        rightButtonId="#who"
        leftButtonId="#header"
        id="#like"
      />
      <ContentLimiter>
        <div className={styles.like_wrapper}>
          <div className={styles.like_header}>
            <Header
              setIsOpen={setIsOpen}
              id="#like"
              absolute={false}
              black
              show={hideHeader}
            />
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
                <Scrollbar style={{ width: '100%', height: '62vh' }}>
                  {links.map((item: string) => (
                    <div
                      onClick={handleChange('#form', item)}
                      key={item}
                      className={styles.like_links_link}
                    >
                      <button className={cn(styles.like_links_text, 'link')}>
                        {t(item)}
                      </button>
                    </div>
                  ))}
                </Scrollbar>
              </div>
            </div>
            <div className={styles.like_rightBlock}>
              <span />
              <Typography
                className={styles.like_vertical}
                uppercase
                variant="body-20"
              >
                {t('like.wouldLik')}
              </Typography>
              <IframeButton setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
