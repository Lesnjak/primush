// import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { ContentLimiter } from '../../../common/ContentLimiter';
// import useTranslation from 'next-translate/useTranslation';

export const HeaderSection: FC = () => {
  // const { t } = useTranslation('common');
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
        <Header show={hideHeader} />
      </ContentLimiter>
    </div>
  );
};
