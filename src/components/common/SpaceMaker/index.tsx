import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  width?:
    | 's1'
    | 's2'
    | 's3'
    | 's4'
    | 's5'
    | 's6'
    | 's7'
    | 's8'
    | 's9'
    | 's10'
    | 's12'
    | 's20';
};

export const SpaceMaker: FC<Props> = ({ width }) => {
  const wrapperClass = cn(styles.wrapper, {
    [styles[`wrapper__${width}`]]: width,
  });

  return <div className={wrapperClass} />;
};
