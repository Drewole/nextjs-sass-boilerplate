import * as React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Intro.module.scss';
import CommunityClinic from '../svg/CommunityClinic';
import NursingDiversity from '../svg/NursingDiversity';
import CommunityHealth from '../svg/CommunityHealth';
import CreditsWrapper from './CreditsWrapper';

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
      <p className={styles.preTitle}>Our</p>
      <h2>Purpose</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h4>Vision</h4>
          <p>
            To promote visibility of the increasing diversity within the nursing
            workforce and grow APRNs that are prepared and invested in caring
            for the underserved.
          </p>
          <div className={styles.graphic}>
            <CreditsWrapper>
              <NursingDiversity />
            </CreditsWrapper>
          </div>
        </div>
        <div className={styles.card}>
          <h4>Mission</h4>
          <p>
            To increase access to care for the medically under-served, transform
            the experience of care and promote health equity through addressing
            ethnic and racial disparities
          </p>
          <div className={styles.graphic}>
            <CreditsWrapper>
              <CommunityClinic />
            </CreditsWrapper>
          </div>
        </div>
        <div className={styles.card}>
          <h4>Goals</h4>
          <p>
            Improve community health while mentoring students and providing
            community service.
          </p>
          <div className={styles.graphic}>
            <CreditsWrapper>
              <CommunityHealth />
            </CreditsWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
