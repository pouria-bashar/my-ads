import React from 'react';
import styles from './AutoComplete.css';
import PropTypes from 'prop-types';

const SelectedOption = ({ option, onOptionRemove }) => (
  <div className={styles.selectedOption}>
    <span>{option.label}</span>
    <i
      className="material-icons"
      onClick={() => onOptionRemove(option)}
    >close
    </i>
  </div>
);
SelectedOption.propTypes = {
  option: PropTypes.object,
  onOptionRemove: PropTypes.func.isRequired,
};
export default SelectedOption;
