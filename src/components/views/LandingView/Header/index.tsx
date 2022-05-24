import { FC, useRef, useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';
import { GrFormClose } from 'react-icons/gr';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '../../../common/Typography';
import { TiArrowSortedDown } from 'react-icons/ti';
import useOnclickOutside from 'react-cool-onclickoutside';
import { SpaceMaker } from '../../../common/SpaceMaker';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  show: boolean;
  black?: boolean;
  absolute?: boolean;
  id?:
    | '#header'
    | '#like'
    | '#who'
    | '#why'
    | '#links'
    | '#reviews'
    | '#form'
    | '#activities'
    | '#stand'
    | '#what';
};

export const Header: FC<Props> = ({ show, black, id, absolute = true }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { t } = useTranslation('common');
  const { locale, asPath } = useRouter();
  const [selectIspen, setSelectIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const links = [
    { to: '#who', link: t('questions.who') },
    { to: '#why', link: t('questions.why') },
    { to: '#what', link: t('questions.what') },
    { to: '#activities', link: t('questions.activities') },
    { to: '#links', link: t('questions.links') },
    { to: '#reviews', link: t('questions.about') },
    { to: '#form', link: t('questions.contacts') },
  ];

  const language = [
    { to: 'en', icon: ICONS.enIcon, text: 'English' },
    { to: 'ua', icon: ICONS.uaIcon, text: 'Українська' },
    { to: 'ru', icon: ICONS.ruIcon, text: 'Русский' },
  ];

  const handleLink = (id: any) => {
    const element: any = document.querySelector(id);
    setMenuIsOpen(false);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleToggleMenu = () => {
    setSelectIsOpen(!selectIspen);
  };
  const handleCloseMenu = () => {
    setSelectIsOpen(false);
  };

  const aciveLanguageObject = language.find((item: any) => item.to === locale);

  useOnclickOutside(handleCloseMenu, { refs: [ref] });
  return (
    <div
      id="hideHeader"
      className={cn(styles.header, {
        [styles.header_hide]: show,
        [styles.header_absolute]: absolute,
      })}
    >
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          handleLink('#header');
        }}
      >
        <ReactSVG src={black ? ICONS.logoBlackIcon : ICONS.logoWhiteIcon} />
      </div>

      <div onClick={() => setMenuIsOpen(true)}>
        <ReactSVG
          className={cn(styles.header_burger, 'link')}
          src={black ? ICONS.burgerBlackIcon : ICONS.burgerWhiteIcon}
        />
      </div>
      <div
        className={cn(styles.header__menu, {
          [styles.header__menu_open]: menuIsOpen,
        })}
      >
        <div className={cn(styles.header)}>
          <div
            onClick={() => setMenuIsOpen(false)}
            className={cn(styles.header_close, 'link')}
          >
            <GrFormClose />
          </div>
          <div onClick={() => false}>
            <div ref={ref} className={styles.form_select}>
              <div
                onClick={handleToggleMenu}
                className={styles.form_select_value}
              >
                <img src={aciveLanguageObject?.icon} alt="en" />
                <SpaceMaker width="s5" />
                <Typography variant="body-16">
                  {aciveLanguageObject?.text}
                </Typography>
                <SpaceMaker width="s5" />
                <Typography variant="body-20">
                  <TiArrowSortedDown />
                </Typography>
              </div>
              {selectIspen && (
                <div className={styles.form_select_menu}>
                  {language.map((item: any) => {
                    if (item.to !== locale) {
                      return (
                        <Link href={asPath} locale={item.to}>
                          <div className={styles.form_select_menu_item}>
                            <img src={item.icon} alt="en" />{' '}
                            <SpaceMaker width="s5" />
                            {item.text}
                          </div>
                        </Link>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.header_list}>
          <Typography
            className={styles.header_vertical}
            uppercase
            color="white"
            variant="body-20"
          >
            {t('header.menu')}
          </Typography>
          {links.map((item: any) => (
            <div
              key={item.link}
              onClick={() => handleLink(item.to)}
              className={cn(styles.header_list_link, {
                [styles.header_list_link_active]: item.to === id,
              })}
            >
              {item.link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
