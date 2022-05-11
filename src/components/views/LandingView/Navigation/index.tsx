import { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

type Props = {
  id: string;
  black?: boolean;
  leftButtonId?:
    | '#header'
    | '#like'
    | '#who'
    | '#why'
    | '#activities'
    | '#links'
    | '#what';
  rightButtonId?:
    | '#header'
    | '#like'
    | '#who'
    | '#why'
    | '#links'
    | '#activities'
    | '#what';
};

export const Navigation: FC<Props> = ({
  id,
  black,
  leftButtonId,
  rightButtonId,
}) => {
  const ids = [
    '#header',
    '#like',
    '#who',
    '#why',
    '#activities',
    '#what',
    '#links',
  ];

  const handleChange = (id: string) => () => {
    const element: any = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.navigation}>
      {leftButtonId && (
        <button
          onClick={handleChange(leftButtonId)}
          className={cn(styles.navigation_button, {
            [styles.navigation_button_black]: black,
          })}
        >
          <RiArrowUpSLine />
        </button>
      )}

      <div className={styles.navigation_list}>
        <div
          className={cn(styles.navigation_number, {
            [styles.navigation_number_black]: black,
          })}
        >
          0{ids.indexOf(id) + 1}
        </div>
        {ids.map((item: string) => (
          <button
            key={item}
            onClick={handleChange(item)}
            className={cn(styles.navigation_dot, {
              [styles.navigation_dot_active]: id === item,
              [styles.navigation_dot_black]: black,
            })}
          />
        ))}
      </div>
      {rightButtonId && (
        <button
          onClick={handleChange(rightButtonId)}
          className={cn(styles.navigation_button, {
            [styles.navigation_button_black]: black,
          })}
        >
          <RiArrowDownSLine />
        </button>
      )}
    </div>
  );
};
