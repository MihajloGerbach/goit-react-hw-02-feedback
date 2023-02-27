import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map((el, i) => {
        return (
          <li key={i} className={css.item}>
            <button
              className={css.btn}
              name={el}
              type="button"
              onClick={onLeaveFeedback}
            >
              {capitalizeFirstLetter(el)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};