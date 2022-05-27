import { FC, useState } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { IoIosClose } from 'react-icons/io';
import { ReactSVG } from 'react-svg';
import { ICONS } from '../../../../configs/icons.config';

type Props = {
  black?: boolean;
};

export const Iframe: FC<Props> = ({ black }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsLoading(true);
    setIsOpen(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <div className={styles.wrapper_iframe}>
          <button
            onClick={handleToggleOpen}
            className={styles.wrapper_button_close}
          >
            <IoIosClose />
          </button>
          <iframe
            title="iframe"
            src="https://widget.easyweek.io/primush-coaching"
          />
        </div>
      )}

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
