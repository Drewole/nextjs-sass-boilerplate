import React from 'react';
import styles from '@/styles/components/Hero.module.scss';
import CommunityClinic from '../svg/CommunityClinic';
import PublicHealth from '../svg/PublicHealth';

type Props = {};

export default function Hero(props: Props) {
  return (
    <section className={styles._}>
      <div className={styles.content}>
        <h1>
          Community Clinic for Health Equity through Social Justice’s Mission
        </h1>
        <p>
          To increase access to care for the medically underserved, transform
          the experience of care and promote health equity through addressing
          ethnic and racial disparities.
        </p>
      </div>
      <div className={styles.graphic}>
        <PublicHealth />
      </div>
    </section>
  );
}
