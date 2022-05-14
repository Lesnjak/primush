import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  tooltip?: boolean;
  errorMessage?: any;
  isError?: boolean;
  label?: string;
};

export const FieldLabel: FC<Props> = (props) => {
  const { children, errorMessage, isError, tooltip, label } = props;

  return (
    <div className={cn(styles.fieldLabel, { 'error-field': isError })}>
      {label && <div className={styles.fieldLabel__label}>{label}</div>}

      {children}
      <div
        className={cn(styles.fieldLabel__error, {
          [styles.fieldLabel__error_tooltip]:
            tooltip && isError && errorMessage,
        })}
      >
        <span>{isError && errorMessage}</span>
      </div>
    </div>
  );
};
