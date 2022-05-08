import cn from 'classnames';
import capitalize from 'lodash/capitalize';
import isString from 'lodash/isString';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type Props = {
  isCapitalize?: boolean;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  paragraph?: boolean;
  uppercase?: boolean;
  className?: string;
  fontWeight?: 'medium' | 'bold' | 'light';
  children: ReactNode | string | number;
  variant?:
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'inherit'
    | 'caption'
    | 'body-12'
    | 'body-14'
    | 'body-15'
    | 'body-16'
    | 'body-18'
    | 'body-20'
    | 'body-32'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6';
  display?: 'initial' | 'block' | 'inline';
  noWrap?: boolean;
  color?: 'redTitle' | 'inherit' | 'white' | 'error' | 'valid';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  font?: 'cabin';
};

export const Typography: FC<Props> = (props) => {
  const {
    isCapitalize,
    component,
    paragraph,
    uppercase,
    className,
    children,
    variant,
    fontWeight,
    display = 'block',
    noWrap,
    color = 'textPrimaryDark',
    align = 'left',
    font = 'Inter',
  } = props;

  const tagMapping = {
    subtitle1: 'h6',
    subtitle2: 'h6',
    subtitle3: 'h6',
    inherit: 'p',
    body1: 'p',
    body2: 'p',
    body3: 'p',
    body4: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  const Tag =
    component || (paragraph ? 'p' : variant && tagMapping[variant]) || 'span';

  let modifiedChildren: ReactNode | string | number;

  if (isCapitalize && isString(children)) {
    modifiedChildren = capitalize(children);
  }

  const typographyClass = cn(
    styles.typography,
    {
      [styles[`typography_font_${fontWeight}`]]: fontWeight,
      [styles[`typography_display_${display}`]]: display,
      [styles[`typography_variant_${variant}`]]: variant,
      [styles[`typography_color_${color}`]]: color,
      [styles[`typography_align_${align}`]]: align,
      [styles[`typography_font_${font}`]]: font,
      [styles.typography_uppercase]: uppercase,
      [styles.typography_nowrap]: noWrap,
    },
    className
  );

  return <Tag className={typographyClass}>{modifiedChildren || children}</Tag>;
};
