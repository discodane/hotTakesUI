'use-client'
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Layout, { siteTitle } from '../components/layouts';
import utilStyles from '../styles/utils.module.css';
import Home from './home/home'
import { useEffect, useState } from 'react';
import { updateCaster } from '../lib/reducers/caster/caster.reducer';

export default function Landing() {
  const dispatch = useDispatch();
  const casters = useSelector(state => {
    console.log({state})
    return state.casters.casters
  });
  const [data, setData] = useState([])
  useEffect(() => {
    console.log(casters, "*****");
    if(!casters.length) {
      console.log("insdie");
      fetch('http://localhost:3001/caster/getAllSportsCasters').then(res => res.json()).then(data => {
        setData(data)
        dispatch(updateCaster(data));
      });
    } else {
      setData(casters);
    }
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