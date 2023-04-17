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
      <h1>Intro Section</h1>
      <p>
        Some body <Link href="http://google.com">content</Link> (so the title
        doesn't get lonely). Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Blanditiis suscipit odit iure nihil est eius veniam possimus{' '}
        <Link href="http://google.com">Google</Link> dignissimos molestias quasi
        aut, similique, natus deleniti recusandae aspernatur nobis accusantium
        quo?
      </p>
    </div>
  );
}
