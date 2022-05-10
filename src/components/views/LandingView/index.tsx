import { FC } from 'react';
import { HeaderSection } from './HeaderSection';
import styles from './styles.module.scss';
import { LikeSection } from './LikeSection';
import { WhoSection } from './WhoSection';
import { WhySection } from './WhySection';
import { ActivitiesSection } from './ActivitiesSection';

export const LandingView: FC = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderSection />
      <LikeSection />
      <WhoSection />
      <WhySection />
      <ActivitiesSection />
    </div>
  );
};
