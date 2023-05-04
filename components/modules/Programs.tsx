import React from 'react';
import styles from '@/styles/components/Programs.module.scss';
import { ProgramSection } from './ProgramSection';

type Props = {};

export default function Programs({}: Props) {
  return (
    <div id={'programs'} className={styles._}>
      <ProgramSection
        className={styles.bsn}
        mainTitle="Project Connection With BSN Program"
        description="Support acquisition of professional nursing skills while addressing the unique health needs of ethnically diverse and medically underserved populations"
      >
        <ul>
          <li>
            Shape the role of professional nurses while learning the nursing
            process
          </li>
          <li>
            Illustrate team-based care and differences in educational
            preparation of APRNs through collaboration according to practice
            scope and training.
          </li>
        </ul>
      </ProgramSection>
      <ProgramSection
        className={styles.msn}
        mainTitle="MSN Program Collaboration"
        description="Incorporate health education activities by Nurse Educators & leadership activities by Nurse Administrators in ongoing educational & operations needs"
      />
      <ProgramSection
        className={styles.msn}
        mainTitle="DNP Program Collaboration"
      >
        <h3>Illuminate</h3>
        <p>
          Highlight leadership role of DNP prepared NPs via illustration of EBP
          implementation for the medically underserved. Strengthen population
          health competence.
        </p>
        <h3>Inspire</h3>
        <p>
          Provide opportunity for research aimed at addressing gaps in
          literature to meet health needs of ethnically & racially diverse
          populations with access to care barriers.
        </p>
        <h3>Guide</h3>
        <p>
          Provide opportunity for research aimed at addressing gaps in
          literature to meet health needs of ethnically & racially diverse
          populations with access to care barriers.
        </p>
      </ProgramSection>
    </div>
  );
}
