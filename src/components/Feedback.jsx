import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

class Feedback extends React.Component {
  //
  // ===== порядок: 1- статика ====

  //бабель преобразует в стандартный код типа Feedback.defaultProps={}
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  // ===== порядок: 2- состояние ====

  // constructor() {
  //   super();

  //   this.state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // }

  state = {
    //эту запись Бабель превращает в синтаксис конструктора
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  // ===== порядок: 3- методы ====
  handleGood = e => {
    // console.log('Good');
    // console.log(this); //чтобы достучаться до this, записываем публичное свойство в виде стрелки
    //=================
    // console.log(e); //кроссбраузерный евент в обертке реакта, но имеет все свойства евента
    // console.log(e.target); //пример свойства
    //=================
    // const target = e.target; //так как event очищается после событие, то значение необходимо записать в переменную
    // setTimeout(() => { //пример с переменной
    //   console.log(target);
    // }, 1000);
    //=================
    // this.setState({ good: 5 }); //только перезаписать, не основываясь на предыдущее значение

    this.setState(prevState => ({ good: prevState.good + 1 })); //если нужно изменять предыдущее значение, будет храниться в prevState
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  // ===== порядок: 4- рендер ====
  render() {
    return (
      <div className="feedback">
        <h2 className="feedback__title">Please leave feedback</h2>
        <ul className={styles.feedback__listButtons}>
          <li className={styles.listButtons__item}>
            <button
              className="listButtons__button"
              type="button"
              onClick={this.handleGood}
            >
              Good
            </button>
          </li>
          <li className={styles.listButtons__item}>
            <button
              className="listButtons__button"
              type="button"
              onClick={this.handleNeutral}
            >
              Neutral
            </button>
          </li>
          <li className={styles.listButtons__item}>
            <button
              className="listButtons__button"
              type="button"
              onClick={this.handleBad}
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
              <span className="listStatistics__grade--rating">
                {this.state.good}
              </span>
            </p>
          </li>
          <li className="listStatistics__item">
            <p className="listStatistics__grade">
              <span className="listStatistics__grade--category">Neutral: </span>
              <span className="listStatistics__grade--rating">
                {this.state.neutral}
              </span>
            </p>
          </li>
          <li className="listStatistics__item">
            <p className="listStatistics__grade">
              <span className="listStatistics__grade--category">Bad: </span>
              <span className="listStatistics__grade--rating">
                {this.state.bad}
              </span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
