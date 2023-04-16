import React from 'react';
import styles from '@/styles/components/CreditsWrapper.module.scss';

type Props = {
  children: React.ReactNode;
  credits?: React.ReactNode;
};

export default function CreditsWrapper({ children, credits }: Props) {
  return (
    <div className={styles._}>
      {children}
      {credits && <div className={styles.credits}>{credits}</div>}
    </div>
  );
}
