import React from 'react';
import styles from '@/styles/components/ProgramSection.module.scss';

type Props = {
  className?: string;
  mainTitle: string;
  description?: string;
  children?: React.ReactNode;
};

export function ProgramSection({
  className = '',
  mainTitle = 'Main Title',
  description,
  children,
}: Props) {
  return (
    <div className={`${styles._} ${className}`}>
      <h2>{mainTitle}</h2>
      <p className={styles.description}>{description}</p>
      {children && <div className={styles.children}>{children}</div>}
    </div>
  );
}
