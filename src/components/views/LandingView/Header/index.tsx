import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';

type Props = {
  show: boolean;
  black?: boolean;
};

export const Header: FC<Props> = ({ show, black }) => {
  return (
    <div className={cn(styles.header, { [styles.header_hide]: show })}>
      <ReactSVG src={black ? ICONS.logoBlackIcon : ICONS.logoWhiteIcon} />
      <ReactSVG src={black ? ICONS.burgerBlackIcon : ICONS.burgerWhiteIcon} />
    </div>
  );
};
