import React from 'react';
import styles from '@/styles/components/CreditsWrapper.module.scss';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CreditsWrapper({ children, className }: Props) {
  return (
    <div className={`${styles._} ${className}`}>
      {children}
      <Link
        className={styles.credits}
        target="_blank"
        href="https://storyset.com/education"
      >
        Education illustrations by Storyset
      </Link>
    </div>
  );
}
