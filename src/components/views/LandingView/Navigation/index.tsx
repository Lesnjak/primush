import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  show: boolean;
  black?: boolean;
};

export const Header: FC<Props> = () => {
  return <div className={styles.navigation}></div>;
};
