import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { ContentLimiter } from '../../../common/ContentLimiter';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { SpaceBlock } from '../../../common/SpaceBlock';
import { Typography } from '../../../common/Typography';
import useTranslation from 'next-translate/useTranslation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGES } from '../../../../configs/image.config';
import { SpaceMaker } from '../../../common/SpaceMaker';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import cn from 'classnames';
import { IframeButton } from '../IframeButton';

type Props = {
  setIsOpen?: any;
};

export const ReviewsSection: FC<Props> = ({ setIsOpen }) => {
  const { t } = useTranslation('common');
  const [hideHeader, setHideHeader] = useState(true);

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={styles.reviews_slide_prev}>
        <MdKeyboardArrowLeft />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className={styles.reviews_slide_next}>
        <MdKeyboardArrowRight />
      </div>
    );
  }
  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    adaptiveHeight: false,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  const handleScroll = () => {
    const element: any = document.querySelector('#reviews');
    if (element) {
      const rect: any = element.getBoundingClientRect();
      if (rect.top) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  };

  const slideList = [
    {
      name: t('reviews.review1.name'),
      image: IMAGES[t('reviews.review1.image')],
      date: t('reviews.review1.date'),
      textTitle: t('reviews.review1.title'),
      text: t('reviews.review1.text'),
      text1: t('reviews.review1.text1'),
    },
    {
      name: t('reviews.review2.name'),
      image: IMAGES[t('reviews.review2.image')],
      date: t('reviews.review2.date'),
      textTitle: t('reviews.review2.title'),
      text: t('reviews.review2.text'),
      text1: '',
    },
    {
      name: t('reviews.review3.name'),
      image: IMAGES[t('reviews.review3.image')],
      date: t('reviews.review3.date'),
      textTitle: t('reviews.review3.title'),
      text: t('reviews.review3.text'),
      text1: '',
    },
    {
      name: t('reviews.review4.name'),
      image: IMAGES[t('reviews.review4.image')],
      date: t('reviews.review4.date'),
      textTitle: t('reviews.review4.title'),
      text: t('reviews.review4.text'),
      text1: '',
    },
    {
      name: t('reviews.review5.name'),
      image: IMAGES[t('reviews.review5.image')],
      date: t('reviews.review5.date'),
      textTitle: t('reviews.review5.title'),
      text: t('reviews.review5.text'),
      text1: '',
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="reviews" className={styles.reviews}>
      <Navigation
        black
        rightButtonId="#links"
        leftButtonId="#what"
        id="#reviews"
      />
      <ContentLimiter>
        <div className={styles.reviews_wrapper}>
          <div className={styles.reviews_header}>
            <Header
              setIsOpen={setIsOpen}
              id="#reviews"
              black
              show={hideHeader}
            />
          </div>
          <div className={styles.reviews_content}>
            <div className={styles.reviews_social}>
              <a
                target="_blank"
                className={styles.reviews_social_icon}
                href={t('socialLinks.facebook')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.facebookIcon} />
              </a>
              <a
                target="_blank"
                className={styles.reviews_social_icon}
                href={t('socialLinks.instagram')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.instagramIcon} />
              </a>
              <a
                target="_blank"
                className={styles.reviews_social_icon}
                href={t('socialLinks.linkedin')}
                rel="noreferrer"
              >
                <ReactSVG src={ICONS.linkedinIcon} />
              </a>
            </div>
            <div className={styles.reviews_middle}>
              <div className={styles.reviews_contentWrapper}>
                <SpaceBlock marginBottom="s5">
                  <Typography uppercase fontWeight="bold" variant="h3">
                    {t('reviews.title')}
                  </Typography>
                </SpaceBlock>

                <div className={styles.reviews_sliderWrapper}>
                  <Slider {...settings}>
                    {slideList.map((item: any, idx: number) => (
                      <div key={idx}>
                        <div className={cn(styles.reviews_slide, 'center')}>
                          <div className={styles.reviews_slide_arrow}>
                            <img src={IMAGES.arrows} alt="icon" />
                          </div>
                          <div className={styles.reviews_slide_content}>
                            <SpaceBlock position="center" marginBottom="s2">
                              <Typography
                                align="center"
                                fontWeight="bold"
                                variant="body-12"
                              >
                                {item.textTitle}
                              </Typography>
                            </SpaceBlock>
                            <Typography
                              color="greyText"
                              align="center"
                              variant="body-12"
                            >
                              {item.text}
                            </Typography>
                            {item.text1 && (
                              <>
                                <SpaceBlock marginBottom="s1" />
                                <Typography
                                  color="greyText"
                                  align="center"
                                  variant="body-12"
                                >
                                  {item.text1}
                                </Typography>
                              </>
                            )}
                          </div>
                          <div className={styles.reviews_slide_image}>
                            <img src={item.image} alt="face" />
                          </div>
                          <Typography fontWeight="medium">
                            {item.name}
                          </Typography>
                          <SpaceBlock marginBottom="s0" />
                          <SpaceBlock positionVertical="center" width="auto">
                            <ReactSVG src={ICONS.dateIcon} />
                            <SpaceMaker width="s2" />
                            <Typography variant="body-12" color="greyTextLight">
                              {item.date}
                            </Typography>
                          </SpaceBlock>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className={styles.reviews_rightBlock}>
              <span />
              <Typography
                className={styles.reviews_vertical}
                uppercase
                variant="body-20"
              >
                {t('reviews.nav')}
              </Typography>
              <IframeButton setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </ContentLimiter>
    </div>
  );
};
