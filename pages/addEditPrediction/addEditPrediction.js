import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './addEditPrediction.module.css'

export default function AddEditPrediction(props) {
  const router = useRouter();
  const passedData = router.query;
  const [title, setTitle] = useState(props.title || '');
  const [body, setBody] = useState(props.body || '');
  const [link, setLink] = useState(props.link || ''); 
  const [status, setStatus] = useState(props.status || false); // false not complete; true complete
  const [correct, setCorrect] = useState(props.correct || false) // false incorrect; true correct

  const onSubmit = () => {
    console.log(title, body, status, correct);
    const objectWithData = {
      take: {
        title,
        body,
        link,
        status,
        correct,
      },
      id: passedData.id,
    }
    fetch('http://localhost:3001/takes/addTake', {
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
      <label htmlFor='title'>Title</label>
      <input id='title' type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id='body' value={body} onChange={e => setBody(e.target.value)} />
      <div>
        <label htmlFor='complete'>Complete: </label>
        <input id='complete' type="checkbox" value={status} onChange={e => setStatus(!status)}/>
      </div>
      <div>
        <label htmlFor='correct'>Correct: </label>
        <input id='correct' type="checkbox" value={correct} onChange={e => setCorrect(!correct)}/>
      </div>
      <label htmlFor='link'>Link</label>
      <input id='link' type='text' value={link} onChange={e=> setLink(e.target.value)} />
      <div>
        <button onClick={router.back}>Cancel</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}