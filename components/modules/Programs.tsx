import React from 'react';
import styles from '@/styles/components/Programs.module.scss';
import { ProgramSection } from './ProgramSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';

type Props = {};

export default function Programs({}: Props) {
  const settings = {
    navigation: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesPerView: 1,
    slidesToScroll: 1,
  };
  return (
    <div id={'programs'} className={styles._}>
      <ProgramSection
        className={styles.bsn}
        mainTitle="Project Connection With BSN Program"
        description="Support acquisition of professional nursing skills while addressing the unique health needs of ethnically diverse and medically underserved populations"
      >
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <Swiper {...settings}>
              <SwiperSlide>
                <Image
                  src="/images/world.jpg"
                  alt="world image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/cottonbro.jpg"
                  alt="cottonbro image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.text}>
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
          </div>
        </div>
      </ProgramSection>
      <ProgramSection
        className={styles.msn}
        mainTitle="MSN Program Collaboration"
        description="Incorporate health education activities by Nurse Educators & leadership activities by Nurse Administrators in ongoing educational & operations needs"
      >
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis ante vel neque rutrum tempus. Mauris sit amet vulputate
              felis, quis vestibulum sapien. Maecenas arcu odio, luctus in nisl
              vitae, tristique mollis quam. Donec hendrerit faucibus malesuada.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Maecenas ut enim odio. Nam diam orci, maximus nec egestas ac,
              sodales faucibus sem.
            </p>
          </div>
          <div className={styles.images}>
            <Swiper {...settings}>
              <SwiperSlide>
                <Image
                  src="/images/closeupNurse.jpg"
                  alt="closeupnurse image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/determined.jpg"
                  alt="temp image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ProgramSection>
      <ProgramSection
        className={styles.msn}
        mainTitle="DNP Program Collaboration"
        description="This would be the program description"
      >
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <Swiper {...settings}>
              <SwiperSlide>
                <Image
                  src="/images/smile.jpg"
                  alt="smile image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/heart.jpg"
                  alt="heart image"
                  width={500}
                  height={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.text}>
            <h3>Illuminate</h3>
            <p>
              Highlight leadership role of DNP prepared NPs via illustration of
              EBP implementation for the medically underserved. Strengthen
              population health competence.
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
          </div>
        </div>
      </ProgramSection>
    </div>
  );
}
