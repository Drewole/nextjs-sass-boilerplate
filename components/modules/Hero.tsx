import React from 'react';
import styles from '@/styles/components/Hero.module.scss';
import PublicHealth from '../svg/PublicHealth';
import CreditsWrapper from './CreditsWrapper';
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
          <Button link={{ href: '#programs', text: 'Our Models' }} />
        </div>
      </div>
      <div className={styles.graphic}>
        <CreditsWrapper>
          <PublicHealth />
        </CreditsWrapper>
      </div>
    </section>
  );
}
