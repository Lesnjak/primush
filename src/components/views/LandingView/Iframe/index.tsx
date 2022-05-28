import { FC } from 'react';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';

type Props = {
  setIsOpen?: any;
};

export const Iframe: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_iframe}>
        <button
          onClick={() => setIsOpen(false)}
          className={styles.wrapper_button_close}
        >
          <IoIosClose />
        </button>
        <iframe
          title="iframe"
          src="https://widget.easyweek.io/primush-coaching"
        />
      </div>
    </div>
  );
};
