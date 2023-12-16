import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = 'Disco';
export const siteTitle = 'Hot Takes';

export default function Layout({ children, home }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={[styles.backToHome, styles.textBlue]} onClick={() => router.back()}>
          <span className={styles.textBlue}>← Back</span>
        </div>
      )}
    </div>
  );
}