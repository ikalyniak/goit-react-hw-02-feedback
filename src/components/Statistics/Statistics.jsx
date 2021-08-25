import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.grade}>
          <span className={styles.gradeCategory}>Good: </span>
          <span className={styles.gradeRating}>{good}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.grade}>
          <span className={styles.gradeCategory}>Neutral: </span>
          <span className={styles.gradeRating}>{neutral}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.grade}>
          <span className={styles.gradeCategory}>Bad: </span>
          <span className={styles.gradeRating}>{bad}</span>
        </p>
      </li>

      <li className={styles.item}>
        <p className={styles.grade}>
          <span className={styles.gradeCategory}>Total: </span>
          <span className={styles.gradeRating}>{total}</span>
        </p>
      </li>
      <li className={styles.item}>
        <p className={styles.grade}>
          <span className={styles.gradeCategory}>Positive feedback: </span>
          <span className={styles.gradeRating}>{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
