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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CustomCursor from 'custom-cursor-react';
import 'gsap';
import 'custom-cursor-react/dist/index.css';
import { FormSection } from './FormSection';
import { StandSection } from './StandSection';

export const LandingView: FC = () => {
  return (
    <div className={styles.wrapper}>
      {/*<div className={styles.wrapper_iframe}>*/}
      {/*  <div></div>*/}
      {/*  <iframe*/}
      {/*    src="https://widget.easyweek.io/primush-coaching"*/}
      {/*    style={{*/}
      {/*      border: 0,*/}
      {/*      display: 'block',*/}
      {/*      width: '100%',*/}
      {/*      height: '100vh',*/}
      {/*      height: '-webkit-fill-available',*/}
      {/*    }}*/}
      {/*    frameBorder={0}*/}
      {/*  />*/}
      {/*</div>*/}
      <CustomCursor
        targets={['.link']}
        customClass="custom-cursor"
        dimensions={40}
        fill="#000"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
        targetScale={2.5}
      />
      <HeaderSection />
      <LikeSection />
      <WhoSection />
      <WhySection />
      <ActivitiesSection />
      <WhatSection />
      <LinksSection />
      <StandSection />
      <ReviewsSection />
      <FormSection />
    </div>
  );
};
