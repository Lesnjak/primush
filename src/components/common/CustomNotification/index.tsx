import styles from './styles.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoMdClose, IoIosWarning } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import cn from 'classnames';
import { SpaceMaker } from '../SpaceMaker';
import { Typography } from '../Typography';
import { NotificationTypesEnum } from '../../../configs/notifications.service';

export const CustomNotification =
  (msg: string, black?: boolean, type?: NotificationTypesEnum) => () => {
    return (
      <div
        className={cn(styles.notification, {
          [styles.notification_black]: black,
        })}
      >
        {type === NotificationTypesEnum.SUCCESS && (
          <>
            <div
              className={cn(
                styles.notification__line,
                styles.notification__line_green
              )}
            />
            <div className={styles.notification__left}>
              <div
                className={cn(
                  styles.notification__status,
                  styles.notification__status_green
                )}
              >
                <MdCheckCircle />
              </div>
              <SpaceMaker width="s5" />
              <Typography
                color={black ? 'white' : 'inherit'}
                fontWeight="medium"
              >
                {msg}
              </Typography>
            </div>
            <SpaceMaker width="s5" />
            <div className={styles.notification__right}>
              <IoMdClose />
            </div>
          </>
        )}
        {type === NotificationTypesEnum.INFO && (
          <>
            <div
              className={cn(
                styles.notification__line,
                styles.notification__line_blue
              )}
            />
            <div className={styles.notification__left}>
              <div
                className={cn(
                  styles.notification__status,
                  styles.notification__status_blue
                )}
              >
                <RiErrorWarningFill />
              </div>
              <SpaceMaker width="s5" />
              <Typography
                color={black ? 'white' : 'inherit'}
                fontWeight="medium"
              >
                {msg}
              </Typography>
            </div>
            <SpaceMaker width="s5" />
            <div className={styles.notification__right}>
              <IoMdClose />
            </div>
          </>
        )}
        {type === NotificationTypesEnum.WARNING && (
          <>
            <div
              className={cn(
                styles.notification__line,
                styles.notification__line_orange
              )}
            />
            <div className={styles.notification__left}>
              <div
                className={cn(
                  styles.notification__status,
                  styles.notification__status_orange
                )}
              >
                <IoIosWarning />
              </div>
              <SpaceMaker width="s5" />
              <Typography
                color={black ? 'white' : 'inherit'}
                fontWeight="medium"
              >
                {msg}
              </Typography>
            </div>
            <SpaceMaker width="s5" />
            <div className={styles.notification__right}>
              <IoMdClose />
            </div>
          </>
        )}
        {type === NotificationTypesEnum.ERROR && (
          <>
            <div
              className={cn(
                styles.notification__line,
                styles.notification__line_red
              )}
            />
            <div className={styles.notification__left}>
              <div
                className={cn(
                  styles.notification__status,
                  styles.notification__status_red
                )}
              >
                <AiFillCloseCircle />
              </div>
              <SpaceMaker width="s5" />
              <Typography
                color={black ? 'white' : 'inherit'}
                fontWeight="medium"
              >
                {msg}
              </Typography>
            </div>
            <SpaceMaker width="s5" />
            <div className={styles.notification__right}>
              <IoMdClose />
            </div>
          </>
        )}
      </div>
    );
  };
