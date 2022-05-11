import { FC } from 'react';
import styles from './styles.module.scss';
import { HeaderSection } from './HeaderSection';
import { LikeSection } from './LikeSection';
import { WhoSection } from './WhoSection';
import { WhySection } from './WhySection';
import { ActivitiesSection } from './ActivitiesSection';
import { WhatSection } from './WhatSection';
import { LinksSection } from './LinksSection';
import { ReviewsSection } from './ReviewsSection';

export const LandingView: FC = () => {
  return (
    <div className={styles.wrapper}>
      <HeaderSection />
      <LikeSection />
      <WhoSection />
      <WhySection />
      <ActivitiesSection />
      <WhatSection />
      <LinksSection />
      <ReviewsSection />
    </div>
  );
};
