import Link from 'next/link';
import { FC } from 'react';
import { ContentLimiter } from '../../../common/ContentLimiter';
import styles from './styles.module.scss';

export const HomeSection: FC = () => {
  return (
    <div className={styles.headerSection}>
      <ContentLimiter>
        <ul>
          <li>
            <Link href="/auth/sign-in">
              <a>Sign in</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/sign-up">
              <a>Sign up</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/new-password">
              <a>New password</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/reset-password">
              <a>Reset password</a>
            </Link>
          </li>

          <li>
            <Link href="/main/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        </ul>
      </ContentLimiter>
    </div>
  );
};
