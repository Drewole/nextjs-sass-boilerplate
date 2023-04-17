import React from 'react';
import styles from '@/styles/components/CreditsWrapper.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  credits?: React.ReactNode;
};

export default function CreditsWrapper({
  children,
  className,
  credits,
}: Props) {
  return (
    <div className={`${styles._} ${className}`}>
      {children}
      {credits && <div className={styles.credits}>{credits}</div>}
    </div>
  );
}
