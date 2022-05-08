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
export const LikeSection: FC = () => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  const links = [
    t('like.startMyVenture'),
    t('like.businessMentoring'),
    t('like.developMyBusiness'),
    t('like.increaseProductivity'),
    t('like.leadershipCoaching'),
    t('like.findInspiration'),
    t('like.businessCoaching'),
    t('like.manageTimeEfficiently'),
    t('like.delegateOthers'),
    t('like.setClearerGoals'),
    t('like.solveConflictsTeam'),
    t('like.talkUnderstand'),
    t('like.liveMeaningful'),
    t('like.dealAnxiety'),
    t('like.workRelationship'),
    t('like.findBalance'),
    t('like.dealBurnout'),
    t('like.becomeHappier'),
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
          <Header black show={hideHeader} />
          <div className={styles.like_content}>
            <div className={styles.like_social}>
              <a className={styles.like_social_icon} href="/">
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a className={styles.like_social_icon} href="/">
                <ReactSVG src={ICONS.twitterIcon} />
              </a>
              <a className={styles.like_social_icon} href="/">
                <ReactSVG src={ICONS.instagramIcon} />
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
                    <div key={item} className={styles.like_links_link}>
                      <button className={styles.like_links_text}>{item}</button>
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
                {t('like.wouldLike')}
              </Typography>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
