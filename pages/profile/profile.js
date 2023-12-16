import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layouts';
import { Tag } from '../../components/tag';
import { Prediction } from '../../components/prediction';
import styles from './profile.module.css';
import { useRouter } from "next/router"
import Link from 'next/link';

const calculateCorrect = takes => {
  let correct = 0;
  takes.forEach(take => {
    if(take.status && take.correct) {
      correct++;
    }
  });
  return correct;
}

const calculateWrong = takes => {
  let wrong = 0;
  takes.forEach(take => {
    if(take.status && !take.correct){
      wrong++;
    }
  })
  return wrong;
}

const calculatePending = takes => {
  let pending = 0;
  takes.forEach(take => {
    if(!take.status) {
      pending++;
    }
  })
  return pending;
}

const calculatePercentage = takes => {
  const correct = calculateCorrect(takes);
  const percentage = (correct/takes.length)*100;
  return percentage;
}

export default function FirstPost() {
  const router = useRouter();
  const {caster} = router.query;
  const data = JSON.parse(caster);
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.header}>
        <h1>{data.name}</h1>
        <Image src='/../public/images/Dan-Patrick.webp' alt='suckit' width={'100'} height={'150'}></Image>
      </div>
      <div className={styles.tagLine}>
        <Tag title={'Predictions'} value={data.takes.length} />
        <Tag title={'Correct'} value={calculateCorrect(data.takes)} />
        <Tag title={'Wrong'} value={calculateWrong(data.takes)} />
        <Tag title={'Pending'} value={calculatePending(data.takes)} />
        <Tag title={'Percentage'} value={`${calculatePercentage(data.takes)}%`} />
      </div>
      <div className={styles.predictionsList}>
        {data.takes.map(take => {
          return (
            <Prediction key={take.title} {...take} />
          )
        })}
      </div>
      <Link href={{
        pathname: '../addEditPrediction/addEditPrediction',
        query: {
          id: data._id
        }
      }}>Add Take</Link>
    </Layout>
  );
}