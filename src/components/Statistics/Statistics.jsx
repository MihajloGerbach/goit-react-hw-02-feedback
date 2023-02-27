import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>

      <ul className={css.list}>
        <li>
          <p className={css.option}>Good: {good}</p>
        </li>
        <li>
          <p className={css.option}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.option}>Bad: {bad}</p>
        </li>
        <li>
          <p className={css.option}>Total: {total()}</p>
        </li>
        <li>
          <p className={css.option}>
            Positive feedback: {positivePercentage()}%
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};