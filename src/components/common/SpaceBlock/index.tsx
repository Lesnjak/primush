// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  marginBottom?:
    | 's0'
    | 's1'
    | 's2'
    | 's3'
    | 's4'
    | 's5'
    | 's6'
    | 's7'
    | 's8'
    | 's9'
    | 's10';
  className?: string;
  position?: 'center' | 'between' | 'right';
  positionVertical?: 'top' | 'bottom' | 'center';
  direction?: 'row' | 'column';
  width?: 'auto';
  id?: string;
};

export const SpaceBlock: FC<Props> = (props) => {
  const {
    marginBottom,
    positionVertical,
    className,
    children,
    position,
    direction,
    width,
    id,
    ...rest
  } = props;

  const formBlockClass = cn(
    styles.formBlock,
    {
      [styles[`formBlock_mb_${marginBottom}`]]: marginBottom,
      [styles[`formBlock_width_${width}`]]: width,
      [styles[`formBlock_justify_${position}`]]: position,
      [styles[`formBlock_align_${positionVertical}`]]: positionVertical,
      [styles[`formBlock_direction_${direction}`]]: direction,
    },
    className
  );

  return (
    <div {...rest} id={id} className={formBlockClass}>
      {children}
    </div>
  );
};
