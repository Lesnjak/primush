import { FC, useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';

type Props = {
  setIsOpen?: any;
  black?: boolean;
};

export const IframeButton: FC<Props> = ({ setIsOpen, black }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setIsLoading(true);
    setIsOpen(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={cn(styles.wrapper)}>
      <button
        onClick={handleOpen}
        className={cn(styles.wrapper_button, {
          [styles.wrapper_button_white]: black,
        })}
      >
        {isLoading ? (
          <div className={styles.wrapper_button_loading}>
            {black ? (
              <ReactSVG src={ICONS.loadingBlack} />
            ) : (
              <ReactSVG src={ICONS.loadingWhite} />
            )}
          </div>
        ) : (
          <>
            {black ? (
              <ReactSVG src={ICONS.calendarBlack} />
            ) : (
              <ReactSVG src={ICONS.calendarWhite} />
            )}{' '}
          </>
        )}
      </button>
    </div>
  );
};
