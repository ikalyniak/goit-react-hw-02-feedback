import React from 'react';

import styles from './Feedback.module.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className="feedback">
        <h2 className="feedback__title">Please leave feedback</h2>
        <ul className="feedback__listButtons">
          <li className="listButtons__item">
            <button
              className="listButtons__button"
              type="button"
              onClick={() => {
                console.log('qwe');
              }}
            >
              Good
            </button>
          </li>
          <li className="listButtons__item">
            <button
              className="listButtons__button"
              type="button"
              onClick={() => {}}
            >
              Neutral
            </button>
          </li>
          <li className="listButtons__item">
            <button
              className="listButtons__button"
              type="button"
              onClick={() => {}}
            >
              Bad
            </button>
          </li>
        </ul>

        <h2 className="feedback__title">Statistics</h2>
        <ul className="feedback__listStatistics">
          <li className="listStatistics__item">
            <p className="listStatistics__grade">
              <span className="listStatistics__grade--category">Good: </span>
              <span className="listStatistics__grade--rating">3</span>
            </p>
          </li>
          <li className="listStatistics__item">
            <p className="listStatistics__grade">
              <span className="listStatistics__grade--category">Neutral: </span>
              <span className="listStatistics__grade--rating">2</span>
            </p>
          </li>
          <li className="listStatistics__item">
            <p className="listStatistics__grade">
              <span className="listStatistics__grade--category">Bad: </span>
              <span className="listStatistics__grade--rating">2</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
