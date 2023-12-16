'use-client'
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layouts';
import utilStyles from '../styles/utils.module.css';
import Home from './home/home'
import { useEffect, useState } from 'react';

export default function Landing() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/caster/getAllSportsCasters').then(res => res.json()).then(data => {
      setData(data)
    })
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Home data={data} />
      </section>
    </Layout>
  );
}