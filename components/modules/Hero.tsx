import React from 'react';
import styles from '@/styles/components/Hero.module.scss';
import CommunityClinic from '../svg/CommunityClinic';
import PublicHealth from '../svg/PublicHealth';
import CreditsWrapper from './CreditsWrapper';
import Link from 'next/link';
import Button from '../partials/Button';

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
        <div className={styles.buttons}>
          <Button link={{ href: '/about', text: 'Learn More' }}>
            Here is the Text
          </Button>
        </div>
      </div>
      <div className={styles.graphic}>
        <CreditsWrapper
          credits={
            <Link target="_blank" href="https://storyset.com/education">
              Education illustrations by Storyset
            </Link>
          }
        >
          <PublicHealth />
        </CreditsWrapper>
      </div>
    </section>
  );
}
