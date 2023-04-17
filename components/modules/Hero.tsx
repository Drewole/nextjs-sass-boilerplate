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
        <h1>Paulson Stanley Community Outreach Teaching Clinic</h1>
        <p>
          Intra-professional nurse-led health care model for the underserved.
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
