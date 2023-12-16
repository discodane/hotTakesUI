import styles from './tag.module.css';

export const Tag = props => {
  return (
    <div className={styles.container2}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.value}>{props.value}</div>
    </div>
  )
}