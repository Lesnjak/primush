import { FC, useEffect, useState } from 'react';
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
import 'gsap';
import 'custom-cursor-react/dist/index.css';
import { FormSection } from './FormSection';
import { StandSection } from './StandSection';
import { Iframe } from './Iframe';
import { IframeButton } from './IframeButton';
import { Header } from './Header';
import cn from 'classnames';

export const LandingView: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState('');
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
    <div className={styles.wrapper}>
      <div id="iframe" className={styles.wrapper_iframe}>
        {isOpen && <Iframe setIsOpen={setIsOpen} />}
      </div>
      <div className={styles.wrapper_hide}>
        <div
          className={cn(styles.wrapper_header, {
            [styles.wrapper_header_red]: hideHeader,
          })}
        >
          <Header setIsOpen={setIsOpen} absolute={false} show={hideHeader} />
        </div>
        <IframeButton setIsOpen={setIsOpen} />
      </div>

      <HeaderSection setIsOpen={setIsOpen} />
      <LikeSection setSubject={setSubject} setIsOpen={setIsOpen} />
      <WhoSection setIsOpen={setIsOpen} />
      <WhySection setIsOpen={setIsOpen} />
      <WhatSection setIsOpen={setIsOpen} />
      <ReviewsSection setIsOpen={setIsOpen} />
      <LinksSection setIsOpen={setIsOpen} />
      <ActivitiesSection setIsOpen={setIsOpen} />
      <StandSection setIsOpen={setIsOpen} />
      <FormSection subject={subject} setIsOpen={setIsOpen} />
    </div>
  );
};
