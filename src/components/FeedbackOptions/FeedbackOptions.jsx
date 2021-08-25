import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.list}>
      {Object.entries(options).map(option => (
        <li key={option[0]} className={styles.item}>
          <button
            type="button"
            name={option[0]}
            className={styles.button}
            onClick={onLeaveFeedback}
          >
            {option[0]}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
