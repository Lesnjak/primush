import { FC, useState } from 'react';
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
import { Iframe } from './Iframe';
import { IframeButton } from './IframeButton';

export const LandingView: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div id="iframe" className={styles.wrapper_iframe}>
        {isOpen && <Iframe setIsOpen={setIsOpen} />}
      </div>
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
      <HeaderSection setIsOpen={setIsOpen} />
      <LikeSection setIsOpen={setIsOpen} />
      <WhoSection setIsOpen={setIsOpen} />
      <WhySection setIsOpen={setIsOpen} />
      <ActivitiesSection setIsOpen={setIsOpen} />
      <WhatSection setIsOpen={setIsOpen} />
      <LinksSection setIsOpen={setIsOpen} />
      <StandSection setIsOpen={setIsOpen} />
      <ReviewsSection setIsOpen={setIsOpen} />
      <FormSection setIsOpen={setIsOpen} />
      <div className={styles.wrapper_hide}>
        <IframeButton setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};
