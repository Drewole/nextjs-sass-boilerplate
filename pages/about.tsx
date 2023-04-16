import Head from 'next/head';
import styles from '@/styles/components/About.module.scss';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>Aimee Non-Profit - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles._}>
        <h1>This is the Aboutpage Content</h1>
        <p>
          Some body content (so the title doesn't get lonely). Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Blanditiis suscipit odit iure
          nihil est eius veniam possimus voluptates dignissimos molestias quasi
          aut, similique, natus deleniti recusandae aspernatur nobis accusantium
          quo?
        </p>
        <p>
          <Link href={'/'}>Back to Home</Link>
        </p>
      </main>
    </>
  );
}
