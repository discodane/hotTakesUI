import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../addEditPrediction/addEditPrediction.module.css'

export default function AddEditCaster() {
  const router = useRouter();
  const passedData = router.query;
  const [name, setName] = useState('');
  const [beat, setBeat] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const onSubmit = () => {
    const objectWithData = {
      name,
      beat,
      imageUrl,
    }
    fetch('http://localhost:3001/caster/addSportsCaster', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectWithData),
    })
    router.back();
  }

  return (
    <div onSubmit={onSubmit} className={styles.container}>
      <label htmlFor='name'>Name</label>
      <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor='beat'>Beat</label>
      <input id='beat' type="text" value={beat} onChange={e => setBeat(e.target.value)} />
      <label htmlFor='imageUrl'>Image url</label>
      <input id='imageUrl' type="text" value={beat} onChange={e => setBeat(e.target.value)} />
      <div>
        <button onClick={router.back}>Cancel</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}