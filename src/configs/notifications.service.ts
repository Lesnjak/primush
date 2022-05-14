import upperFirst from 'lodash/upperFirst';
import { ReactNotificationOptions, store } from 'react-notifications-component';
import { CustomNotification } from '../components/common/CustomNotification';

/**
 * To customize notifications please check https://www.npmjs.com/package/react-notifications-component
 * and https://teodosii.github.io/react-notifications-component/
 */
export enum NotificationTypesEnum {
  SUCCESS = 'success',
  DEFAULT = 'default',
  WARNING = 'warning',
  ERROR = 'danger',
  INFO = 'info',
}

/**
 * Notification common action creator
 */
const notify = (
  message: string,
  type: NotificationTypesEnum,
  params?: Partial<ReactNotificationOptions>,
  component?: any
) => {
  store.addNotification({
    title:
      type === NotificationTypesEnum.ERROR
        ? upperFirst('error')
        : upperFirst(type),
    message,
    type,
    insert: 'top',
    container: 'top-right',
    content: component,
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: false,
    },
    ...params,
  });
};

export const infoMsg = (
  message: string,
  black?: boolean,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(
    message,
    NotificationTypesEnum.INFO,
    params,
    CustomNotification(message, black, NotificationTypesEnum.INFO)
  );
};

export const successMsg = (
  message: string,
  black?: boolean,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(
    message,
    NotificationTypesEnum.SUCCESS,
    params,
    CustomNotification(message, black, NotificationTypesEnum.SUCCESS)
  );
};

export const warningMsg = (
  message: string,
  black?: boolean,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(
    message,
    NotificationTypesEnum.WARNING,
    params,
    CustomNotification(message, black, NotificationTypesEnum.WARNING)
  );
};

export const errorMsg = (
  message: string,
  black?: boolean,
  params?: Partial<ReactNotificationOptions>
): void => {
  notify(
    message,
    NotificationTypesEnum.ERROR,
    params,
    CustomNotification(message, black, NotificationTypesEnum.ERROR)
  );
};
