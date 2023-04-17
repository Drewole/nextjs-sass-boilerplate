import * as React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Intro.module.scss';

type Props = {
  title?: string;
  body?: string;
};
//set default prop values
Intro.defaultProps = {
  title: 'Intro Section',
  body: 'Body content goes here.',
};

export default function Intro(props: Props) {
  return (
    <div className={styles._}>
      <h2>Purpose</h2>
      <nav className={styles.nav}>
        <ul>
          <li>Mission</li>
          <li>Vision</li>
          <li>Goals</li>
        </ul>
      </nav>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Our Mission</h3>
          <p>
            To increase access to care for the medically under-served, transform
            the experience of care and promote health equity through addressing
            ethnic and racial disparities
          </p>
        </div>
        <div className={styles.card}>
          <h3>Our Vision</h3>
          <p>
            To promote visibility of the increasing diversity within the nursing
            workforce and grow APRNs that are prepared and invested in caring
            for the underserved.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Our Goals</h3>
          <p>
            Improve community health while mentoring students and providing
            community service.
          </p>
        </div>
      </div>
    </div>
  );
}
