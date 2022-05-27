import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';
import { Typography } from '../../../common/Typography';
import useTranslation from 'next-translate/useTranslation';
import cn from 'classnames';

type Props = {
  black?: boolean;
  under?: boolean;
  z?: boolean;
};

export const IframeText: FC<Props> = ({ z }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={cn(styles.wrapper, { [styles.wrapper_z]: z })}>
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

      <div onClick={handleOpen}>
        <Typography
          className={styles.wrapper_underline}
          color="white"
          uppercase
          variant="body-20"
        >
          {t('header.book')}
        </Typography>
      </div>
    </div>
  );
};
